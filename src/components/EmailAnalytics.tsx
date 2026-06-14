import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Send, CheckCircle2, XCircle, Clock, TrendingUp, Calendar } from "lucide-react";

interface EmailRecord {
  id: string;
  subject: string;
  recipients: string[];
  status: string;
  created_at: string;
  sent_at: string | null;
}

const EmailAnalytics = () => {
  const [stats, setStats] = useState({
    totalSent: 0,
    successful: 0,
    failed: 0,
    pending: 0,
    thisWeek: 0,
    thisMonth: 0,
    avgRecipientsPerEmail: 0,
    totalRecipients: 0,
  });

  useEffect(() => {
    const stored = localStorage.getItem("sent_emails");
    if (stored) {
      const emails: EmailRecord[] = JSON.parse(stored);
      const now = new Date();
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

      const successful = emails.filter(e => e.status === "sent").length;
      const failed = emails.filter(e => e.status === "failed").length;
      const pending = emails.filter(e => e.status === "pending").length;
      const thisWeek = emails.filter(e => new Date(e.created_at) >= weekAgo).length;
      const thisMonth = emails.filter(e => new Date(e.created_at) >= monthAgo).length;
      const totalRecipients = emails.reduce((sum, e) => sum + (e.recipients?.length || 0), 0);

      setStats({
        totalSent: emails.length,
        successful,
        failed,
        pending,
        thisWeek,
        thisMonth,
        avgRecipientsPerEmail: emails.length > 0 ? Math.round(totalRecipients / emails.length) : 0,
        totalRecipients,
      });
    }
  }, []);

  const statCards = [
    {
      title: "Total Campaigns",
      value: stats.totalSent,
      icon: <Send className="h-5 w-5" />,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Total Recipients",
      value: stats.totalRecipients.toLocaleString(),
      icon: <TrendingUp className="h-5 w-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Successful",
      value: stats.successful,
      icon: <CheckCircle2 className="h-5 w-5" />,
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      title: "Failed",
      value: stats.failed,
      icon: <XCircle className="h-5 w-5" />,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      title: "This Week",
      value: stats.thisWeek,
      icon: <Clock className="h-5 w-5" />,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      title: "This Month",
      value: stats.thisMonth,
      icon: <Calendar className="h-5 w-5" />,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  const successRate = stats.totalSent > 0 
    ? Math.round((stats.successful / stats.totalSent) * 100) 
    : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Quick Analytics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center ${stat.color} mb-3`}>
                {stat.icon}
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </div>
          ))}
        </div>
        
        <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Success Rate</span>
            <span className="text-2xl font-bold text-primary">{successRate}%</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
              style={{ width: `${successRate}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Avg. {stats.avgRecipientsPerEmail} recipients per campaign
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailAnalytics;
