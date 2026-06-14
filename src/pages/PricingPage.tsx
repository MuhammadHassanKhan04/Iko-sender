import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, X, Zap, Building2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const PricingPage = () => {
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
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
                        Simple, Transparent Pricing
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
                        Choose the plan that <br /> <span className="text-blue-600">scales with you.</span>
                    </h1>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        From startups to enterprises, we have a plan designed to meet your email marketing needs.
                        No hidden fees, no surprises.
                    </p>
                </div>
            </section>

            {/* PRICING CARDS */}
            <section className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Starter Plan */}
                    <PricingCard
                        icon={<Zap className="w-6 h-6" />}
                        title="Starter"
                        price="$29"
                        period="/month"
                        description="Perfect for small businesses and startups"
                        features={[
                            "5,000 emails/month",
                            "1,000 contacts",
                            "Basic analytics",
                            "Email templates",
                            "Email support",
                            "1 SMTP connection"
                        ]}
                        limitations={[
                            "No A/B testing",
                            "No advanced automation"
                        ]}
                    />

                    {/* Professional Plan - Highlighted */}
                    <PricingCard
                        icon={<Building2 className="w-6 h-6" />}
                        title="Professional"
                        price="$99"
                        period="/month"
                        description="For growing teams that need more power"
                        features={[
                            "50,000 emails/month",
                            "Unlimited contacts",
                            "Advanced analytics",
                            "Custom templates",
                            "Priority support",
                            "5 SMTP connections",
                            "A/B testing",
                            "Advanced automation",
                            "Geolocation tracking"
                        ]}
                        limitations={[]}
                        highlight={true}
                        badge="Most Popular"
                    />

                    {/* Enterprise Plan */}
                    <PricingCard
                        icon={<Rocket className="w-6 h-6" />}
                        title="Enterprise"
                        price="Custom"
                        period=""
                        description="For large organizations with custom needs"
                        features={[
                            "Unlimited emails",
                            "Unlimited contacts",
                            "Real-time analytics",
                            "Custom integrations",
                            "Dedicated support",
                            "Unlimited SMTP connections",
                            "White-label options",
                            "Custom SLA",
                            "API access",
                            "SSO & advanced security"
                        ]}
                        limitations={[]}
                    />
                </div>
            </section>

            {/* FEATURE COMPARISON TABLE */}
            <section className="container mx-auto px-6 py-32 bg-gray-50/50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Feature Comparison</h2>
                    <p className="text-gray-500 font-medium text-center mb-16">See what's included in each plan</p>

                    <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="text-left p-6 font-bold text-gray-900">Feature</th>
                                    <th className="text-center p-6 font-bold text-gray-900">Starter</th>
                                    <th className="text-center p-6 font-bold text-gray-900 bg-blue-50">Professional</th>
                                    <th className="text-center p-6 font-bold text-gray-900">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: "Monthly Email Sends", starter: "5,000", pro: "50,000", enterprise: "Unlimited" },
                                    { feature: "Contact Storage", starter: "1,000", pro: "Unlimited", enterprise: "Unlimited" },
                                    { feature: "Email Templates", starter: "✓", pro: "✓", enterprise: "✓" },
                                    { feature: "Basic Analytics", starter: "✓", pro: "✓", enterprise: "✓" },
                                    { feature: "Advanced Analytics", starter: "—", pro: "✓", enterprise: "✓" },
                                    { feature: "A/B Testing", starter: "—", pro: "✓", enterprise: "✓" },
                                    { feature: "Automation", starter: "—", pro: "✓", enterprise: "✓" },
                                    { feature: "SMTP Connections", starter: "1", pro: "5", enterprise: "Unlimited" },
                                    { feature: "API Access", starter: "—", pro: "Limited", enterprise: "Full" },
                                    { feature: "Support", starter: "Email", pro: "Priority", enterprise: "Dedicated" },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-gray-100 last:border-0">
                                        <td className="p-6 font-medium text-gray-900">{row.feature}</td>
                                        <td className="p-6 text-center text-gray-600">{row.starter}</td>
                                        <td className="p-6 text-center text-gray-900 font-bold bg-blue-50/30">{row.pro}</td>
                                        <td className="p-6 text-center text-gray-600">{row.enterprise}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="container mx-auto px-6 py-32 max-w-3xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Pricing FAQs</h2>
                <div className="space-y-6">
                    {[
                        {
                            q: "Can I change plans later?",
                            a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges."
                        },
                        {
                            q: "What happens if I exceed my email limit?",
                            a: "We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional email credits."
                        },
                        {
                            q: "Do you offer annual billing?",
                            a: "Yes! Annual billing is available with a 20% discount. Contact our sales team for more information."
                        },
                        {
                            q: "Is there a free trial?",
                            a: "Yes! All plans come with a 14-day free trial. No credit card required to start."
                        }
                    ].map((faq, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 p-8">
                            <h4 className="font-bold text-lg text-gray-900 mb-3">{faq.q}</h4>
                            <p className="text-gray-500 font-medium leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-6 py-20">
                <div className="bg-blue-600 p-16 rounded-[3rem] text-center text-white shadow-2xl shadow-blue-200">
                    <h2 className="text-4xl font-bold mb-8">Ready to get started?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of businesses using IkoSender to power their email campaigns.
                    </p>
                    <Link to="/login">
                        <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-2xl px-12 h-16 font-bold text-lg">
                            Start Free Trial
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

const PricingCard = ({
    icon,
    title,
    price,
    period,
    description,
    features,
    limitations,
    highlight = false,
    badge
}: {
    icon: React.ReactNode;
    title: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    limitations: string[];
    highlight?: boolean;
    badge?: string;
}) => (
    <div className={`p-10 rounded-[3rem] border transition-all relative ${highlight
            ? 'bg-white border-blue-600 shadow-2xl shadow-blue-500/20 scale-105'
            : 'bg-white border-gray-100 shadow-sm hover:shadow-xl'
        }`}>
        {badge && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                    {badge}
                </span>
            </div>
        )}
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${highlight ? 'bg-blue-600 text-white' : 'bg-gray-50 text-blue-600'
            }`}>
            {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
        <div className="flex items-baseline gap-1 mb-4">
            <span className="text-5xl font-bold text-gray-900">{price}</span>
            {period && <span className="text-lg text-gray-500">{period}</span>}
        </div>
        <p className="text-gray-500 font-medium mb-8">{description}</p>

        <ul className="space-y-4 mb-8">
            {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-gray-700">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${highlight ? 'text-blue-600' : 'text-green-500'}`} />
                    {feature}
                </li>
            ))}
            {limitations.map((limitation, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-gray-400">
                    <X className="w-5 h-5 flex-shrink-0" />
                    {limitation}
                </li>
            ))}
        </ul>

        <Link to="/login">
            <Button className={`w-full h-14 rounded-2xl font-bold text-lg ${highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-900 text-white hover:bg-black'
                }`}>
                Choose {title}
            </Button>
        </Link>
    </div>
);

export default PricingPage;
