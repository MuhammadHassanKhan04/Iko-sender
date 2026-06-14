import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, CheckCircle2, Server, Eye, FileCheck, Globe, Key, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const SecurityPage = () => {
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
                        <Shield className="w-10 h-10" />
                    </div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
                        Enterprise-Grade Security
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
                        Your data is <br /> <span className="text-blue-600">Fort Knox secure.</span>
                    </h1>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        We've built IkoSender with security at its core. Every email, every contact, every campaign is protected by military-grade encryption and industry-leading security protocols.
                    </p>
                </div>
            </section>

            {/* SECURITY CERTIFICATIONS */}
            <section className="container mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Certifications & Compliance</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {[
                        { name: "SOC 2 Type II", desc: "Certified" },
                        { name: "GDPR", desc: "Compliant" },
                        { name: "HIPAA", desc: "Ready" },
                        { name: "ISO 27001", desc: "Certified" }
                    ].map((cert, i) => (
                        <div key={i} className="text-center p-8 bg-gray-50 rounded-3xl border border-gray-100">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <FileCheck className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-1">{cert.name}</h4>
                            <p className="text-sm text-gray-500 font-medium">{cert.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ENCRYPTION DETAILS */}
            <section className="bg-gray-50/50 py-32 border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
                        <div className="space-y-8">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center shadow-xl shadow-blue-200">
                                <Lock className="w-8 h-8" />
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                                End-to-End <br />Encryption
                            </h2>
                            <p className="text-lg text-gray-500 font-medium leading-relaxed">
                                Your data is encrypted at rest and in transit using AES-256 encryption and TLS 1.3 protocols.
                                Even we can't access your sensitive information.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "AES-256 bit encryption at rest",
                                    "TLS 1.3 for data in transit",
                                    "Zero-knowledge architecture",
                                    "Encrypted database backups"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-bold text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gray-900 rounded-[3rem] p-12 text-white shadow-2xl">
                            <div className="space-y-6">
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">Encryption Standard</p>
                                    <p className="font-mono text-sm">AES-256-GCM</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">Transport Security</p>
                                    <p className="font-mono text-sm">TLS 1.3 / HTTPS Only</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">Key Management</p>
                                    <p className="font-mono text-sm">AWS KMS / HSM Backed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INFRASTRUCTURE SECURITY */}
            <section className="container mx-auto px-6 py-32">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">Infrastructure Security</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <SecurityCard
                        icon={<Server className="w-6 h-6" />}
                        title="Secure Infrastructure"
                        description="Hosted on AWS with multi-region redundancy and automatic failover. Our infrastructure is monitored 24/7 for threats."
                    />
                    <SecurityCard
                        icon={<Eye className="w-6 h-6" />}
                        title="Continuous Monitoring"
                        description="Real-time threat detection and automated response systems protect your data around the clock."
                    />
                    <SecurityCard
                        icon={<Key className="w-6 h-6" />}
                        title="Access Control"
                        description="Multi-factor authentication, role-based access control, and SSO integration keep unauthorized users out."
                    />
                    <SecurityCard
                        icon={<Globe className="w-6 h-6" />}
                        title="DDoS Protection"
                        description="Enterprise-grade DDoS mitigation ensures your campaigns stay online even under attack."
                    />
                    <SecurityCard
                        icon={<FileCheck className="w-6 h-6" />}
                        title="Regular Audits"
                        description="Third-party security audits and penetration testing ensure we stay ahead of threats."
                    />
                    <SecurityCard
                        icon={<AlertTriangle className="w-6 h-6" />}
                        title="Incident Response"
                        description="Dedicated security team with 24/7 incident response and transparent communication."
                    />
                </div>
            </section>

            {/* PRIVACY COMMITMENT */}
            <section className="bg-gray-50/50 py-32 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Privacy Commitment</h2>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12">
                        We believe your data is yours. We never sell, share, or use your data for anything other than providing you with the best email marketing service.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white p-8 rounded-3xl border border-gray-100">
                            <h4 className="font-bold text-lg text-gray-900 mb-3">No Data Selling</h4>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                We will never sell your contact lists or campaign data to third parties. Period.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-gray-100">
                            <h4 className="font-bold text-lg text-gray-900 mb-3">Data Ownership</h4>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                You own your data. Export it anytime, delete it anytime. No questions asked.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-gray-100">
                            <h4 className="font-bold text-lg text-gray-900 mb-3">Transparent Practices</h4>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                Clear privacy policies and transparent data handling practices you can trust.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-6 py-20">
                <div className="bg-blue-600 p-16 rounded-[3rem] text-center text-white shadow-2xl shadow-blue-200">
                    <h2 className="text-4xl font-bold mb-8">Security you can trust</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of businesses who trust IkoSender with their most sensitive data.
                    </p>
                    <Link to="/login">
                        <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-2xl px-12 h-16 font-bold text-lg">
                            Get Started Securely
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

const SecurityCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
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

export default SecurityPage;
