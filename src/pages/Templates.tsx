import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
    ArrowLeft, Search, Mail, Building2, ShoppingBag, Code, Stethoscope, GraduationCap, Home,
    Utensils, Plane, Landmark, Sparkles, Grid, Palette, Eye, ArrowRight
} from "lucide-react";
import { WEBSITE_TEMPLATE_CATEGORIES, WEBSITE_TEMPLATES_DATA } from "@/components/website-templates-data";
import AITemplateGenerator from "@/components/AITemplateGenerator";

const THEMES = [
  { name: "Corporate Blue", primary: "#1e3a8a", secondary: "#3b82f6", bg: "#f8fafc" },
  { name: "Charcoal Slate", primary: "#111827", secondary: "#4b5563", bg: "#f3f4f6" },
  { name: "Forest Green", primary: "#064e3b", secondary: "#10b981", bg: "#f0fdf4" },
  { name: "Crimson passion", primary: "#7f1d1d", secondary: "#ef4444", bg: "#fef2f2" },
  { name: "Sunset Purple", primary: "#4c1d95", secondary: "#8b5cf6", bg: "#f5f3ff" },
  { name: "Fashion Pink", primary: "#831843", secondary: "#ec4899", bg: "#fdf2f8" },
];

const LAYOUTS = [
  { id: "newsletter", name: "Modern Newsletter" },
  { id: "transactional", name: "Transactional Card" },
  { id: "announcement", name: "Big Announcement" },
  { id: "launch", name: "Product Showcase" },
];

const Templates = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<"presets" | "studio">("presets");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  // Customizer State
  const [theme, setTheme] = useState(THEMES[0]);
  const [layoutStyle, setLayoutStyle] = useState("newsletter");
  const [brandName, setBrandName] = useState("My Brand");
  const [logoUrl, setLogoUrl] = useState("https://via.placeholder.com/150x40/ffffff/ffffff?text=LOGO");
  const [headline, setHeadline] = useState("The Next Big Thing is Here");
  const [bodyText, setBodyText] = useState("We are excited to share our latest product updates and insights with you. Our team has worked tirelessly to build an experience you will love.");
  const [buttonText, setButtonText] = useState("Explore Now");
  const [buttonUrl, setButtonUrl] = useState("https://example.com");
  const [footerAddress, setFooterAddress] = useState("123 Marketing Ave, New York, NY 10001");
  const [heroImage, setHeroImage] = useState("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80");

  const categoryIcons: Record<string, any> = {
    "Business & Corporate": <Building2 className="w-4 h-4" />,
    "E-Commerce & Retail": <ShoppingBag className="w-4 h-4" />,
    "Technology & SaaS": <Code className="w-4 h-4" />,
    "Healthcare & Wellness": <Stethoscope className="w-4 h-4" />,
    "Education & Training": <GraduationCap className="w-4 h-4" />,
    "Real Estate & Property": <Home className="w-4 h-4" />,
    "Food & Restaurant": <Utensils className="w-4 h-4" />,
    "Travel & Hospitality": <Plane className="w-4 h-4" />,
    "Finance & Banking": <Landmark className="w-4 h-4" />,
    "Fashion & Beauty": <Sparkles className="w-4 h-4" />
  };

  const filteredTemplates = WEBSITE_TEMPLATES_DATA.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleUseTemplate = (template: any) => {
    if (user?.email) {
      localStorage.setItem(`selectedTemplate_${user.email}`, JSON.stringify(template));
    }
    navigate("/compose");
  };

  const handleAITemplate = (template: { subject: string; body: string }) => {
    if (user?.email) {
      localStorage.setItem(`selectedTemplate_${user.email}`, JSON.stringify({
        id: "ai_generated",
        name: "AI Generated Template",
        category: "Custom",
        subject: template.subject,
        body: template.body,
        variables: []
      }));
    }
    navigate("/compose");
  };

  // Generate Custom HTML
  const generateCustomHtml = () => {
    const styles = `
      margin: 0;
      padding: 0;
      font-family: 'Inter', Helvetica, Arial, sans-serif;
      background-color: ${theme.bg};
      color: #334155;
    `;

    const headerHtml = `
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${theme.primary}; padding: 20px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="padding: 0 20px;">
              <tr>
                <td><h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">${brandName}</h2></td>
                <td align="right"><span style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 600;">Central Campaign</span></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;

    const footerHtml = `
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a; padding: 40px 0; border-top: 1px solid #e2e8f0;">
        <tr>
          <td align="center" style="font-size: 12px; color: #94a3b8; font-weight: 500; line-height: 1.6;">
            <p style="margin: 0 0 10px;">&copy; ${new Date().getFullYear()} ${brandName}. All rights reserved.</p>
            <p style="margin: 0 0 15px;">${footerAddress}</p>
            <p style="margin: 0;">
              <a href="#" style="color: ${theme.secondary}; text-decoration: none; font-weight: 600;">Unsubscribe</a> | 
              <a href="#" style="color: ${theme.secondary}; text-decoration: none; font-weight: 600; margin-left: 10px;">Privacy Policy</a>
            </p>
          </td>
        </tr>
      </table>
    `;

    if (layoutStyle === "newsletter") {
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');</style>
        </head>
        <body style="${styles}">
          ${headerHtml}
          <!-- Hero Section -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-bottom: 1px solid #f1f5f9;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <img src="${heroImage}" alt="Hero Image" style="width: 100%; max-height: 320px; object-cover: cover;" />
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 40px 30px; text-align: center;">
                      <h1 style="color: ${theme.primary}; font-size: 30px; font-weight: 800; margin: 0 0 20px; tracking-tight: -0.5px; line-height: 1.25;">${headline}</h1>
                      <p style="color: #64748b; font-size: 16px; line-height: 1.75; margin: 0 0 30px; font-weight: 500;">${bodyText}</p>
                      <a href="${buttonUrl}" style="display: inline-block; padding: 14px 35px; background-color: ${theme.secondary}; color: #ffffff; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 15px; box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);">${buttonText}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          ${footerHtml}
        </body>
        </html>
      `;
    }

    if (layoutStyle === "transactional") {
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');</style>
        </head>
        <body style="${styles}">
          ${headerHtml}
          <table width="100%" cellpadding="0" cellspacing="0" style="padding: 50px 0;">
            <tr>
              <td align="center">
                <table width="560" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 20px; border: 1px solid #e2e8f0; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.03);">
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="color: ${theme.primary}; font-size: 24px; font-weight: 800; margin: 0 0 15px; border-bottom: 2px solid ${theme.bg}; padding-bottom: 15px;">Notification Alert</h2>
                      <p style="color: #64748b; font-size: 15px; line-height: 1.6; margin: 0 0 25px; font-weight: 500;">${bodyText}</p>
                      
                      <div style="background-color: ${theme.bg}; border-radius: 12px; padding: 20px; margin-bottom: 30px;">
                        <h4 style="margin: 0 0 10px; font-size: 14px; color: ${theme.primary}; font-weight: 700;">Summary Details</h4>
                        <table width="100%" style="font-size: 13px; color: #475569;">
                          <tr>
                            <td style="padding: 4px 0; font-weight: 600;">Status</td>
                            <td align="right" style="color: ${theme.secondary}; font-weight: 700;">CONFIRMED</td>
                          </tr>
                          <tr>
                            <td style="padding: 4px 0; font-weight: 600;">Campaign Code</td>
                            <td align="right" style="font-family: monospace;">CAMP-9823</td>
                          </tr>
                        </table>
                      </div>
                      
                      <a href="${buttonUrl}" style="display: block; text-align: center; padding: 14px 20px; background-color: ${theme.secondary}; color: #ffffff; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 15px;">${buttonText}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          ${footerHtml}
        </body>
        </html>
      `;
    }

    if (layoutStyle === "announcement") {
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');</style>
        </head>
        <body style="${styles}">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 24px; overflow: hidden; border: 1px solid #e2e8f0;">
                  <tr>
                    <td style="background-color: ${theme.primary}; padding: 60px 40px; text-align: center; color: #ffffff;">
                      <span style="font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: ${theme.secondary};">${brandName}</span>
                      <h1 style="font-size: 32px; font-weight: 800; margin: 15px 0 0; line-height: 1.2;">${headline}</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 40px; text-align: center;">
                      <p style="color: #64748b; font-size: 16px; line-height: 1.8; margin: 0 0 30px; font-weight: 500;">${bodyText}</p>
                      <a href="${buttonUrl}" style="display: inline-block; padding: 16px 45px; background-color: ${theme.secondary}; color: #ffffff; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 15px;">${buttonText}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          ${footerHtml}
        </body>
        </html>
      `;
    }

    // Product Showcase
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');</style>
      </head>
      <body style="${styles}">
        ${headerHtml}
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff;">
          <tr>
            <td align="center" style="padding: 50px 20px;">
              <table width="600" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="text-align: center; padding-bottom: 40px;">
                    <span style="font-size: 11px; font-weight: 800; uppercase: true; letter-spacing: 1.5px; color: ${theme.secondary};">PRODUCT RELEASE</span>
                    <h1 style="color: ${theme.primary}; font-size: 36px; font-weight: 800; margin: 10px 0 20px;">Meet the New Model</h1>
                    <p style="color: #64748b; font-size: 16px; line-height: 1.6; max-width: 500px; margin: 0 auto;">${bodyText}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="${heroImage}" alt="Product image" style="width: 100%; border-radius: 16px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05);" />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: center; padding-top: 40px;">
                    <a href="${buttonUrl}" style="display: inline-block; padding: 16px 40px; background-color: ${theme.primary}; color: #ffffff; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 15px;">Pre-Order Now</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        ${footerHtml}
      </body>
      </html>
    `;
  };

  const handleUseCustomGenerator = () => {
    const customTemplate = {
      id: `custom_${Date.now()}`,
      name: `Customized ${brandName} Template`,
      category: "Custom",
      subject: headline,
      body: generateCustomHtml(),
      variables: []
    };
    handleUseTemplate(customTemplate);
  };

  return (
    <div className="space-y-10 pb-20 animate-fade-in">
      {/* Top Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">Layout Library</h1>
          <p className="mt-2 text-lg text-slate-500 font-medium">Pick a professional preset layout or manufacture your own customized designs.</p>
        </div>
        <AITemplateGenerator onTemplateGenerated={handleAITemplate} />
      </div>

      {/* Tabs */}
      <div className="flex bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm gap-1 w-fit">
        <button
          onClick={() => setActiveTab("presets")}
          className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
            activeTab === "presets" ? "bg-slate-900 text-white shadow-md" : "text-gray-500 hover:text-slate-950"
          }`}
        >
          <Grid className="w-4 h-4" /> Presets Library
        </button>
        <button
          onClick={() => setActiveTab("studio")}
          className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
            activeTab === "studio" ? "bg-slate-900 text-white shadow-md" : "text-gray-500 hover:text-slate-950"
          }`}
        >
          <Palette className="w-4 h-4" /> Custom Design Studio
        </button>
      </div>

      {activeTab === "presets" ? (
        <>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search layouts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-600 transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className={`h-10 rounded-xl px-5 font-bold text-xs transition-all ${selectedCategory === 'all' ? 'bg-blue-600 border-blue-600' : 'border-gray-100'}`}
              >
                Universal
              </Button>
              {WEBSITE_TEMPLATE_CATEGORIES.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`h-10 rounded-xl px-5 font-bold text-xs gap-2 transition-all ${selectedCategory === category ? 'bg-blue-600 border-blue-600' : 'border-gray-100'}`}
                >
                  {categoryIcons[category]}
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 hover:border-blue-100 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col"
                onClick={() => {
                  setSelectedTemplate(template);
                  setPreviewOpen(true);
                }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={template.previewImage}
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <Button className="w-full bg-white text-gray-900 hover:bg-white/90 font-bold rounded-xl h-11">View Large Preview</Button>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">{template.category}</span>
                    <div className="text-gray-300">{categoryIcons[template.category]}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{template.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-6 font-medium leading-relaxed">{template.description}</p>
                  <div className="mt-auto">
                    <Button
                      onClick={(e) => { e.stopPropagation(); handleUseTemplate(template); }}
                      className="w-full bg-gray-50 text-gray-900 hover:bg-blue-600 hover:text-white transition-all font-bold rounded-xl h-12"
                    >
                      Select Layout
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="py-20 text-center bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
              <Mail className="w-16 h-16 mx-auto mb-4 text-gray-200" />
              <h3 className="text-xl font-bold text-gray-900">No matches found</h3>
              <p className="text-gray-500">Try searching for something else or browse all categories.</p>
            </div>
          )}
        </>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Customizer Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="border-none shadow-xl shadow-slate-100 rounded-[2rem] bg-white overflow-hidden">
              <CardHeader className="bg-slate-900 text-white p-8">
                <CardTitle className="text-xl font-black flex items-center gap-2">
                  <Palette className="w-5 h-5 text-blue-400" /> Layout Customizer
                </CardTitle>
                <CardDescription className="text-slate-400 font-medium">Configure branding, palettes, and typography.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                
                {/* 1. Theme selection */}
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pl-1">Color Palette</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {THEMES.map((t, idx) => (
                      <button
                        key={idx}
                        onClick={() => setTheme(t)}
                        className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left flex flex-col gap-1 hover:bg-slate-50 ${
                          theme.name === t.name ? "ring-2 ring-blue-600 border-blue-600" : "border-slate-100"
                        }`}
                      >
                        <span className="truncate">{t.name}</span>
                        <div className="flex gap-1">
                          <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: t.primary }} />
                          <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: t.secondary }} />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Layout style */}
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pl-1">Structural Frame</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {LAYOUTS.map((lay) => (
                      <button
                        key={lay.id}
                        onClick={() => setLayoutStyle(lay.id)}
                        className={`p-3 rounded-xl border text-xs font-bold transition-all hover:bg-slate-50 ${
                          layoutStyle === lay.id ? "bg-blue-50/50 border-blue-600 text-blue-600" : "border-slate-100"
                        }`}
                      >
                        {lay.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Branding */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pl-1">Brand Name</Label>
                    <Input
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-none px-3 text-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pl-1">Hero Image (Preset)</Label>
                    <select
                      onChange={(e) => setHeroImage(e.target.value)}
                      className="w-full h-11 rounded-xl bg-slate-50 border-none px-3 text-xs font-medium focus:ring-1 focus:ring-blue-600 cursor-pointer"
                    >
                      <option value="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80">Technology & Space</option>
                      <option value="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80">Marketing & Stats</option>
                      <option value="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80">Corporate Business</option>
                      <option value="https://images.unsplash.com/photo-1472851294608-062f824d296e?w=1200&q=80">E-Commerce Retail</option>
                    </select>
                  </div>
                </div>

                {/* 4. Text Content */}
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pl-1">Main Header / Subject Line</Label>
                  <Input
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    className="h-11 rounded-xl bg-slate-50 border-none px-3 text-xs font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pl-1">Email Body Text</Label>
                  <Textarea
                    value={bodyText}
                    onChange={(e) => setBodyText(e.target.value)}
                    rows={4}
                    className="rounded-xl bg-slate-50 border-none p-3 text-xs leading-relaxed"
                  />
                </div>

                {/* 5. Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pl-1">Button Text</Label>
                    <Input
                      value={buttonText}
                      onChange={(e) => setButtonText(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-none px-3 text-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pl-1">Button URL</Label>
                    <Input
                      value={buttonUrl}
                      onChange={(e) => setButtonUrl(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-none px-3 text-xs font-mono"
                    />
                  </div>
                </div>

                {/* 6. Footer */}
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pl-1">Footer Address Details</Label>
                  <Input
                    value={footerAddress}
                    onChange={(e) => setFooterAddress(e.target.value)}
                    className="h-11 rounded-xl bg-slate-50 border-none px-3 text-xs"
                  />
                </div>

              </CardContent>
              <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end">
                <Button
                  onClick={handleUseCustomGenerator}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-100 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  Use Custom Design <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* HTML Previewer */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-600" /> Interactive Canvas Preview
              </h3>
            </div>
            
            <div className="bg-slate-200 p-1.5 rounded-[2.2rem] border border-slate-300 shadow-inner overflow-hidden">
              <div className="bg-white rounded-[2rem] overflow-hidden border shadow-sm max-h-[680px] overflow-y-auto">
                <div dangerouslySetInnerHTML={{ __html: generateCustomHtml() }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preview Dialog */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 rounded-[2.5rem] border-none shadow-2xl flex flex-col bg-white">
          <div className="p-8 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-gray-900">{selectedTemplate?.name}</DialogTitle>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">{selectedTemplate?.category}</p>
            </div>
            <Button onClick={() => handleUseTemplate(selectedTemplate)} className="bg-blue-600 text-white rounded-xl px-8 font-bold h-12 shadow-lg shadow-blue-100">Use Template</Button>
          </div>
          <div className="flex-1 overflow-y-auto p-8">
            <Tabs defaultValue="preview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-xl h-12">
                <TabsTrigger value="preview" className="rounded-lg font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Visual Preview</TabsTrigger>
                <TabsTrigger value="details" className="rounded-lg font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">System Specs</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="border border-gray-100 rounded-[2rem] overflow-hidden shadow-inner bg-white">
                <div className="p-1 max-h-[500px] overflow-y-auto" dangerouslySetInnerHTML={{ __html: selectedTemplate?.body }} />
              </TabsContent>
              <TabsContent value="details" className="space-y-6 pb-6">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Recommended Subject</h4>
                  <p className="font-bold text-gray-900">{selectedTemplate?.subject}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Design Notes</h4>
                  <p className="text-gray-600 font-medium leading-relaxed">{selectedTemplate?.description}</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Templates;