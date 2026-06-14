import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, CheckCircle2, FileCheck, Lock, Server, Eye, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const TrustCenterPage = () => {
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
                        Trust & Transparency
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
                        Built on trust, <br /> <span className="text-blue-600">powered by transparency.</span>
                    </h1>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        Your trust is our most valuable asset. Learn about our commitment to security, privacy, and reliability.
                    </p>
                </div>
            </section>

            {/* UPTIME STATS */}
            <section className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <StatCard
                        value="99.99%"
                        label="Uptime SLA"
                        description="Industry-leading uptime guarantee"
                    />
                    <StatCard
                        value="< 50ms"
                        label="Response Time"
                        description="Lightning-fast API responses"
                    />
                    <StatCard
                        value="24/7"
                        label="Monitoring"
                        description="Round-the-clock system monitoring"
                    />
                </div>
            </section>

            {/* COMPLIANCE & CERTIFICATIONS */}
            <section className="bg-gray-50/50 py-32 border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">Compliance & Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <ComplianceCard
                            icon={<FileCheck className="w-6 h-6" />}
                            title="SOC 2 Type II Certified"
                            description="Annual third-party audits verify our security controls and processes meet the highest industry standards."
                            status="Certified"
                        />
                        <ComplianceCard
                            icon={<Shield className="w-6 h-6" />}
                            title="GDPR Compliant"
                            description="Full compliance with EU data protection regulations. Your data is processed lawfully and transparently."
                            status="Compliant"
                        />
                        <ComplianceCard
                            icon={<Lock className="w-6 h-6" />}
                            title="HIPAA Ready"
                            description="Healthcare-grade security controls for organizations handling protected health information."
                            status="Ready"
                        />
                        <ComplianceCard
                            icon={<FileCheck className="w-6 h-6" />}
                            title="ISO 27001 Certified"
                            description="International standard for information security management systems, ensuring systematic security."
                            status="Certified"
                        />
                    </div>
                </div>
            </section>

            {/* SECURITY PRACTICES */}
            <section className="container mx-auto px-6 py-32">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">Our Security Practices</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <PracticeCard
                        icon={<Server className="w-6 h-6" />}
                        title="Infrastructure Security"
                        items={[
                            "Multi-region redundancy",
                            "Automated backups",
                            "DDoS protection",
                            "Network isolation"
                        ]}
                    />
                    <PracticeCard
                        icon={<Eye className="w-6 h-6" />}
                        title="Monitoring & Detection"
                        items={[
                            "24/7 security monitoring",
                            "Intrusion detection",
                            "Automated alerts",
                            "Incident response team"
                        ]}
                    />
                    <PracticeCard
                        icon={<Lock className="w-6 h-6" />}
                        title="Data Protection"
                        items={[
                            "AES-256 encryption",
                            "TLS 1.3 in transit",
                            "Regular security audits",
                            "Penetration testing"
                        ]}
                    />
                </div>
            </section>

            {/* INCIDENT RESPONSE */}
            <section className="bg-gray-50/50 py-32 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <AlertCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Incident Response</h2>
                        <p className="text-xl text-gray-500 font-medium">
                            In the unlikely event of a security incident, we have a comprehensive response plan.
                        </p>
                    </div>
                    <div className="space-y-6">
                        {[
                            {
                                step: "1",
                                title: "Detection & Assessment",
                                description: "Automated systems and our security team detect and assess the incident within minutes."
                            },
                            {
                                step: "2",
                                title: "Containment",
                                description: "Immediate action to contain the incident and prevent further impact."
                            },
                            {
                                step: "3",
                                title: "Communication",
                                description: "Transparent communication with affected customers within 24 hours."
                            },
                            {
                                step: "4",
                                title: "Resolution & Review",
                                description: "Complete resolution followed by a thorough post-incident review and improvements."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                                        <p className="text-gray-500 font-medium leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRANSPARENCY COMMITMENT */}
            <section className="container mx-auto px-6 py-32">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Transparency Commitment</h2>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12">
                        We believe in radical transparency. You have the right to know how we handle your data,
                        what security measures we have in place, and how we respond to incidents.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-left">
                            <h4 className="font-bold text-lg text-gray-900 mb-3">Public Status Page</h4>
                            <p className="text-gray-500 font-medium leading-relaxed mb-4">
                                Real-time system status and incident history available 24/7.
                            </p>
                            <a href="#" className="text-blue-600 font-bold hover:underline">View Status →</a>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-left">
                            <h4 className="font-bold text-lg text-gray-900 mb-3">Security Documentation</h4>
                            <p className="text-gray-500 font-medium leading-relaxed mb-4">
                                Detailed security whitepapers and compliance documentation.
                            </p>
                            <Link to="/security" className="text-blue-600 font-bold hover:underline">Learn More →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-6 py-20">
                <div className="bg-blue-600 p-16 rounded-[3rem] text-center text-white shadow-2xl shadow-blue-200">
                    <h2 className="text-4xl font-bold mb-8">Questions about our security?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Our security team is here to answer any questions you have about our practices and compliance.
                    </p>
                    <Link to="/contact">
                        <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-2xl px-12 h-16 font-bold text-lg">
                            Contact Security Team
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

const StatCard = ({ value, label, description }: { value: string; label: string; description: string }) => (
    <div className="text-center p-8 bg-gray-50 rounded-3xl border border-gray-100">
        <div className="text-5xl font-bold text-blue-600 mb-2">{value}</div>
        <h4 className="font-bold text-gray-900 mb-2">{label}</h4>
        <p className="text-sm text-gray-500 font-medium">{description}</p>
    </div>
);

const ComplianceCard = ({
    icon,
    title,
    description,
    status
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    status: string;
}) => (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
        <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                {icon}
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold">{status}</span>
                </div>
            </div>
        </div>
        <p className="text-gray-500 font-medium leading-relaxed">{description}</p>
    </div>
);

const PracticeCard = ({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) => (
    <div className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group">
        <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
            <div className="text-blue-600 group-hover:text-white transition-colors">
                {icon}
            </div>
        </div>
        <h3 className="text-xl font-bold mb-6 text-gray-900">{title}</h3>
        <ul className="space-y-3">
            {items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

export default TrustCenterPage;
