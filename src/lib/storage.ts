// ================================================
// IkoSender Local Storage + CSV Data Layer
// Koi database nahi — sab kuch browser mein save
// ================================================

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
export function getUsers(): UserRecord[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (!raw) {
      // First run: seed default admin
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

export function getUserByEmail(email: string): UserRecord | null {
  return getUsers().find((u) => u.email.toLowerCase() === email.toLowerCase()) ?? null;
}

export function upsertUser(updated: UserRecord): void {
  const users = getUsers();
  const idx = users.findIndex((u) => u.email.toLowerCase() === updated.email.toLowerCase());
  if (idx >= 0) {
    users[idx] = updated;
  } else {
    users.push(updated);
  }
  saveUsers(users);
}

export function deleteUserByEmail(email: string): void {
  const users = getUsers().filter((u) => u.email.toLowerCase() !== email.toLowerCase());
  saveUsers(users);
}

// ── Subscription Requests ─────────────────────────
export function getRequests(): SubscriptionRequest[] {
  try {
    const raw = localStorage.getItem(REQUESTS_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as SubscriptionRequest[];
  } catch {
    return [];
  }
}

export function saveRequests(requests: SubscriptionRequest[]): void {
  localStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
}

export function addRequest(req: Omit<SubscriptionRequest, "id" | "created_at">): SubscriptionRequest {
  const requests = getRequests();
  const newReq: SubscriptionRequest = {
    ...req,
    id: `req-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    created_at: new Date().toISOString(),
  };
  requests.unshift(newReq);
  saveRequests(requests);
  return newReq;
}

export function updateRequestStatus(
  id: string,
  status: "approved" | "rejected"
): void {
  const requests = getRequests();
  const idx = requests.findIndex((r) => r.id === id);
  if (idx >= 0) {
    requests[idx].status = status;
    requests[idx].reviewed_at = new Date().toISOString();
    saveRequests(requests);
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

export function exportUsersCSV(): void {
  const users = getUsers().map((u) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    role: u.role,
    status: u.status,
    plan: u.plan,
    email_limit: u.email_limit,
    emails_sent: u.emails_sent,
    created_at: u.created_at,
    // password excluded from export for security
  }));
  downloadFile(`iko_users_${new Date().toISOString().slice(0, 10)}.csv`, toCSV(users));
}

export function exportRequestsCSV(): void {
  const requests = getRequests().map((r) => ({
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
    // slip image excluded (too large for CSV)
  }));
  downloadFile(
    `iko_subscriptions_${new Date().toISOString().slice(0, 10)}.csv`,
    toCSV(requests)
  );
}

// ── Generate unique ID ────────────────────────────
export function generateId(): string {
  return `usr-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
