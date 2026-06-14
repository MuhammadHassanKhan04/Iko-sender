import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
    Trash2, UserPlus, LogOut, Shield, Mail,
    Users as UsersIcon, ShieldCheck, LayoutDashboard, CreditCard,
    Check, X, FileText, Image, Download, RefreshCw, Loader2
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
    getRequests,
    updateRequestStatus,
    exportUsersCSV,
    exportRequestsCSV,
    getUserByEmail,
    upsertUser,
} from "@/lib/storage";

const AdminDashboard = () => {
    const { user, logout, getAllUsers, addUser, deleteUser, updateUserStatus } = useAuth();
    const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
    const [users, setUsers] = useState<any[]>([]);
    const [requests, setRequests] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState<"users" | "subscriptions">("users");

    const [isLoading, setIsLoading] = useState(true);
    const [isReqLoading, setIsReqLoading] = useState(true);
    const [isActionLoading, setIsActionLoading] = useState(false);

    const [selectedSlip, setSelectedSlip] = useState<string | null>(null);
    const [slipOpen, setSlipOpen] = useState(false);

    const navigate = useNavigate();

    const fetchUsers = async () => {
        setIsLoading(true);
        const data = await getAllUsers();
        setUsers(data);
        setIsLoading(false);
    };

    const fetchRequests = async () => {
        setIsReqLoading(true);
        try {
            const data = await getRequests();
            setRequests(data);
        } catch (err) {
            console.error("Error fetching requests:", err);
        } finally {
            setIsReqLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
        fetchRequests();
    }, []);

    const handleAddUser = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newUser.name && newUser.email && newUser.password) {
            setIsActionLoading(true);
            await addUser(newUser.name, newUser.email, newUser.password);
            setNewUser({ name: "", email: "", password: "" });
            await fetchUsers();
            setIsActionLoading(false);
        }
    };

    const handleDeleteUser = async (email: string) => {
        setIsActionLoading(true);
        await deleteUser(email);
        await fetchUsers();
        setIsActionLoading(false);
    };

    const handleApproveRequest = async (req: any) => {
        setIsActionLoading(true);
        try {
            // 1. Mark request as approved
            await updateRequestStatus(req.id, "approved");

            // 2. Update user status in localStorage
            const planCode = req.plan_name.toLowerCase();
            await updateUserStatus(req.user_email, "active", planCode, req.email_limit);

            toast.success(`Approved subscription for ${req.user_email}`);
            await fetchRequests();
            await fetchUsers();
        } catch (err: any) {
            toast.error("Failed to approve: " + err.message);
        } finally {
            setIsActionLoading(false);
        }
    };

    const handleRejectRequest = async (req: any) => {
        setIsActionLoading(true);
        try {
            // 1. Mark request as rejected
            await updateRequestStatus(req.id, "rejected");

            // 2. Reset user status
            const record = await getUserByEmail(req.user_email);
            if (record) {
                await upsertUser({ ...record, status: "none", plan: "none", email_limit: 0, emails_sent: 0 });
            }

            toast.success(`Rejected subscription for ${req.user_email}`);
            await fetchRequests();
            await fetchUsers();
        } catch (err: any) {
            toast.error("Failed to reject: " + err.message);
        } finally {
            setIsActionLoading(false);
        }
    };

    const pendingCount = requests.filter((r) => r.status === "pending").length;

    return (
        <div className="min-h-screen bg-gray-50 font-sans selection:bg-blue-600 selection:text-white">
            {/* Top Header */}
            <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white shadow-lg shadow-gray-200">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold tracking-tight text-gray-900">Admin Control</h1>
                            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">IkoSender Enterprise</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* CSV Export Buttons */}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => { exportUsersCSV(); toast.success("Users CSV downloaded!"); }}
                            className="hidden md:flex items-center gap-2 border-2 rounded-xl h-10 font-bold text-green-700 border-green-200 hover:bg-green-50"
                        >
                            <Download className="w-3.5 h-3.5" /> Users CSV
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => { exportRequestsCSV(); toast.success("Subscriptions CSV downloaded!"); }}
                            className="hidden md:flex items-center gap-2 border-2 rounded-xl h-10 font-bold text-blue-700 border-blue-200 hover:bg-blue-50"
                        >
                            <Download className="w-3.5 h-3.5" /> Requests CSV
                        </Button>
                        <Button variant="outline" onClick={() => navigate("/dashboard")} className="hidden md:flex items-center gap-2 border-2 rounded-xl h-11 font-bold">
                            <LayoutDashboard className="w-4 h-4" /> Go to Console
                        </Button>
                        <Button variant="ghost" onClick={logout} className="flex items-center gap-2 text-gray-500 hover:text-red-600 hover:bg-red-50 h-11 px-4 rounded-xl font-bold">
                            <LogOut className="w-4 h-4" /> Sign Out
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-6 md:p-10 space-y-10">
                {/* Welcome Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-in">
                    <div className="space-y-1">
                        <h2 className="text-3xl font-bold text-gray-900">Management Overview</h2>
                        <p className="text-gray-500 font-medium">All data saved locally — export anytime as CSV.</p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm gap-1">
                        <button
                            onClick={() => setActiveTab("users")}
                            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                                activeTab === "users" ? "bg-slate-900 text-white shadow-md" : "text-gray-500 hover:text-slate-950"
                            }`}
                        >
                            <UsersIcon className="w-4 h-4" /> User Registry
                        </button>
                        <button
                            onClick={() => setActiveTab("subscriptions")}
                            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                                activeTab === "subscriptions" ? "bg-slate-900 text-white shadow-md" : "text-gray-500 hover:text-slate-950"
                            }`}
                        >
                            <CreditCard className="w-4 h-4" /> Subscription Requests
                            {pendingCount > 0 && (
                                <span className="bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black animate-pulse">
                                    {pendingCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {activeTab === "users" ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Add User Card */}
                        <Card className="lg:col-span-1 border-none shadow-xl shadow-gray-200/50 rounded-3xl overflow-hidden h-fit animate-slide-in-up">
                            <CardHeader className="bg-gray-900 text-white p-8">
                                <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                                    <UserPlus className="h-6 w-6 text-blue-400" /> Grant Access
                                </CardTitle>
                                <CardDescription className="text-gray-400 font-medium pt-2">
                                    Create a new user profile and give them workspace access.
                                </CardDescription>
                            </CardHeader>
                            <form onSubmit={handleAddUser}>
                                <CardContent className="space-y-6 p-8">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</Label>
                                        <Input
                                            id="name"
                                            value={newUser.name}
                                            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                            placeholder="E.g. Marketing Lead"
                                            className="h-12 rounded-xl bg-gray-50 border-gray-100 focus:bg-white transition-all font-medium"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="u-email" className="text-xs font-bold uppercase tracking-widest text-gray-400">Login Email</Label>
                                        <Input
                                            id="u-email"
                                            type="email"
                                            value={newUser.email}
                                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                            placeholder="user@company.com"
                                            className="h-12 rounded-xl bg-gray-50 border-gray-100 focus:bg-white transition-all font-medium"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="u-password" className="text-xs font-bold uppercase tracking-widest text-gray-400">Password</Label>
                                        <Input
                                            id="u-password"
                                            type="password"
                                            value={newUser.password}
                                            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                            placeholder="Secure Auth Code"
                                            className="h-12 rounded-xl bg-gray-50 border-gray-100 focus:bg-white transition-all font-medium"
                                            required
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={isActionLoading}
                                        className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-100 transition-all hover:scale-[1.02]"
                                    >
                                        {isActionLoading ? "Processing..." : "Authorize User"}
                                    </Button>
                                </CardContent>
                            </form>
                        </Card>

                        {/* User List */}
                        <div className="lg:col-span-2 space-y-6 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <UsersIcon className="h-5 w-5 text-blue-600" /> Active Registry
                                </h3>
                                <Button variant="outline" size="sm" onClick={fetchUsers} className="rounded-xl font-bold gap-2">
                                    <RefreshCw className="w-3.5 h-3.5" /> Refresh
                                </Button>
                            </div>

                            <Card className="border-none shadow-xl shadow-gray-200/50 rounded-3xl overflow-hidden bg-white">
                                <CardContent className="p-0">
                                    {isLoading ? (
                                        <div className="text-center py-20 bg-white">
                                            <div className="w-16 h-16 bg-blue-50/50 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                                <Shield className="w-8 h-8 text-blue-300" />
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900">Loading Registry...</h3>
                                        </div>
                                    ) : users.length === 0 ? (
                                        <div className="text-center py-20 bg-white">
                                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                                                <Shield className="w-8 h-8" />
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900">No Users Found</h3>
                                            <p className="text-gray-500 max-w-xs mx-auto text-sm">Use the form to add users.</p>
                                        </div>
                                    ) : (
                                        <Table>
                                            <TableHeader className="bg-gray-50/50">
                                                <TableRow className="border-gray-100">
                                                    <TableHead className="text-xs font-bold uppercase tracking-widest text-gray-400 h-14 px-8">Identity</TableHead>
                                                    <TableHead className="text-xs font-bold uppercase tracking-widest text-gray-400 h-14">Status & Plan</TableHead>
                                                    <TableHead className="text-xs font-bold uppercase tracking-widest text-gray-400 h-14">Emails Sent</TableHead>
                                                    <TableHead className="text-xs font-bold uppercase tracking-widest text-gray-400 h-14 text-right px-8">Control</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {users.map((u, i) => (
                                                    <TableRow key={i} className="border-gray-50 hover:bg-gray-50/30 transition-colors">
                                                        <TableCell className="px-8 py-5">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 uppercase">
                                                                    {u.name.substring(0, 2)}
                                                                </div>
                                                                <div className="min-w-0">
                                                                    <p className="font-bold text-gray-900 truncate">{u.name}</p>
                                                                    <p className="text-xs text-gray-400 font-medium truncate">{u.email}</p>
                                                                </div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="py-5">
                                                            <div className="flex flex-col gap-1">
                                                                <span className="text-xs font-bold text-slate-800 uppercase tracking-tighter">{u.plan.toUpperCase()}</span>
                                                                <code className={`text-[10px] w-fit font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                                                                    u.status === 'active' ? 'bg-green-50 text-green-600' :
                                                                    u.status === 'pending_subscription' ? 'bg-amber-50 text-amber-600' :
                                                                    'bg-slate-100 text-slate-600'
                                                                }`}>{u.status}</code>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="py-5">
                                                            <div className="text-xs font-bold text-slate-700">
                                                                {u.emails_sent.toLocaleString()} / {u.email_limit === 99999999 ? "∞" : u.email_limit.toLocaleString()}
                                                            </div>
                                                            <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden">
                                                                <div
                                                                    className="h-full bg-blue-600 rounded-full"
                                                                    style={{ width: `${Math.min(100, (u.emails_sent / (u.email_limit || 1)) * 100)}%` }}
                                                                />
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="text-right px-8 py-5">
                                                            {u.role !== "admin" && (
                                                                <Button
                                                                    variant="ghost"
                                                                    size="icon"
                                                                    disabled={isActionLoading}
                                                                    className="w-10 h-10 rounded-xl text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                                                                    onClick={() => handleDeleteUser(u.email)}
                                                                >
                                                                    <Trash2 className="h-5 w-5" />
                                                                </Button>
                                                            )}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6 animate-fade-in">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <CreditCard className="h-5 w-5 text-blue-600" /> Pending & Historical Requests
                            </h3>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={fetchRequests} className="rounded-xl font-bold gap-2">
                                    <RefreshCw className="w-3.5 h-3.5" /> Refresh
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => { exportRequestsCSV(); toast.success("CSV downloaded!"); }}
                                    className="rounded-xl font-bold gap-2 text-blue-700 border-blue-200 hover:bg-blue-50"
                                >
                                    <Download className="w-3.5 h-3.5" /> Export CSV
                                </Button>
                            </div>
                        </div>

                        <Card className="border-none shadow-xl shadow-gray-200/50 rounded-3xl overflow-hidden bg-white">
                            <CardContent className="p-0">
                                {isReqLoading ? (
                                    <div className="text-center py-20 bg-white">
                                        <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
                                        <h3 className="text-lg font-bold text-gray-900">Loading Requests...</h3>
                                    </div>
                                ) : requests.length === 0 ? (
                                    <div className="text-center py-20 bg-white">
                                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                                            <FileText className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">No Subscription Submissions</h3>
                                        <p className="text-gray-500 max-w-xs mx-auto text-sm">Users have not submitted any Easypaisa receipts yet.</p>
                                    </div>
                                ) : (
                                    <Table>
                                        <TableHeader className="bg-gray-50/50">
                                            <TableRow className="border-gray-100">
                                                <TableHead className="text-xs font-bold uppercase tracking-widest text-gray-400 h-14 px-6">User</TableHead>
                                                <TableHead className="text-xs font-bold uppercase tracking-widest text-gray-400 h-14">Plan</TableHead>
                                                <TableHead className="text-xs font-bold uppercase tracking-widest text-gray-400 h-14">Sender Email</TableHead>
                                                <TableHead className="text-xs font-bold uppercase tracking-widest text-gray-400 h-14">TRX ID</TableHead>
                                                <TableHead className="text-xs font-bold uppercase tracking-widest text-gray-400 h-14">Slip</TableHead>
                                                <TableHead className="text-xs font-bold uppercase tracking-widest text-gray-400 h-14 text-center">Status</TableHead>
                                                <TableHead className="text-xs font-bold uppercase tracking-widest text-gray-400 h-14 text-right px-6">Action</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {requests.map((req, i) => (
                                                <TableRow key={i} className="border-gray-50 hover:bg-gray-50/30 transition-colors">
                                                    <TableCell className="px-6 py-4 font-bold text-slate-800 text-sm">{req.user_email}</TableCell>
                                                    <TableCell className="py-4">
                                                        <div className="flex flex-col">
                                                            <span className="font-extrabold text-slate-900 text-sm">{req.plan_name}</span>
                                                            <span className="text-[10px] text-slate-400 font-bold uppercase">{req.plan_price} ({req.email_limit.toLocaleString()} mails)</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="py-4 text-xs font-semibold text-slate-600">{req.sender_email || "N/A"}</TableCell>
                                                    <TableCell className="py-4 font-mono text-xs font-bold text-blue-600">{req.transaction_id}</TableCell>
                                                    <TableCell className="py-4">
                                                        {req.payment_slip_url ? (
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                className="rounded-lg text-xs font-bold gap-1 border-slate-200 h-9 px-3 hover:bg-slate-100"
                                                                onClick={() => { setSelectedSlip(req.payment_slip_url); setSlipOpen(true); }}
                                                            >
                                                                <Image className="w-3.5 h-3.5 text-blue-500" /> View Slip
                                                            </Button>
                                                        ) : (
                                                            <span className="text-xs text-red-500 font-bold">No Slip</span>
                                                        )}
                                                    </TableCell>
                                                    <TableCell className="py-4 text-center">
                                                        <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                                                            req.status === 'approved' ? 'bg-green-50 text-green-600 border-green-100' :
                                                            req.status === 'rejected' ? 'bg-red-50 text-red-600 border-red-100' :
                                                            'bg-amber-50 text-amber-600 border-amber-100 animate-pulse'
                                                        }`}>
                                                            {req.status}
                                                        </span>
                                                    </TableCell>
                                                    <TableCell className="text-right px-6 py-4">
                                                        {req.status === 'pending' ? (
                                                            <div className="flex justify-end gap-2">
                                                                <Button
                                                                    size="sm"
                                                                    onClick={() => handleApproveRequest(req)}
                                                                    disabled={isActionLoading}
                                                                    className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg h-9 font-bold px-3 gap-1 shadow-md shadow-emerald-50"
                                                                >
                                                                    <Check className="w-3.5 h-3.5" /> Approve
                                                                </Button>
                                                                <Button
                                                                    size="sm"
                                                                    onClick={() => handleRejectRequest(req)}
                                                                    disabled={isActionLoading}
                                                                    className="bg-red-600 hover:bg-red-700 text-white rounded-lg h-9 font-bold px-3 gap-1 shadow-md shadow-red-50"
                                                                >
                                                                    <X className="w-3.5 h-3.5" /> Reject
                                                                </Button>
                                                            </div>
                                                        ) : (
                                                            <span className="text-xs text-slate-400 font-semibold uppercase">Reviewed</span>
                                                        )}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>

            {/* Slip Preview Dialog */}
            <Dialog open={slipOpen} onOpenChange={setSlipOpen}>
                <DialogContent className="rounded-[2rem] border-none shadow-2xl p-6 max-w-xl max-h-[85vh] overflow-hidden flex flex-col bg-white">
                    <DialogHeader className="mb-4">
                        <DialogTitle className="text-lg font-black text-slate-800 flex items-center gap-2">
                            <Image className="w-5 h-5 text-blue-600" /> Easypaisa Payment Slip
                        </DialogTitle>
                    </DialogHeader>
                    <div className="flex-1 overflow-y-auto flex items-center justify-center p-2 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner">
                        {selectedSlip && (
                            <img
                                src={selectedSlip}
                                alt="Easypaisa Transfer Slip"
                                className="max-w-full max-h-[50vh] object-contain rounded-lg shadow"
                            />
                        )}
                    </div>
                    <div className="mt-4 flex justify-end">
                        <Button onClick={() => setSlipOpen(false)} className="rounded-xl font-bold bg-slate-900 text-white hover:bg-black px-6 h-11">
                            Close Preview
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            <footer className="max-w-7xl mx-auto p-10 text-center border-t border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">IkoSender Enterprise • Local CSV Storage</p>
            </footer>
        </div>
    );
};

export default AdminDashboard;
