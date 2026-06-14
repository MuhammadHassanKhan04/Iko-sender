import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    BarChart3, TrendingUp, Users, Mail,
    ArrowUpRight, ArrowDownRight, Activity,
    CheckCircle2, AlertTriangle, Clock
} from "lucide-react";

interface EmailAction {
    id: string;
    subject: string;
    status: string;
    recipients: string[];
    scheduled_at: string;
}

const Analytics = () => {
    const [emails, setEmails] = useState<EmailAction[]>([]);
    const [contactCount, setContactCount] = useState(0);

    useEffect(() => {
        const storedEmails = localStorage.getItem("sent_emails");
        if (storedEmails) {
            setEmails(JSON.parse(storedEmails));
        }


    }, []);

    const totalDispatched = emails.length;
    const successfulSends = emails.filter(e => e.status === 'sent').length;
    const deliveryRate = totalDispatched > 0 ? (successfulSends / totalDispatched) * 100 : 99.9;
    const errorRate = totalDispatched > 0 ? ((totalDispatched - successfulSends) / totalDispatched) * 100 : 0.1;

    const stats = [
        {
            label: "Total Dispatched",
            value: totalDispatched.toLocaleString(),
            change: "+12.5%",
            trend: "up",
            icon: Mail,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            label: "Delivery Rate",
            value: `${deliveryRate.toFixed(1)}%`,
            change: "+0.2%",
            trend: "up",
            icon: Activity,
            color: "text-green-600",
            bg: "bg-green-50"
        },

        {
            label: "Error Rate",
            value: `${errorRate.toFixed(1)}%`,
            change: "-1.1%",
            trend: "down",
            icon: AlertTriangle,
            color: "text-orange-600",
            bg: "bg-orange-50"
        }
    ];

    return (
        <div className="space-y-10 pb-20 animate-fade-in">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Intelligence Hub</h1>
                <p className="text-lg text-gray-500 font-medium mt-2">
                    Deep-dive into your communication performance and operational history.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <Card key={i} className="border-none shadow-xl shadow-gray-200/50 rounded-[2rem] overflow-hidden bg-white">
                        <CardContent className="p-8">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                                    }`}>
                                    {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                    {stat.change}
                                </div>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-gray-900 leading-none mb-2">{stat.value}</p>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Performance Chart Simulation */}
                <Card className="lg:col-span-8 border-none shadow-xl shadow-gray-200/50 rounded-[2.5rem] bg-white overflow-hidden">
                    <CardHeader className="p-8 pb-0">
                        <CardTitle className="text-xl font-bold flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-blue-600" /> Dispatch Performance
                        </CardTitle>
                        <CardDescription className="font-medium">Daily volume and success trends for the past 30 days.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-10">
                        <div className="h-64 flex items-end justify-between gap-2">
                            {[40, 65, 45, 90, 55, 75, 50, 85, 60, 95, 40, 70].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                                    <div
                                        className="w-full bg-blue-50 rounded-t-xl group-hover:bg-blue-600 transition-all duration-500 relative cursor-pointer"
                                        style={{ height: `${h}%` }}
                                    >
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                            {Math.round(h * 1.5)}
                                        </div>
                                    </div>
                                    <div className="text-[8px] font-bold text-gray-400 uppercase">M{i + 1}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Engagement Summary */}
                <Card className="lg:col-span-4 border-none shadow-xl shadow-gray-200/50 rounded-[2.5rem] bg-white overflow-hidden">
                    <CardHeader className="p-8 pb-4">
                        <CardTitle className="text-xl font-bold">Delivery Status</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 pt-0 space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between group">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-sm" />
                                    <span className="text-sm font-bold text-gray-700">Delivered</span>
                                </div>
                                <span className="text-sm font-bold">{successfulSends}</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-green-500 h-full rounded-full transition-all duration-1000"
                                    style={{ width: `${deliveryRate}%` }}
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between group">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-500 shadow-sm" />
                                    <span className="text-sm font-bold text-gray-700">Failed / Error</span>
                                </div>
                                <span className="text-sm font-bold">{totalDispatched - successfulSends}</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-orange-500 h-full rounded-full transition-all duration-1000"
                                    style={{ width: `${errorRate}%` }}
                                />
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-100">
                            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                                <Clock className="w-8 h-8 text-blue-600" />
                                <div>
                                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Avg. Velocity</p>
                                    <p className="text-xl font-bold text-gray-900">1.2s / Mail</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity Mini-Table */}
            <Card className="border-none shadow-xl shadow-gray-200/50 rounded-[2.5rem] bg-white overflow-hidden">
                <CardHeader className="p-8 border-b border-gray-50">
                    <CardTitle className="text-xl font-bold">Operation History</CardTitle>
                    <CardDescription className="font-medium">Log of most recent dispatches and their current status.</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="divide-y divide-gray-50">
                        {emails.length === 0 ? (
                            <div className="p-20 text-center text-gray-400 font-bold">No operation logs found.</div>
                        ) : (
                            emails.slice(0, 5).map((email) => (
                                <div key={email.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${email.status === 'sent' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                                            }`}>
                                            {email.status === 'sent' ? <CheckCircle2 className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">{email.subject}</p>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">to {email.recipients.length} recipients</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-gray-900">{new Date(email.scheduled_at).toLocaleDateString()}</p>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{email.status}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Analytics;
