import { Link } from "react-router-dom";
import { Mail, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
                    {/* Brand and Description */}
                    <div className="md:col-span-4 space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter text-gray-900">
                                IkoSender
                            </span>
                        </div>
                        <p className="text-gray-500 font-medium leading-relaxed max-w-sm">
                            The precision-engineered intelligence layer for modern communication.
                            Join thousands of businesses optimizing their outreach with our professional tools.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Platform</h4>
                        <ul className="space-y-4">
                            {["Features", "Pricing", "Security", "Analytics"].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase()}`} className="text-gray-500 hover:text-blue-600 font-medium transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4">
                            {["About Us", "Contact", "Careers", "Trust Center"].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(" ", "")}`} className="text-gray-500 hover:text-blue-600 font-medium transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-4 space-y-8">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Stay Updated</h4>
                        <p className="text-gray-500 font-medium leading-relaxed">
                            Get the latest insights on high-performance email strategy.
                        </p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                className="w-full bg-gray-50 border-2 border-transparent focus:border-blue-600 rounded-2xl h-14 pl-6 pr-32 transition-all outline-none font-medium placeholder:text-gray-400 shadow-sm"
                            />
                            <Button className="absolute right-1 top-1 h-12 px-6 rounded-xl bg-gray-900 text-white hover:bg-black font-bold text-sm transition-all group-hover:scale-[1.02]">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Legal and Bottom Bar */}
                <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-gray-400 text-sm font-medium">
                        © 2024 IkoSender Intelligence. All rights reserved. Professional Grade.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-400">
                        <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Cookies</a>
                        <Link to="/admin/login" className="text-gray-300 hover:text-blue-600 transition-colors">Internal Ops</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
