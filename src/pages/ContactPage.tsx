import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans pt-20 animate-fade-in">
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold flex items-center gap-2 text-gray-900">
                        <ArrowLeft className="w-5 h-5" /> Home
                    </Link>
                </div>
            </nav>

            <div className="container mx-auto px-6 py-20">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in <span className="text-blue-600">Touch</span></h1>
                    <p className="text-xl text-gray-500 font-medium">
                        Have questions? Need enterprise customization? We're here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="space-y-8">
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 transition-colors">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">Email Us</h3>
                            </div>
                            <p className="text-gray-500 font-medium pl-16">ikoteksolutions@gmail.com</p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 transition-colors">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">Call Us</h3>
                            </div>
                            <p className="text-gray-500 font-medium pl-16">+92 371 0013071</p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 transition-colors">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">Visit Us</h3>
                            </div>
                            <p className="text-gray-500 font-medium pl-16">Global Headquarters</p>
                        </div>
                    </div>

                    <Card className="border-none shadow-xl shadow-gray-200/50 h-fit rounded-[2.5rem] bg-white overflow-hidden">
                        <CardHeader className="p-10 pb-4">
                            <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
                        </CardHeader>
                        <CardContent className="p-10 pt-4">
                            <ContactForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    );
}

const ContactForm = () => {
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const formData = new FormData();
            formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY || "cb5ea38c-2cec-448f-968c-9f3ae698cae0");
            formData.append("name", name);
            formData.append("email", email);
            formData.append("message", message);

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (res.ok) {
                setStatus("sent");
                toast.success("Message sent successfully!");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                toast.error("Failed to send message. Please try again.");
                setStatus("idle");
            }
        } catch (error) {
            toast.error("Error submitting form.");
            setStatus("idle");
        }
    };

    if (status === "sent") {
        return (
            <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <Send className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="text-gray-500 font-medium">We'll get back to you shortly.</p>
                <Button variant="outline" className="rounded-xl" onClick={() => setStatus("idle")}>Send Another</Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="name" className="text-[10px] font-bold uppercase text-gray-400 tracking-widest pl-1">Full Name</Label>
                <Input id="name" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required className="h-14 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-colors" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email" className="text-[10px] font-bold uppercase text-gray-400 tracking-widest pl-1">Work Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} required className="h-14 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-colors" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message" className="text-[10px] font-bold uppercase text-gray-400 tracking-widest pl-1">Message Description</Label>
                <Textarea id="message" placeholder="How can we help?" rows={4} value={message} onChange={e => setMessage(e.target.value)} required className="bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-colors p-4" />
            </div>
            <Button type="submit" className="w-full h-14 bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl transition-all rounded-2xl font-bold text-lg" disabled={status === "sending"}>
                {status === "sending" ? "Processing..." : "Dispatch Message"}
            </Button>
        </form>
    );
}

export default ContactPage;
