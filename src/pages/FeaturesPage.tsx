import React from "react";
import { Link } from "react-router-dom";
import {
    ArrowLeft, Bot, Shield, Zap, Cpu, Globe, MessageSquare,
    CheckCircle2, Server, Lock, MousePointer2, Smartphone, BarChart3, HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";

const FeaturesPage = () => {
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

            {/* 1. HERO SECTION */}
            <section className="container mx-auto px-6 py-24 text-center">
                <div className="max-w-4xl mx-auto animate-slide-in-up">
                    <Badge text="Capabilities Overview" />
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
                        The most complete <br /> <span className="text-blue-600">Email Engine</span> ever built.
                    </h1>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        We've engineered every detail to provide a seamless, secure, and AI-accelerated
                        mailing experience for high-growth enterprises.
                    </p>
                </div>
            </section>

            {/* 2. CORE FEATURES GRID */}
            <section className="bg-gray-50/50 py-32 border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-left mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Core Infrastructure</h2>
                        <p className="text-gray-500 font-medium mt-2">Built on speed, scale, and simplicity.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Bot className="w-6 h-6 text-blue-600" />}
                            title="AI Copywriting"
                            desc="GPT-4 powered subject line and body generation that matches your brand voice."
                        />
                        <FeatureCard
                            icon={<BarChart3 className="w-6 h-6 text-blue-600" />}
                            title="Visual Analytics"
                            desc="Real-time heatmaps and delivery logs to optimize your reach."
                        />
                        <FeatureCard
                            icon={<Shield className="w-6 h-6 text-blue-600" />}
                            title="SMTP Relays"
                            desc="Connect multiple providers for 100% uptime and better deliverability."
                        />
                        <FeatureCard
                            icon={<MousePointer2 className="w-6 h-6 text-blue-600" />}
                            title="Link Tracking"
                            desc="Detailed click metrics with geographical and device breakdown."
                        />
                        <FeatureCard
                            icon={< स्मार्टफोन className="w-6 h-6 text-blue-600" />}
                            title="Mobile Sync"
                            desc="Manage campaigns on the go with our responsive mobile-first dashboard."
                        />
                        <FeatureCard
                            icon={<Globe className="w-6 h-6 text-blue-600" />}
                            title="Multi-Region"
                            desc="Fast delivery globally with our edge-node SMTP distribution."
                        />
                    </div>
                </div>
            </section>

            {/* 3. SECURITY DEEP DIVE */}
            <section className="container mx-auto px-6 py-32">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center shadow-xl shadow-blue-200">
                            <Lock className="w-8 h-8" />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">Zero-Trust <br /> Communication Security.</h2>
                        <p className="text-lg text-gray-500 font-medium leading-relaxed">
                            Your campaigns and contacts are protected by enterprise-grade encryption.
                            We don't just send emails; we secure your entire reputation.
                        </p>
                        <ul className="space-y-4">
                            {["AES-256 Data Encryption", "SOC2 Type II Compliant", "GDPR & HIPAA Ready", "Multi-Factor Guard"].map(t => (
                                <li key={t} className="flex items-center gap-3 font-bold text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" /> {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform">
                            <Shield className="w-64 h-64" />
                        </div>
                        <h4 className="text-2xl font-bold mb-6">Security Header</h4>
                        <div className="space-y-6">
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">Payload Status</p>
                                <p className="font-mono text-sm">ENCRYPTED_SHA256_HASH_VERIFIED</p>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">Sender IP</p>
                                <p className="font-mono text-sm leading-relaxed truncate">IKOSENDER-SSL-GATEWAY: 192.168.1.104</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* 5. FAQ SECTION */}
            <section className="container mx-auto px-6 py-32 max-w-3xl">
                <div className="text-center mb-16">
                    <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-1" className="border border-gray-100 rounded-2xl px-6 bg-white">
                        <AccordionTrigger className="font-bold py-6 hover:no-underline">How reliable is the email delivery?</AccordionTrigger>
                        <AccordionContent className="text-gray-500 font-medium leading-relaxed pb-6">
                            IkoSender uses a multi-relay system that intelligently routes emails through the fastest and most reputable paths, achieving a 99.8% inbox placement rate.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border border-gray-100 rounded-2xl px-6 bg-white">
                        <AccordionTrigger className="font-bold py-6 hover:no-underline">Can I connect my own SMTP server?</AccordionTrigger>
                        <AccordionContent className="text-gray-500 font-medium leading-relaxed pb-6">
                            Yes, IkoSender allows you to connect any SMTP-compatible server, including Mailgun, SendGrid, Amazon SES, and your own private relays.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border border-gray-100 rounded-2xl px-6 bg-white">
                        <AccordionTrigger className="font-bold py-6 hover:no-underline">Is there a limit on contact storage?</AccordionTrigger>
                        <AccordionContent className="text-gray-500 font-medium leading-relaxed pb-6">
                            We offer unlimited contact storage on all plans. We believe you shouldn't be penalized for growing your audience.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-6 py-20">
                <div className="bg-blue-600 p-16 rounded-[3rem] text-center text-white shadow-2xl shadow-blue-200">
                    <h2 className="text-4xl font-bold mb-8">Ready to modernize your outreach?</h2>
                    <Link to="/login">
                        <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-2xl px-12 h-16 font-bold text-lg">Start Sending Now</Button>
                    </Link>
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

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group">
        <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
            <div className="group-hover:text-white transition-colors">
                {icon}
            </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-500 font-medium leading-relaxed">{desc}</p>
    </div>
);

const PricingCard = ({ title, price, desc, features, highlight }: { title: string, price: string, desc: string, features: string[], highlight?: boolean }) => (
    <div className={`p-10 rounded-[3rem] border transition-all text-left ${highlight ? 'bg-white text-gray-900 border-white shadow-2xl shadow-blue-500/20 scale-105' : 'bg-gray-800/50 border-gray-700 text-white'
        }`}>
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <div className="flex items-baseline gap-1 mb-6">
            <span className="text-5xl font-bold">{price}</span>
            {price !== 'Free' && <span className="text-lg opacity-50">/month</span>}
        </div>
        <p className={`font-medium mb-10 ${highlight ? 'text-gray-500' : 'text-gray-400'}`}>{desc}</p>
        <ul className="space-y-4 mb-10">
            {features.map(f => (
                <li key={f} className="flex items-center gap-3 font-bold text-sm">
                    <CheckCircle2 className={`w-5 h-5 ${highlight ? 'text-blue-600' : 'text-gray-400'}`} /> {f}
                </li>
            ))}
        </ul>
        <Button className={`w-full h-14 rounded-2xl font-bold text-lg ${highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white/10 text-white hover:bg-white/20'
            }`}>Select {title}</Button>
    </div>
);

const स्मार्टफोन = ({ className }: { className?: string }) => (
    <Smartphone className={className} />
);

export default FeaturesPage;
