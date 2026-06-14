import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight, Mail, Shield, Zap, BarChart3, Users,
  CheckCircle2, Globe, Clock, MessageSquare, Plus, Minus
} from "lucide-react";
import { useState } from "react";

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: string }) => (
  <div className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all group animate-fade-in" style={{ animationDelay: delay }}>
    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 font-medium leading-relaxed">{description}</p>
  </div>
);

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How secure is IkoSender?", a: "We use enterprise-grade AES-256 encryption for all data at rest and TLS 1.3 for data in transit. Your security is our top priority." },
    { q: "Can I import my existing contacts?", a: "Yes! You can import contacts via CSV, Excel, or direct integration with popular CRM platforms like Salesforce and HubSpot." },
    { q: "Is there a limit on emails I can send?", a: "Limits vary by plan, but our infrastructure is designed to scale with your needs, supporting millions of dispatches daily." },
    { q: "Do you offer real-time analytics?", a: "Absolutely. You get live tracking for opens, clicks, bounces, and geolocation data the moment your campaign launches." }
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Mail className="h-4 w-4" />
            </div>
            IkoSender
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold">
            <Link to="/features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="font-bold hover:text-blue-600">Login</Button>
            </Link>
            <Link to="/login">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all rounded-full px-6 shadow-xl shadow-blue-100 font-bold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white/60 to-white"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/5 border border-blue-600/10 text-blue-600 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Enterprise Grade Email Engine
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1] animate-slide-in-up text-gray-900">
                Mailing, <br />
                <span className="text-blue-600">Perfected.</span>
              </h1>
              <p className="text-xl text-gray-500 mb-12 max-w-xl font-medium leading-relaxed animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
                The professional toolset for high-performance email campaigns.
                Reach your audience with precision and intelligence.
              </p>
              <div className="flex flex-wrap gap-6 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
                <Link to="/login">
                  <Button size="lg" className="h-16 px-10 rounded-2xl text-lg bg-blue-600 text-white hover:bg-blue-700 transition-all hover:scale-105 shadow-2xl shadow-blue-200 font-bold flex items-center gap-3">
                    Launch Console <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl text-lg border-2 hover:bg-gray-50 font-bold text-gray-600">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Marketing Object */}
            <div className="relative animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="relative z-10">
                <img
                  src="/image-removebg-preview.png"
                  alt="Email Marketing Illustration"
                  className="w-full h-auto drop-shadow-2xl animate-float"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px] -z-10 animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Emails Processed", val: "2.5B+" },
              { label: "Active Users", val: "150k+" },
              { label: "Deliverability", val: "99.9%" },
              { label: "Global Reach", val: "180+" },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{stat.val}</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 px-2">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Built for Power Users</h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">Everything you need to manage enterprise-level communication at scale.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title="Secure Infrastructure"
              description="End-to-end encryption and multi-factor authentication for maximum security."
              delay="0s"
            />
            <FeatureCard
              icon={Zap}
              title="Instant Delivery"
              description="Our distributed network ensures your messages reach inboxes in milliseconds."
              delay="0.1s"
            />
            <FeatureCard
              icon={BarChart3}
              title="Deep Analytics"
              description="Gain insights into user behavior with our comprehensive tracking suite."
              delay="0.2s"
            />
            <FeatureCard
              icon={Users}
              title="Contact Management"
              description="Segment and manage your audience with powerful tagging and filtering."
              delay="0s"
            />
            <FeatureCard
              icon={Globe}
              title="Global Scaling"
              description="Deploy campaigns globally with region-matched servers for low latency."
              delay="0.1s"
            />
            <FeatureCard
              icon={Clock}
              title="Smart Scheduling"
              description="Optimize send times based on recipient-specific engagement models."
              delay="0.2s"
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">Streamlined from <br /><span className="text-blue-600">Start to Finish.</span></h2>
              <div className="space-y-10">
                {[
                  { step: "01", title: "Initialize Campaign", text: "Create your workspace and define your target audience with our smart filters." },
                  { step: "02", title: "Design Content", text: "Use our professional templates or your own custom HTML for maximum impact." },
                  { step: "03", title: "Deploy & Track", text: "Launch with a single click and monitor your metrics in real-time on the console." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-3xl font-black text-blue-600/20">{s.step}</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h4>
                      <p className="text-gray-500 font-medium leading-relaxed">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative group">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-100 border-8 border-white">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" alt="Dashboard Preview" className="w-full h-auto" />
              </div>
              <div className="absolute -inset-10 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gray-50/50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-16 text-center tracking-tight">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                >
                  <span className="font-bold text-lg text-gray-900">{faq.q}</span>
                  {openFaq === i ? <Minus className="text-blue-600 w-5 h-5 flex-shrink-0" /> : <Plus className="text-gray-400 w-5 h-5 flex-shrink-0" />}
                </button>
                <div
                  className={`px-8 transition-all duration-300 ease-in-out ${openFaq === i ? "max-h-40 pb-8 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
                >
                  <p className="text-gray-500 font-medium leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-white px-6">
        <div className="container mx-auto max-w-5xl bg-blue-600 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to Upgrade <br />Your Outreach?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">Join 5,000+ businesses who rely on IkoSender for their mission-critical communications.</p>
            <Link to="/login">
              <Button size="lg" className="h-16 px-12 rounded-2xl text-lg bg-white text-blue-600 hover:bg-blue-50 transition-all hover:scale-105 font-bold shadow-xl">
                Get Started Free
              </Button>
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
