import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Mail, Sparkles, UserPlus } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    
    const { loginUser, signUpUser } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            if (isSignUp) {
                if (!name.trim() || !email.trim() || !password.trim()) {
                    toast.error("All fields are required");
                    return;
                }
                const success = await signUpUser(name, email, password);
                if (success) {
                    navigate("/dashboard");
                }
            } else {
                if (!identifier.trim() || !password.trim()) {
                    toast.error("Username/Email and Password are required");
                    return;
                }
                if (await loginUser(identifier, password)) {
                    navigate("/dashboard");
                }
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4 animate-fade-in font-sans relative">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-1/2 h-screen bg-gray-50/50 -z-10 hidden lg:block"></div>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 items-center gap-20">

                <div className="flex justify-center order-2 lg:order-1">
                    <Card className="w-full max-w-md border-none shadow-2xl shadow-gray-200/50 rounded-[2.5rem] overflow-hidden bg-white">
                        
                        {/* Tab Headers */}
                        <div className="flex bg-slate-50 border-b border-slate-100">
                            <button
                                type="button"
                                onClick={() => { setIsSignUp(false); setPassword(""); }}
                                className={`flex-1 py-4 font-bold text-sm transition-all ${!isSignUp ? "bg-white text-blue-600 border-t-4 border-t-blue-600" : "text-gray-400 hover:text-slate-600"}`}
                            >
                                Sign In
                            </button>
                            <button
                                type="button"
                                onClick={() => { setIsSignUp(true); setPassword(""); }}
                                className={`flex-1 py-4 font-bold text-sm transition-all ${isSignUp ? "bg-white text-blue-600 border-t-4 border-t-blue-600" : "text-gray-400 hover:text-slate-600"}`}
                            >
                                Create Account
                            </button>
                        </div>

                        <CardHeader className="p-8 text-center space-y-2">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-2">
                                {isSignUp ? <UserPlus className="w-6 h-6" /> : <Mail className="w-6 h-6" />}
                            </div>
                            <CardTitle className="text-2xl font-black tracking-tight text-gray-900">
                                {isSignUp ? "Workspace Signup" : "User Console"}
                            </CardTitle>
                            <CardDescription className="text-gray-500 font-medium">
                                {isSignUp ? "Register globally to choose a sending plan." : "Authentication required for tool access."}
                            </CardDescription>
                        </CardHeader>

                        <form onSubmit={handleSubmit}>
                            <CardContent className="px-8 space-y-5">
                                {isSignUp ? (
                                    <>
                                        <div className="space-y-2">
                                            <Label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest ml-1">Workspace Name</Label>
                                            <Input
                                                placeholder="E.g. Alex Marketing"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-600 transition-all font-semibold px-4"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest ml-1">Email Address</Label>
                                            <Input
                                                type="email"
                                                placeholder="alex@company.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-600 transition-all font-semibold px-4"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest ml-1">Username or Email</Label>
                                        <Input
                                            placeholder="E.g. alex@company.com"
                                            value={identifier}
                                            onChange={(e) => setIdentifier(e.target.value)}
                                            required
                                            className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-600 transition-all font-semibold px-4"
                                        />
                                    </div>
                                )}
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest ml-1">Secure Password</Label>
                                    <Input
                                        type="password"
                                        placeholder="••••••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-600 transition-all font-semibold px-4"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-100 transition-all hover:scale-[1.01]"
                                >
                                    {isLoading ? "Processing..." : isSignUp ? "Register Account" : "Authenticate Session"}
                                </Button>
                            </CardContent>
                            <CardFooter className="px-8 pb-8 flex flex-col gap-4">
                                <Button variant="ghost" type="button" onClick={() => navigate("/")} className="w-full text-xs font-bold text-gray-400 gap-2 h-10 rounded-xl hover:bg-gray-50">
                                    <ArrowLeft className="w-3 h-3" /> Return to Homepage
                                </Button>
                            </CardFooter>
                        </form>
                    </Card>
                </div>

                <div className="hidden lg:block space-y-8 order-1 lg:order-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6 animate-fade-in">
                        <Sparkles className="w-3 h-3" /> High Precision Mailing
                    </div>
                    <div>
                        <h1 className="text-5xl font-black text-slate-800 leading-tight">Effortless <br /><span className="text-blue-600">Reach.</span></h1>
                        <p className="text-xl text-slate-500 font-medium mt-6 leading-relaxed max-w-md">Log in or create a global account to manage high-speed campaign dispatches, custom SMTP integrations, and analytics.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 pt-8 max-w-sm">
                        <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                          <p className="text-2xl font-black text-slate-800">99.9%</p>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Delivery Rate</p>
                        </div>
                        <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                          <p className="text-2xl font-black text-slate-800">100%</p>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Global Sync</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
