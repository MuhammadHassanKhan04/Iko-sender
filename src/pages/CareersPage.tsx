import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, Heart, Zap, Users, Globe, TrendingUp, Code, Palette, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const CareersPage = () => {
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
                        <Briefcase className="w-10 h-10" />
                    </div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
                        Join Our Team
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
                        Build the future of <br /> <span className="text-blue-600">email marketing.</span>
                    </h1>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        We're a team of passionate engineers, designers, and marketers building the most powerful email platform on the planet. Join us.
                    </p>
                </div>
            </section>

            {/* WHY JOIN US */}
            <section className="container mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why IkoSender?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <ValueCard
                        icon={<Zap className="w-6 h-6" />}
                        title="Move Fast"
                        description="We ship features weekly and iterate based on real user feedback. Your work makes an immediate impact."
                    />
                    <ValueCard
                        icon={<Users className="w-6 h-6" />}
                        title="Great Team"
                        description="Work with talented people who care deeply about building great products and supporting each other."
                    />
                    <ValueCard
                        icon={<Globe className="w-6 h-6" />}
                        title="Remote First"
                        description="Work from anywhere in the world. We believe in flexibility and trust our team to do their best work."
                    />
                    <ValueCard
                        icon={<TrendingUp className="w-6 h-6" />}
                        title="Growth Focused"
                        description="We invest in your professional development with learning budgets, conferences, and mentorship."
                    />
                    <ValueCard
                        icon={<Heart className="w-6 h-6" />}
                        title="Work-Life Balance"
                        description="Unlimited PTO, flexible hours, and a culture that respects your time outside of work."
                    />
                    <ValueCard
                        icon={<Zap className="w-6 h-6" />}
                        title="Competitive Pay"
                        description="Industry-leading compensation, equity, and comprehensive benefits for you and your family."
                    />
                </div>
            </section>

            {/* COMING SOON */}
            <section className="bg-gray-50/50 py-32 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center">
                        <div className="w-24 h-24 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-200">
                            <Briefcase className="w-12 h-12" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Coming Soon</h2>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
                            We're currently building our team and will be posting open positions soon.
                            In the meantime, feel free to reach out if you're interested in joining IkoSender.
                        </p>
                        <Link to="/contact">
                            <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl px-12 h-16 font-bold text-lg">
                                Get in Touch
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="container mx-auto px-6 py-32">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">Benefits & Perks</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {[
                        "🏥 Health Insurance",
                        "🏖️ Unlimited PTO",
                        "💰 Competitive Salary",
                        "📈 Equity Options",
                        "🏠 Remote Work",
                        "📚 Learning Budget",
                        "💻 Latest Equipment",
                        "🎉 Team Events"
                    ].map((benefit, i) => (
                        <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <p className="text-lg font-bold text-gray-900">{benefit}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-6 py-20">
                <div className="bg-blue-600 p-16 rounded-[3rem] text-center text-white shadow-2xl shadow-blue-200">
                    <h2 className="text-4xl font-bold mb-8">Don't see the right role?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        We're always looking for talented people. Send us your resume and tell us why you'd be a great fit.
                    </p>
                    <Link to="/contact">
                        <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-2xl px-12 h-16 font-bold text-lg">
                            Get in Touch
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
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

const JobCard = ({
    icon,
    title,
    department,
    location,
    type,
    description
}: {
    icon: React.ReactNode;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
}) => (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all group">
        <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                <div className="text-blue-600 group-hover:text-white transition-colors">
                    {icon}
                </div>
            </div>
            <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
                <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold">{department}</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold">{location}</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold">{type}</span>
                </div>
                <p className="text-gray-500 font-medium leading-relaxed mb-6">{description}</p>
                <Link to="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6 h-11 font-bold">
                        Apply Now
                    </Button>
                </Link>
            </div>
        </div>
    </div>
);

export default CareersPage;
