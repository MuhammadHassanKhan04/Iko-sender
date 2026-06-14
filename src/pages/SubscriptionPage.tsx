import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck, Mail, Upload, Loader2, LogOut, Zap, RefreshCw, AlertCircle } from "lucide-react";
import { addRequest, getRequests, getUserByEmail, upsertUser } from "@/lib/storage";
import { toast } from "sonner";

const SUBSCRIPTION_PLANS = [
  {
    name: "Starter",
    price: "$2",
    pkr: "approx. 560 PKR",
    limit: 10000,
    description: "Ideal for testing and small target campaigns",
    features: ["10,000 Email sends", "SMTP Connection Support", "Basic Analytics", "AI Subject Line Helper"],
  },
  {
    name: "Professional",
    price: "$4",
    pkr: "approx. 1,120 PKR",
    limit: 25000,
    description: "Perfect for growing marketing outreach",
    features: ["25,000 Email sends", "SMTP Connection Support", "Advanced Analytics", "Smart Template Customizer", "AI Subject Line Helper"],
  },
  {
    name: "Elite",
    price: "$6",
    pkr: "approx. 1,680 PKR",
    limit: 50000,
    description: "Designed for high-frequency bulk sending",
    features: ["50,000 Email sends", "SMTP Connection Support", "Advanced Analytics", "Smart Template Customizer", "Priority Support"],
  },
  {
    name: "Ultimate",
    price: "$10",
    pkr: "approx. 2,800 PKR",
    limit: 100000,
    description: "For maximum scale enterprise lists",
    features: ["100,000 Email sends", "SMTP Connection Support", "Advanced Analytics", "All Templates Unlocked", "24/7 Dedicated Support"],
  },
];

const SubscriptionPage = () => {
  const { user, logout, refreshUserProfile } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [senderEmail, setSenderEmail] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [slipBase64, setSlipBase64] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeRequest, setActiveRequest] = useState<any>(null);

  // Fetch pending request from localStorage
  const fetchActiveRequest = () => {
    if (!user?.email) return;
    const all = getRequests();
    const pending = all.find(
      (r) => r.user_email.toLowerCase() === user.email.toLowerCase() && r.status === "pending"
    );
    setActiveRequest(pending ?? null);
  };

  useEffect(() => {
    fetchActiveRequest();
  }, [user]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      toast.error("File size too large. Max 2MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setSlipBase64(reader.result as string);
      toast.success("Receipt image loaded successfully.");
    };
    reader.readAsDataURL(file);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) return;
    if (!transactionId.trim()) {
      toast.error("Please enter your Transaction ID.");
      return;
    }
    if (!slipBase64) {
      toast.error("Please upload the payment transaction slip image.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Save request to localStorage
      addRequest({
        user_email: user?.email ?? "",
        plan_name: selectedPlan.name,
        plan_price: selectedPlan.price,
        email_limit: selectedPlan.limit,
        sender_email: senderEmail.trim() || user?.email || "",
        transaction_id: transactionId.trim(),
        payment_slip_url: slipBase64,
        status: "pending",
      });

      // Update user status to pending_subscription in localStorage
      const record = getUserByEmail(user?.email ?? "");
      if (record) {
        upsertUser({ ...record, status: "pending_subscription" });
      }

      toast.success("Payment details submitted! Team will review within 12 hours.");
      await refreshUserProfile();
      fetchActiveRequest();
      setSelectedPlan(null);
      setTransactionId("");
      setSlipBase64(null);
      setSenderEmail("");
    } catch (err: any) {
      toast.error("Submission failed: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRefreshStatus = async () => {
    setIsRefreshing(true);
    await refreshUserProfile();
    fetchActiveRequest();
    setIsRefreshing(false);
    toast.success("Status refreshed.");
  };

  if (user?.status === "pending_subscription" || activeRequest) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
        <Card className="w-full max-w-xl border-none shadow-2xl rounded-[2.5rem] bg-white overflow-hidden text-center p-10 space-y-6">
          <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <Loader2 className="w-10 h-10 animate-spin" />
          </div>

          <div className="space-y-2">
            <CardTitle className="text-3xl font-black text-slate-800">Verification In Progress</CardTitle>
            <CardDescription className="text-base text-slate-500 font-medium">
              We are checking your transaction slip. Access will be granted shortly.
            </CardDescription>
          </div>

          <div className="bg-amber-50/60 border border-amber-100 rounded-3xl p-6 text-left space-y-4">
            <h4 className="font-bold text-amber-800 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" /> Submission Details
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
              <div>
                <p className="font-bold text-[10px] uppercase text-slate-400">Account Username</p>
                <p className="font-semibold text-slate-700">{user?.name}</p>
              </div>
              <div>
                <p className="font-bold text-[10px] uppercase text-slate-400">Target Plan</p>
                <p className="font-semibold text-slate-700">{activeRequest?.plan_name || "Custom Plan"}</p>
              </div>
              <div>
                <p className="font-bold text-[10px] uppercase text-slate-400">Transaction ID</p>
                <p className="font-mono font-semibold text-slate-700">{activeRequest?.transaction_id || "Pending"}</p>
              </div>
              <div>
                <p className="font-bold text-[10px] uppercase text-slate-400">Review Timeline</p>
                <p className="font-semibold text-emerald-600">Within 12 Hours</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-sm mx-auto">
            Once approved by the admin, your workspace access will be automatically unlocked.
          </p>

          <div className="flex gap-4 pt-4">
            <Button
              onClick={handleRefreshStatus}
              disabled={isRefreshing}
              className="flex-1 h-14 bg-slate-900 text-white hover:bg-black rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              {isRefreshing ? <Loader2 className="w-5 h-5 animate-spin" /> : <RefreshCw className="w-5 h-5" />}
              Refresh Status
            </Button>
            <Button
              variant="outline"
              onClick={logout}
              className="h-14 px-6 border-2 border-slate-100 hover:bg-slate-50 rounded-2xl font-bold text-slate-600 gap-2"
            >
              <LogOut className="w-5 h-5" /> Sign Out
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans py-20 px-6 relative overflow-hidden">
      {/* Decors */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Mail className="h-4 w-4" />
            </div>
            IkoSender
          </div>
          <Button variant="ghost" onClick={logout} className="font-bold text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl h-11 px-4 gap-2">
            <LogOut className="w-4 h-4" /> Sign Out
          </Button>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest shadow-sm">
            <Zap className="w-3.5 h-3.5" /> Premium Subscription Required
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Unlock Your Mailing <br /><span className="text-blue-600">Workspace Dashboard</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium">
            Choose a plan below, send payment via Easypaisa, then upload your receipt to get access.
          </p>
        </div>

        {/* Easypaisa Instructions */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-2xl md:text-3xl font-black">Easypaisa Mobile Payment</h3>
              <p className="text-blue-100 font-medium text-sm leading-relaxed">
                Send the plan fee to the Easypaisa wallet below. Then select your plan, enter Transaction ID, and upload the receipt screenshot.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-5 py-3 rounded-2xl">
                  <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">Account Name</p>
                  <p className="text-lg font-black mt-0.5">Rustam khan</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-5 py-3 rounded-2xl">
                  <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">Easypaisa Number</p>
                  <p className="text-lg font-black mt-0.5">+923433452279</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 flex justify-center">
              <div className="bg-white/10 border border-white/20 p-6 rounded-3xl backdrop-blur-md max-w-xs text-center space-y-4">
                <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-lg">Safe & Swift Verification</h4>
                <p className="text-xs text-blue-100 font-medium leading-relaxed">
                  Admin verifies all receipts. Access granted within 12 hours.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-500/30 rounded-full blur-[100px] pointer-events-none" />
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUBSCRIPTION_PLANS.map((plan, i) => (
            <Card
              key={i}
              className={`border-none rounded-[2.2rem] shadow-xl shadow-slate-100 bg-white flex flex-col p-8 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-50 relative ${
                selectedPlan?.name === plan.name ? "ring-4 ring-blue-600 scale-[1.02]" : ""
              }`}
            >
              {plan.price === "$4" && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold text-[9px] uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg">
                  Popular
                </span>
              )}
              <h3 className="text-2xl font-black text-slate-800">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">USD</span>
              </div>
              <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-tight">{plan.pkr}</p>
              <p className="text-xs text-slate-500 mt-3 font-medium min-h-[32px] leading-relaxed">{plan.description}</p>

              <div className="h-px bg-slate-50 my-6" />

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => {
                  setSelectedPlan(plan);
                  setTimeout(() => {
                    document.getElementById("slip-form")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className={`w-full h-12 rounded-xl font-bold transition-all ${
                  selectedPlan?.name === plan.name
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-slate-900 hover:bg-black text-white"
                }`}
              >
                Select {plan.name}
              </Button>
            </Card>
          ))}
        </div>

        {/* Payment Slip Submission Form */}
        {selectedPlan && (
          <div id="slip-form" className="max-w-2xl mx-auto animate-fade-in pt-6">
            <Card className="border-none shadow-2xl rounded-[2.5rem] bg-white overflow-hidden">
              <CardHeader className="bg-slate-900 text-white p-8">
                <CardTitle className="text-2xl font-black flex items-center gap-3">
                  <Upload className="w-6 h-6 text-blue-400" /> Submit Transfer Receipt
                </CardTitle>
                <CardDescription className="text-slate-400 font-medium pt-1">
                  You selected <strong className="text-white">{selectedPlan.name}</strong> ({selectedPlan.price} / {selectedPlan.limit.toLocaleString()} emails).
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleFormSubmit}>
                <CardContent className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Account Email</Label>
                      <Input
                        value={user?.email}
                        disabled
                        className="h-12 rounded-xl bg-slate-50 border-none font-semibold text-slate-500 px-4"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">SMTP Sender Email</Label>
                      <Input
                        placeholder="E.g. sales@yourbusiness.com"
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        className="h-12 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-600 transition-all px-4"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Easypaisa Transaction ID</Label>
                    <Input
                      placeholder="11-digit Transaction ID"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      required
                      className="h-12 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-600 transition-all font-mono font-bold px-4"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Transaction Receipt / Screenshot</Label>
                    <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 hover:bg-slate-50 transition-all relative flex flex-col items-center justify-center text-center cursor-pointer min-h-[140px]">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      {slipBase64 ? (
                        <div className="space-y-2">
                          <img src={slipBase64} alt="Slip Preview" className="max-h-24 mx-auto rounded-lg shadow-md border" />
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Click to change image</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Upload className="w-8 h-8 text-slate-300 mx-auto" />
                          <p className="text-xs font-bold text-slate-500">Click to upload payment receipt</p>
                          <p className="text-[10px] text-slate-400 uppercase tracking-widest">JPG, PNG, WEBP (MAX 2MB)</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <Button type="button" variant="ghost" onClick={() => setSelectedPlan(null)} className="font-bold text-slate-500 rounded-xl">
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 shadow-lg shadow-blue-100 gap-2 flex items-center"
                  >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><CheckCircle2 className="w-4 h-4" /> Submit Receipt</>}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPage;
