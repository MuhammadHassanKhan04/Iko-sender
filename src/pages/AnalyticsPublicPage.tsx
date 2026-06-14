import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart3, TrendingUp, MousePointer2, Mail, Globe, Smartphone, PieChart, Activity, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const AnalyticsPublicPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans pt-20 animate-fade-in relative overflow-hidden">
            {/* Background Decorative Blur */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold flex items-center gap-2 text-gray-900">
                        <ArrowLeft className="w-5 h-5" /> Home
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link to="/login">
                            <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6 h-11 font-bold shadow-lg shadow-blue-100">Try IkoSender</Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="container mx-auto px-6 py-24 text-center">
                <div className="max-w-4xl mx-auto animate-slide-in-up">
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-200">
                        <BarChart3 className="w-10 h-10" />
                    </div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
                        Real-Time Analytics
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
                        Data-driven insights <br /> <span className="text-blue-600">in real-time.</span>
                    </h1>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        Track every open, click, and conversion with precision. Make informed decisions with comprehensive analytics that update in real-time.
                    </p>
                </div>
            </section>

            {/* KEY METRICS */}
            <section className="container mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Track What Matters</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {[
                        { icon: <Mail className="w-6 h-6" />, metric: "Delivery Rate", value: "99.8%" },
                        { icon: <MousePointer2 className="w-6 h-6" />, metric: "Click Rate", value: "24.5%" },
                        { icon: <TrendingUp className="w-6 h-6" />, metric: "Open Rate", value: "42.3%" },
                        { icon: <Target className="w-6 h-6" />, metric: "Conversion", value: "8.7%" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
                            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                            <p className="text-sm text-gray-500 font-medium">{stat.metric}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ANALYTICS FEATURES */}
            <section className="bg-gray-50/50 py-32 border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">Powerful Analytics Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <AnalyticsCard
                            icon={<Activity className="w-6 h-6" />}
                            title="Real-Time Tracking"
                            description="Monitor your campaigns as they happen. See opens, clicks, and bounces the moment they occur."
                        />
                        <AnalyticsCard
                            icon={<Globe className="w-6 h-6" />}
                            title="Geographic Insights"
                            description="Understand where your audience is located with detailed geographic breakdowns and heatmaps."
                        />
                        <AnalyticsCard
                            icon={<Smartphone className="w-6 h-6" />}
                            title="Device Analytics"
                            description="Track which devices your subscribers use to open emails - desktop, mobile, or tablet."
                        />
                        <AnalyticsCard
                            icon={<PieChart className="w-6 h-6" />}
                            title="Engagement Metrics"
                            description="Deep dive into subscriber engagement with detailed metrics on interaction patterns."
                        />
                        <AnalyticsCard
                            icon={<TrendingUp className="w-6 h-6" />}
                            title="Performance Trends"
                            description="Identify trends over time and optimize your campaigns based on historical data."
                        />
                        <AnalyticsCard
                            icon={<Target className="w-6 h-6" />}
                            title="A/B Testing"
                            description="Test subject lines, content, and send times to maximize your campaign performance."
                        />
                    </div>
                </div>
            </section>

            {/* DASHBOARD PREVIEW */}
            <section className="container mx-auto px-6 py-32">
                <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                            Beautiful dashboards <br />that tell a story
                        </h2>
                        <p className="text-lg text-gray-500 font-medium leading-relaxed">
                            Our intuitive dashboards transform complex data into actionable insights.
                            No data science degree required.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Interactive charts and graphs",
                                "Customizable date ranges",
                                "Export reports in PDF or CSV",
                                "Scheduled email reports"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-bold text-gray-700">
                                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/login">
                            <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl px-8 h-14 font-bold text-lg">
                                See Analytics in Action
                            </Button>
                        </Link>
                    </div>
                    <div className="relative group">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-100 border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop"
                                alt="Analytics Dashboard"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="absolute -inset-10 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors -z-10"></div>
                    </div>
                </div>
            </section>

            {/* INTEGRATIONS */}
            <section className="bg-gray-50/50 py-32 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Integrate with Your Stack</h2>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12">
                        Connect IkoSender analytics with your favorite tools for a complete view of your marketing performance.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {["Google Analytics", "Salesforce", "HubSpot", "Zapier", "Slack", "Webhooks", "REST API", "Custom"].map((tool, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 font-bold text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-all">
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-6 py-20">
                <div className="bg-blue-600 p-16 rounded-[3rem] text-center text-white shadow-2xl shadow-blue-200">
                    <h2 className="text-4xl font-bold mb-8">Start tracking smarter today</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Get real-time insights into your email campaigns and make data-driven decisions.
                    </p>
                    <Link to="/login">
                        <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-2xl px-12 h-16 font-bold text-lg">
                            Try Analytics Free
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

const AnalyticsCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group">
        <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
            <div className="text-blue-600 group-hover:text-white transition-colors">
                {icon}
            </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-500 font-medium leading-relaxed">{description}</p>
    </div>
);

export default AnalyticsPublicPage;
