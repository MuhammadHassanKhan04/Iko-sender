import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import {
  UserRecord,
  getUsers,
  getUserByEmail,
  upsertUser,
  deleteUserByEmail,
  generateId,
} from "@/lib/storage";

export type User = {
  name: string;
  email: string;
  password?: string;
  role: "user" | "admin";
  status: "none" | "pending_subscription" | "active" | "suspended";
  plan: "none" | "starter" | "professional" | "elite" | "ultimate" | "unlimited";
  email_limit: number;
  emails_sent: number;
};

type AuthContextType = {
  user: User | null;
  isAdmin: boolean;
  loginAdmin: (email: string, pass: string) => Promise<boolean>;
  loginUser: (nameOrEmail: string, pass: string) => Promise<boolean>;
  signUpUser: (name: string, email: string, pass: string) => Promise<boolean>;
  logout: () => void;
  refreshUserProfile: () => Promise<void>;
  // Admin functions
  getAllUsers: () => Promise<User[]>;
  addUser: (name: string, email: string, pass: string) => Promise<void>;
  deleteUser: (email: string) => Promise<void>;
  updateUserStatus: (email: string, status: string, plan: string, email_limit: number) => Promise<void>;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function recordToUser(r: UserRecord): User {
  return {
    name: r.name,
    email: r.email,
    role: r.role,
    status: r.status,
    plan: r.plan,
    email_limit: r.email_limit,
    emails_sent: r.emails_sent,
  };
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  // Initialize storage (seeds admin) + restore session on mount
  useEffect(() => {
    // Ensure default admin exists in storage
    getUsers();

    const storedUser = localStorage.getItem("ikosender_user");
    if (storedUser) {
      try {
        const parsed: User = JSON.parse(storedUser);
        // Refresh from storage to get latest status/quota
        const fresh = getUserByEmail(parsed.email);
        if (fresh) {
          const u = recordToUser(fresh);
          setUser(u);
          setIsAdmin(u.role === "admin");
          localStorage.setItem("ikosender_user", JSON.stringify(u));
        } else {
          localStorage.removeItem("ikosender_user");
        }
      } catch {
        localStorage.removeItem("ikosender_user");
      }
    }
  }, []);

  const refreshUserProfile = async () => {
    if (!user?.email) return;
    const fresh = getUserByEmail(user.email);
    if (fresh) {
      const u = recordToUser(fresh);
      setUser(u);
      setIsAdmin(u.role === "admin");
      localStorage.setItem("ikosender_user", JSON.stringify(u));
    }
  };

  // ── Admin Login ──────────────────────────────────
  const loginAdmin = async (email: string, pass: string): Promise<boolean> => {
    const record = getUserByEmail(email.trim());
    if (record && record.password === pass.trim() && record.role === "admin") {
      const u = recordToUser(record);
      setUser(u);
      setIsAdmin(true);
      localStorage.setItem("ikosender_user", JSON.stringify(u));
      toast.success("Welcome back, Admin!");
      return true;
    }
    toast.error("Invalid Admin Credentials");
    return false;
  };

  // ── User Login ───────────────────────────────────
  const loginUser = async (nameOrEmail: string, pass: string): Promise<boolean> => {
    const identifier = nameOrEmail.trim().toLowerCase();
    const cleanPass = pass.trim();
    const allUsers = getUsers();
    const record = allUsers.find(
      (u) =>
        (u.email.toLowerCase() === identifier || u.name.toLowerCase() === identifier) &&
        u.password === cleanPass
    );

    if (record) {
      const u = recordToUser(record);
      setUser(u);
      setIsAdmin(u.role === "admin");
      localStorage.setItem("ikosender_user", JSON.stringify(u));
      toast.success(`Welcome back, ${record.name}!`);
      return true;
    }

    toast.error("Invalid Username or Password");
    return false;
  };

  // ── Sign Up ──────────────────────────────────────
  const signUpUser = async (name: string, email: string, pass: string): Promise<boolean> => {
    const cleanEmail = email.trim().toLowerCase();
    const existing = getUserByEmail(cleanEmail);
    if (existing) {
      toast.error("An account with this email already exists");
      return false;
    }

    const newRecord: UserRecord = {
      id: generateId(),
      name: name.trim(),
      email: cleanEmail,
      password: pass.trim(),
      role: "user",
      status: "none",
      plan: "none",
      email_limit: 0,
      emails_sent: 0,
      created_at: new Date().toISOString(),
    };

    upsertUser(newRecord);

    const u = recordToUser(newRecord);
    setUser(u);
    setIsAdmin(false);
    localStorage.setItem("ikosender_user", JSON.stringify(u));
    toast.success("Account created successfully!");
    return true;
  };

  // ── Logout ───────────────────────────────────────
  const logout = () => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem("ikosender_user");
    navigate("/");
    toast.success("Logged out successfully");
  };

  // ── Admin Tools ──────────────────────────────────
  const getAllUsers = async (): Promise<User[]> => {
    return getUsers().map(recordToUser);
  };

  const addUser = async (name: string, email: string, pass: string): Promise<void> => {
    const existing = getUserByEmail(email.trim());
    if (existing) {
      toast.error("User with this email already exists");
      return;
    }
    const newRecord: UserRecord = {
      id: generateId(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: pass.trim(),
      role: "user",
      status: "none",
      plan: "none",
      email_limit: 0,
      emails_sent: 0,
      created_at: new Date().toISOString(),
    };
    upsertUser(newRecord);
    toast.success("User added successfully");
  };

  const deleteUser = async (email: string): Promise<void> => {
    deleteUserByEmail(email);
    toast.success("User deleted");
  };

  const updateUserStatus = async (
    email: string,
    status: string,
    plan: string,
    email_limit: number
  ): Promise<void> => {
    const record = getUserByEmail(email);
    if (!record) {
      toast.error("User not found");
      return;
    }
    const updated: UserRecord = {
      ...record,
      status: status as UserRecord["status"],
      plan: plan as UserRecord["plan"],
      email_limit,
      emails_sent: 0,
    };
    upsertUser(updated);

    // If the currently logged-in user's status was updated, refresh session
    if (user?.email.toLowerCase() === email.toLowerCase()) {
      const u = recordToUser(updated);
      setUser(u);
      localStorage.setItem("ikosender_user", JSON.stringify(u));
    }

    toast.success(`User updated → ${plan} (${email_limit} emails)`);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin,
        loginAdmin,
        loginUser,
        signUpUser,
        logout,
        refreshUserProfile,
        getAllUsers,
        addUser,
        deleteUser,
        updateUserStatus,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
