import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ShieldCheck, ArrowLeft, Lock } from "lucide-react";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loginAdmin } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await loginAdmin(email, password);
        if (success) {
            navigate("/admin/dashboard");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4 animate-fade-in font-sans">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-screen bg-gray-50/50 -z-10 hidden lg:block"></div>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
                <div className="hidden lg:block space-y-8">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-100">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold text-gray-900 leading-tight">Admin <br /><span className="text-blue-600">Command Center.</span></h1>
                        <p className="text-xl text-gray-500 font-medium mt-6 leading-relaxed max-w-md">Secure enterprise-grade access for system administrators and workspace controllers.</p>
                    </div>
                    <div className="pt-8 flex items-center gap-10">
                        <div>
                            <p className="text-2xl font-bold text-gray-900">256-bit</p>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Encryption</p>
                        </div>
                        <div className="h-10 w-px bg-gray-100"></div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">Cloud</p>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Environment</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Card className="w-full max-w-md border-none shadow-2xl shadow-gray-200/50 rounded-[2.5rem] overflow-hidden bg-white">
                        <CardHeader className="bg-gray-900 text-white p-10 text-center relative overflow-hidden">
                            {/* Decorative lock icon */}
                            <div className="absolute -right-4 -top-4 opacity-10">
                                <Lock className="w-32 h-32" />
                            </div>
                            <CardTitle className="text-3xl font-bold tracking-tight">System Entry</CardTitle>
                            <CardDescription className="text-gray-400 font-medium pt-1">Authenticate to proceed to dashboard</CardDescription>
                        </CardHeader>
                        <form onSubmit={handleLogin}>
                            <CardContent className="p-10 space-y-6">
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest ml-1">Admin Email</Label>
                                    <Input
                                        type="email"
                                        placeholder="admin@ikosender.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="h-14 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-600 transition-all font-bold px-6"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest ml-1">Access Key</Label>
                                    <Input
                                        type="password"
                                        placeholder="••••••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="h-14 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-600 transition-all font-bold px-6"
                                    />
                                </div>
                                <Button type="submit" className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-100 transition-all hover:scale-[1.02]">
                                    Verify Identity
                                </Button>
                            </CardContent>
                            <CardFooter className="px-10 pb-10 flex flex-col gap-4">
                                <Button variant="ghost" type="button" onClick={() => navigate("/")} className="w-full text-xs font-bold text-gray-400 gap-2 h-10 rounded-xl hover:bg-gray-50">
                                    <ArrowLeft className="w-3 h-3" /> Back to Public Site
                                </Button>
                                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-gray-300 text-center mt-4">Restricted Access • Logged Session</p>
                            </CardFooter>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
