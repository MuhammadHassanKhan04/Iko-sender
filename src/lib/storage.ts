// ================================================
// IkoSender Supabase Sync + Local Storage Cache
// Synchronized cloud-based data layer
// ================================================

import { supabase } from "@/integrations/supabase/client";

export type UserRecord = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  status: "none" | "pending_subscription" | "active" | "suspended";
  plan: "none" | "starter" | "professional" | "elite" | "ultimate" | "unlimited";
  email_limit: number;
  emails_sent: number;
  created_at: string;
};

export type SubscriptionRequest = {
  id: string;
  user_email: string;
  plan_name: string;
  plan_price: string;
  email_limit: number;
  sender_email: string;
  transaction_id: string;
  payment_slip_url: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
  reviewed_at?: string;
};

const USERS_KEY = "iko_users";
const REQUESTS_KEY = "iko_subscriptions";

// ── Default Admin ────────────────────────────────
const DEFAULT_ADMIN: UserRecord = {
  id: "admin-001",
  name: "Admin",
  email: "ikoteksolutions@gmail.com",
  password: "09876543",
  role: "admin",
  status: "active",
  plan: "unlimited",
  email_limit: 99999999,
  emails_sent: 0,
  created_at: new Date().toISOString(),
};

// ── Users ────────────────────────────────────────
export async function getUsers(): Promise<UserRecord[]> {
  try {
    const { data, error } = await supabase
      .from("users_db")
      .select("*")
      .order("created_at", { ascending: true });
    
    if (error) throw error;
    if (data) {
      const records = data as UserRecord[];
      localStorage.setItem(USERS_KEY, JSON.stringify(records));
      return records;
    }
  } catch (err) {
    console.error("Supabase error fetching users, using local storage cache:", err);
  }

  // Local storage fallback
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (!raw) {
      const initial = [DEFAULT_ADMIN];
      localStorage.setItem(USERS_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw) as UserRecord[];
  } catch {
    return [DEFAULT_ADMIN];
  }
}

export function saveUsers(users: UserRecord[]): void {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export async function getUserByEmail(email: string): Promise<UserRecord | null> {
  if (!email) return null;
  try {
    const { data, error } = await supabase
      .from("users_db")
      .select("*")
      .eq("email", email.trim().toLowerCase())
      .maybeSingle();

    if (error) throw error;
    if (data) return data as UserRecord;
  } catch (err) {
    console.error(`Supabase error getting user ${email}:`, err);
  }

  // Fallback to local storage cache
  const cachedUsers = await getUsers();
  return cachedUsers.find((u) => u.email.toLowerCase() === email.toLowerCase()) ?? null;
}

export async function upsertUser(updated: UserRecord): Promise<void> {
  try {
    const cleanUser = {
      email: updated.email.trim().toLowerCase(),
      name: updated.name.trim(),
      password: updated.password,
      role: updated.role,
      status: updated.status,
      plan: updated.plan,
      email_limit: updated.email_limit,
      emails_sent: updated.emails_sent,
    };
    
    const { error } = await supabase
      .from("users_db")
      .upsert(cleanUser, { onConflict: "email" });

    if (error) throw error;
  } catch (err) {
    console.error("Supabase error upserting user:", err);
  }

  // Sync to local cache
  try {
    const raw = localStorage.getItem(USERS_KEY);
    const users: UserRecord[] = raw ? JSON.parse(raw) : [];
    const idx = users.findIndex((u) => u.email.toLowerCase() === updated.email.toLowerCase());
    if (idx >= 0) {
      users[idx] = updated;
    } else {
      users.push(updated);
    }
    saveUsers(users);
  } catch (err) {
    console.error("Local storage update failed:", err);
  }
}

export async function deleteUserByEmail(email: string): Promise<void> {
  try {
    const { error } = await supabase
      .from("users_db")
      .delete()
      .eq("email", email.trim().toLowerCase());

    if (error) throw error;
  } catch (err) {
    console.error(`Supabase error deleting user ${email}:`, err);
  }

  // Local cache sync
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (raw) {
      const users: UserRecord[] = JSON.parse(raw);
      const filtered = users.filter((u) => u.email.toLowerCase() !== email.toLowerCase());
      saveUsers(filtered);
    }
  } catch (err) {
    console.error("Local storage delete failed:", err);
  }
}

// ── Subscription Requests ─────────────────────────
export async function getRequests(): Promise<SubscriptionRequest[]> {
  try {
    const { data, error } = await supabase
      .from("subscription_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    if (data) {
      const records = data as SubscriptionRequest[];
      localStorage.setItem(REQUESTS_KEY, JSON.stringify(records));
      return records;
    }
  } catch (err) {
    console.error("Supabase error fetching requests:", err);
  }

  // Local cache fallback
  try {
    const raw = localStorage.getItem(REQUESTS_KEY);
    return raw ? (JSON.parse(raw) as SubscriptionRequest[]) : [];
  } catch {
    return [];
  }
}

export function saveRequests(requests: SubscriptionRequest[]): void {
  localStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
}

export async function addRequest(req: Omit<SubscriptionRequest, "id" | "created_at">): Promise<SubscriptionRequest> {
  const newReq: SubscriptionRequest = {
    ...req,
    id: `req-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    created_at: new Date().toISOString(),
  };

  try {
    const { error } = await supabase
      .from("subscription_requests")
      .insert({
        user_email: newReq.user_email,
        plan_name: newReq.plan_name,
        plan_price: newReq.plan_price,
        email_limit: newReq.email_limit,
        sender_email: newReq.sender_email,
        transaction_id: newReq.transaction_id,
        payment_slip_url: newReq.payment_slip_url,
        status: newReq.status,
      });

    if (error) throw error;
  } catch (err) {
    console.error("Supabase error adding request:", err);
  }

  // Update local cache
  try {
    await getRequests();
  } catch (err) {
    console.error("Local storage request save fallback:", err);
  }

  return newReq;
}

export async function updateRequestStatus(
  id: string,
  status: "approved" | "rejected"
): Promise<void> {
  try {
    const { error } = await supabase
      .from("subscription_requests")
      .update({ status, reviewed_at: new Date().toISOString() })
      .eq("id", id);

    if (error) throw error;
  } catch (err) {
    console.error(`Supabase error updating request status for request ${id}:`, err);
  }

  // Local cache update
  try {
    const raw = localStorage.getItem(REQUESTS_KEY);
    if (raw) {
      const requests: SubscriptionRequest[] = JSON.parse(raw);
      const idx = requests.findIndex((r) => r.id === id);
      if (idx >= 0) {
        requests[idx].status = status;
        requests[idx].reviewed_at = new Date().toISOString();
        saveRequests(requests);
      }
    }
  } catch (err) {
    console.error("Local storage request status update failed:", err);
  }
}

// ── CSV Export ────────────────────────────────────
function toCSV(rows: object[]): string {
  if (rows.length === 0) return "";
  const headers = Object.keys(rows[0]);
  const lines = [
    headers.join(","),
    ...rows.map((row: any) =>
      headers
        .map((h) => {
          const val = String(row[h] ?? "").replace(/"/g, '""');
          return `"${val}"`;
        })
        .join(",")
    ),
  ];
  return lines.join("\n");
}

function downloadFile(filename: string, content: string, mime = "text/csv"): void {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export async function exportUsersCSV(): Promise<void> {
  const users = await getUsers();
  const exportData = users.map((u) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    role: u.role,
    status: u.status,
    plan: u.plan,
    email_limit: u.email_limit,
    emails_sent: u.emails_sent,
    created_at: u.created_at,
  }));
  downloadFile(`iko_users_${new Date().toISOString().slice(0, 10)}.csv`, toCSV(exportData));
}

export async function exportRequestsCSV(): Promise<void> {
  const requests = await getRequests();
  const exportData = requests.map((r) => ({
    id: r.id,
    user_email: r.user_email,
    plan_name: r.plan_name,
    plan_price: r.plan_price,
    email_limit: r.email_limit,
    sender_email: r.sender_email,
    transaction_id: r.transaction_id,
    status: r.status,
    created_at: r.created_at,
    reviewed_at: r.reviewed_at ?? "",
  }));
  downloadFile(
    `iko_subscriptions_${new Date().toISOString().slice(0, 10)}.csv`,
    toCSV(exportData)
  );
}

// ── Generate unique ID ────────────────────────────
export function generateId(): string {
  return `usr-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
