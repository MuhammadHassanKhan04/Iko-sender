import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import Home from "./pages/Home";
import FeaturesPage from "./pages/FeaturesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PricingPage from "./pages/PricingPage";
import SecurityPage from "./pages/SecurityPage";
import AnalyticsPublicPage from "./pages/AnalyticsPublicPage";
import CareersPage from "./pages/CareersPage";
import TrustCenterPage from "./pages/TrustCenterPage";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Templates from "./pages/Templates";
import Compose from "./pages/Compose";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";
import SubscriptionPage from "./pages/SubscriptionPage";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({
  children,
  requireAdmin = false,
  requireActive = true
}: {
  children: React.ReactNode;
  requireAdmin?: boolean;
  requireActive?: boolean;
}) => {
  const { isAuthenticated, isAdmin, user } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (requireAdmin) {
    if (!isAdmin) return <Navigate to="/dashboard" replace />;
    return <>{children}</>;
  }

  // Admins can bypass active subscription check for viewing user console
  if (user?.role === "admin") {
    return <>{children}</>;
  }

  if (requireActive && user?.status !== "active") {
    return <Navigate to="/subscription" replace />;
  }

  if (!requireActive && user?.status === "active") {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/analytics" element={<AnalyticsPublicPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/aboutus" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/trustcenter" element={<TrustCenterPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Admin Dashboard */}
            <Route path="/admin/dashboard" element={
              <ProtectedRoute requireAdmin={true}>
                <AdminDashboard />
              </ProtectedRoute>
            } />

            {/* Subscription Flow page (requires authentication, but not active status) */}
            <Route path="/subscription" element={
              <ProtectedRoute requireActive={false}>
                <SubscriptionPage />
              </ProtectedRoute>
            } />

            {/* User Dashboard Pages (requires active status) */}
            <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout><Dashboard /></DashboardLayout></ProtectedRoute>} />
            <Route path="/compose" element={<ProtectedRoute><DashboardLayout><Compose /></DashboardLayout></ProtectedRoute>} />
            <Route path="/templates" element={<ProtectedRoute><DashboardLayout><Templates /></DashboardLayout></ProtectedRoute>} />
            <Route path="/analytics" element={<ProtectedRoute><DashboardLayout><Analytics /></DashboardLayout></ProtectedRoute>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
