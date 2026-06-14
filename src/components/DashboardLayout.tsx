import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Mail, Menu, X, ChevronLeft, ChevronRight,
  LayoutDashboard, FileText, Send, BarChart3, Users, History, Settings, Sparkles, LogOut, ShieldCheck
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { path: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { path: "/compose", label: "New Campaign", icon: Send },
  { path: "/templates", label: "Templates", icon: FileText },
  { path: "/analytics", label: "Analytics", icon: BarChart3 },
];

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout, isAdmin } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-white select-none">
      {/* Brand */}
      <div className={`p-6 border-b border-gray-100 flex items-center gap-3 ${collapsed ? "justify-center" : ""}`}>
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-200">
          <Mail className="w-5 h-5" />
        </div>
        {!collapsed && (
          <span className="text-xl font-bold tracking-tight text-gray-900">
            IkoSender
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${active
                ? "bg-blue-600 text-white shadow-lg shadow-blue-100"
                : "text-gray-500 hover:bg-gray-50 hover:text-blue-600"
                } ${collapsed ? "justify-center px-0 w-12 mx-auto" : ""}`}
            >
              <Icon className={`w-5 h-5 shrink-0 ${active ? "text-white" : "group-hover:text-blue-600"}`} />
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Admin Quick Link */}
      {isAdmin && !collapsed && (
        <div className="px-4 mb-2">
          <Link to="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900 text-white hover:bg-black transition-all">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-medium">Admin Panel</span>
          </Link>
        </div>
      )}



      {/* Profile & Footer */}
      <div className={`p-4 border-t border-gray-100 flex flex-col gap-2 ${collapsed ? "items-center" : ""}`}>
        {user && !collapsed && (
          <div className="px-2 mb-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Logged in as</p>
            <p className="text-sm font-bold text-gray-900 truncate">{user.name}</p>
          </div>
        )}
        <div className={`flex w-full ${collapsed ? "flex-col gap-3" : "items-center justify-between"}`}>
          <Button
            variant="ghost"
            size="icon"
            onClick={logout}
            className="text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl hidden md:flex"
          >
            {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setMobileOpen(false)} />
          <aside className="fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 md:hidden">
            <button onClick={() => setMobileOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900"> <X className="w-6 h-6" /> </button>
            <SidebarContent />
          </aside>
        </>
      )}

      {/* Desktop sidebar */}
      <aside className={`hidden md:flex fixed top-0 left-0 h-full bg-white border-r border-gray-100 flex-col transition-all duration-300 z-40 ${collapsed ? "w-20" : "w-72"}`}>
        <SidebarContent />
      </aside>

      {/* Mobile Top Bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 z-30">
        <button onClick={() => setMobileOpen(true)} className="text-gray-500 p-2 hover:bg-gray-50 rounded-lg"> <Menu className="w-6 h-6" /> </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white"> <Mail className="w-4 h-4" /> </div>
          <span className="font-bold text-gray-900">IkoSender</span>
        </div>
        <div className="w-10" />
      </header>

      {/* Main content */}
      <main className={`flex-1 transition-all duration-300 pt-16 md:pt-0 ${collapsed ? "md:pl-20" : "md:pl-72"}`}>
        <div className="p-6 md:p-10 min-h-screen animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
