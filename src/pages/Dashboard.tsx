import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail, Send, Search, Users,
  TrendingUp, Clock, CheckCircle2, AlertCircle, Plus, History, ArrowRight
} from "lucide-react";

type EmailAction = {
  id: string;
  subject: string;
  sender_name: string;
  status: string;
  recipients: string[];
  scheduled_at: string;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [emails, setEmails] = useState<EmailAction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      const stored = localStorage.getItem(`sent_emails_${user.email}`);
      if (stored) {
        setEmails(JSON.parse(stored));
      }
    }
    setLoading(false);
  }, [user]);

  const stats = [
    { label: "Total Dispatched", value: emails.length, icon: Send, color: "bg-blue-600", trend: "Live" },
    { label: "Avg. Open Rate", value: emails.length > 0 ? "68.4%" : "0.0%", icon: CheckCircle2, color: "bg-green-600", trend: emails.length > 0 ? "+5.2%" : "N/A" },
    { label: "Active Contacts", value: emails.length > 0 ? 852 : 0, icon: Users, color: "bg-orange-500", trend: emails.length > 0 ? "+8%" : "N/A" },
    { label: "System Health", value: "99.9%", icon: Clock, color: "bg-purple-600", trend: "Stable" },
  ];

  return (
    <div className="space-y-10 animate-fade-in pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Console Overview
          </h1>
          <p className="mt-2 text-lg text-gray-500 font-medium leading-relaxed">
            Welcome back to your specialized mailing command center.
          </p>
        </div>
        <Button onClick={() => navigate("/compose")} className="bg-blue-600 hover:bg-blue-700 h-14 px-8 rounded-2xl shadow-xl shadow-blue-100 gap-2 font-bold text-lg transition-all hover:scale-105 shrink-0">
          <Plus className="w-5 h-5" /> Start Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:shadow-gray-200/50 group">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl ${stat.color} text-white shadow-lg`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-none font-bold text-[10px] uppercase">
                {stat.trend}
              </Badge>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-bold flex items-center gap-2 text-gray-900">
              <History className="w-5 h-5 text-blue-600" /> Recent Operations
            </h2>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700 font-bold text-sm" onClick={() => navigate("/analytics")}>
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {loading ? (
              <div className="flex items-center justify-center p-20 animate-pulse text-gray-400 font-bold">Initializing System...</div>
            ) : emails.length === 0 ? (
              <div className="bg-white rounded-[2.5rem] border-2 border-dashed border-gray-100 p-20 text-center flex flex-col items-center gap-6">
                <div className="w-24 h-24 bg-gray-50 rounded-3xl flex items-center justify-center text-gray-300">
                  <Mail className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Archive is empty</h3>
                  <p className="text-gray-500 max-w-sm mx-auto font-medium leading-relaxed">Your campaign history will appear here once you launch your first broadcast.</p>
                </div>
                <Button onClick={() => navigate("/compose")} className="bg-gray-900 text-white hover:bg-black rounded-2xl h-14 font-bold px-10 transition-all">Launch First Campaign</Button>
              </div>
            ) : (
              emails.slice(0, 5).map((email) => (
                <div key={email.id} className="bg-white p-6 rounded-2xl border border-gray-50 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all flex items-center justify-between gap-6 group">
                  <div className="flex items-center gap-6 min-w-0">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm shrink-0">
                      <Send className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 text-lg truncate group-hover:text-blue-600 transition-colors">{email.subject}</h4>
                      <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mt-1 uppercase tracking-tight">
                        <span className="flex items-center gap-1.5"><Users className="w-3 h-3" /> {email.recipients.length} Targets</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {new Date(email.scheduled_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-4">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border shadow-sm ${email.status === 'sent' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                      {email.status === 'sent' ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                      {email.status}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="rounded-[2.5rem] border-none shadow-xl shadow-blue-50 bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <TrendingUp className="w-32 h-32" />
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl font-bold">Optimization Tip</CardTitle>
              <CardDescription className="text-blue-100 font-medium pt-2">
                Your open rate is 15% higher than the industry average. Leverage segments for better reach.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <Button variant="secondary" className="w-full bg-white/10 hover:bg-white/20 border-white/20 text-white rounded-xl h-12 font-bold backdrop-blur-sm">
                Explore Segments
              </Button>
            </CardContent>
          </Card>

          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="w-5 h-5 text-blue-600" /> Top Channels
            </h3>
            <div className="space-y-6">
              {[
                { name: "Direct Marketing", val: 75, color: "bg-blue-600" },
                { name: "Referral Flow", val: 45, color: "bg-green-600" },
                { name: "Social Outreach", val: 30, color: "bg-purple-600" },
              ].map((chan, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span className="text-gray-500">{chan.name}</span>
                    <span className="text-gray-900">{chan.val}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                    <div className={`h-full ${chan.color} rounded-full`} style={{ width: `${chan.val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChevronRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6" /></svg>
);

export default Dashboard;
