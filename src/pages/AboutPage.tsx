import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Target, History, Rocket, Cpu, ShieldCheck, Globe2, Heart, Users2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans pt-20 animate-fade-in relative">
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold flex items-center gap-2 text-gray-900">
                        <ArrowLeft className="w-5 h-5" /> Home
                    </Link>
                    <Link to="/login">
                        <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl font-bold">Try IkoSender</Button>
                    </Link>
                </div>
            </nav>

            {/* 1. MISSION HERO */}
            <section className="container mx-auto px-6 py-24">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    <div className="w-full md:w-1/2 space-y-8 animate-slide-in-up">
                        <Badge text="Our Mission" />
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1]">
                            Humanized AI for <span className="text-blue-600">Global Outreach.</span>
                        </h1>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed">
                            We believe that technology should amplify human potential, not replace it.
                            IkoSender was founded to bridge the gap between complex automation
                            and meaningful, high-impact communication.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative p-12 bg-gray-50 rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-200">
                            <Target className="w-20 h-20 text-blue-600 mb-8" />
                            <p className="text-2xl font-bold text-gray-800 leading-tight">
                                "Our goal is to gift every professional 10 hours back each week by automating
                                the world's most manual communication workflows."
                            </p>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                                <div>
                                    <p className="font-bold text-gray-900">Ikotek Lead</p>
                                    <p className="text-sm text-gray-400 font-bold uppercase">Visionary Officer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. JOURNEY TIMELINE */}
            <section className="bg-gray-900 py-32 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
                        <p className="text-gray-400 font-medium">From a small prototype to an enterprise powerhouse.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <TimelineItem
                            year="2022"
                            title="The Genesis"
                            desc="Founded with a mission to simplify SMTP configurations for technical teams."
                            icon={<Rocket className="w-6 h-6" />}
                        />
                        <TimelineItem
                            year="2023"
                            title="AI Integration"
                            desc="Successfully integrated GPT models to automate subject line generation."
                            icon={<Sparkles className="w-6 h-6" />}
                        />
                        <TimelineItem
                            year="2024"
                            title="Enterprise Shift"
                            desc="Launched the premium dashboard and unified analytics engine."
                            icon={<Globe2 className="w-6 h-6" />}
                        />
                    </div>
                </div>
            </section>

            {/* 3. TECHNOLOGY STACK */}
            <section className="container mx-auto px-6 py-32 text-center">
                <Badge text="The Tech Stack" />
                <h2 className="text-4xl font-bold text-gray-900 mb-16">Intelligence meeting Infrastructure.</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { icon: <Cpu />, label: "Next-Gen AI", val: "Claude 3.5 & GPT-4" },
                        { icon: <ShieldCheck />, label: "Security", val: "AES-256 GCM" },
                        { icon: <Globe2 />, label: "Cloud", val: "Distributed Edge" },
                        { icon: <History />, label: "Storage", val: "Persistent Sync" },
                    ].map((t, i) => (
                        <div key={i} className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                                {t.icon}
                            </div>
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">{t.label}</h4>
                            <p className="font-bold text-gray-900">{t.val}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. GLOBAL IMPACT */}
            <section className="bg-blue-600 py-32 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 p-20 opacity-10">
                    <Globe2 className="w-96 h-96" />
                </div>
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold leading-tight">Infrastructure that <br /> never sleeps.</h2>
                        <p className="text-lg opacity-80 font-medium leading-relaxed">
                            With localized nodes in 24 countries, we ensure your dispatches
                            originate from the most optimal proximity to your recipients.
                        </p>
                        <div className="flex gap-10">
                            <div>
                                <p className="text-4xl font-bold mb-1">99.9%</p>
                                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Uptime Score</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold mb-1">0.4s</p>
                                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Latency Max</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map(n => (
                            <div key={n} className="h-32 bg-white/10 rounded-3xl border border-white/10 backdrop-blur-sm animate-pulse" />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CORE VALUES */}
            <section className="container mx-auto px-6 py-32">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-gray-900">What Drives Us</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    <ValueCard
                        icon={<Heart className="w-6 h-6 text-red-500" />}
                        title="Empathy Driven"
                        desc="We build with the end-user's inbox experience in mind, ensuring no spam, just value."
                    />
                    <ValueCard
                        icon={<Users2 className="w-6 h-6 text-blue-500" />}
                        title="Radical Inclusion"
                        desc="Accessible power for everyone from independent writers to Fortune 500 CEOs."
                    />
                    <ValueCard
                        icon={<ShieldCheck className="w-6 h-6 text-green-500" />}
                        title="Integrity First"
                        desc="Your data is your data. We never sell, share, or monetize user communications."
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
};

const Badge = ({ text }: { text: string }) => (
    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
        {text}
    </span>
);

const TimelineItem = ({ year, title, desc, icon }: { year: string, title: string, desc: string, icon: React.ReactNode }) => (
    <div className="relative p-10 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
            {icon}
        </div>
        <p className="text-blue-400 font-bold mb-2">{year}</p>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
);

const ValueCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all">
        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-500 font-medium leading-relaxed">{desc}</p>
    </div>
);

export default AboutPage;
