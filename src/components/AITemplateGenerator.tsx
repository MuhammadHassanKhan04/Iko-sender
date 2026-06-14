import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Loader2, Wand2, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AITemplateGeneratorProps {
  onTemplateGenerated: (template: { subject: string; body: string }) => void;
}

const TEMPLATE_STYLES = [
  { value: "modern", label: "Modern & Clean" },
  { value: "corporate", label: "Corporate Professional" },
  { value: "creative", label: "Creative & Bold" },
  { value: "minimal", label: "Minimal & Elegant" },
  { value: "colorful", label: "Colorful & Fun" }
];

const COLOR_SCHEMES = [
  { value: "blue", label: "Professional Blue", primary: "#3b82f6", secondary: "#1e40af" },
  { value: "green", label: "Fresh Green", primary: "#22c55e", secondary: "#15803d" },
  { value: "purple", label: "Royal Purple", primary: "#8b5cf6", secondary: "#6d28d9" },
  { value: "red", label: "Bold Red", primary: "#ef4444", secondary: "#b91c1c" },
  { value: "orange", label: "Warm Orange", primary: "#f97316", secondary: "#c2410c" },
  { value: "teal", label: "Ocean Teal", primary: "#14b8a6", secondary: "#0f766e" }
];

const AITemplateGenerator = ({ onTemplateGenerated }: AITemplateGeneratorProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("modern");
  const [colorScheme, setColorScheme] = useState("blue");
  const [companyName, setCompanyName] = useState("");
  const [generatedTemplate, setGeneratedTemplate] = useState<{ subject: string; body: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const generateTemplate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Prompt Required",
        description: "Please describe your email template",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    // Simulate AI generation with predefined templates based on input
    setTimeout(() => {
      const selectedColor = COLOR_SCHEMES.find(c => c.value === colorScheme) || COLOR_SCHEMES[0];
      const company = companyName || "Your Company";
      
      const subject = generateSubject(prompt);
      const body = generateEmailBody(prompt, style, selectedColor, company);
      
      setGeneratedTemplate({ subject, body });
      setLoading(false);
      
      toast({
        title: "Template Generated!",
        description: "Your AI-powered email template is ready"
      });
    }, 2000);
  };

  const generateSubject = (prompt: string): string => {
    const lowerPrompt = prompt.toLowerCase();
    if (lowerPrompt.includes("sale") || lowerPrompt.includes("discount")) {
      return "🎉 Exclusive Sale - Limited Time Only!";
    }
    if (lowerPrompt.includes("welcome") || lowerPrompt.includes("onboard")) {
      return "👋 Welcome to the Family!";
    }
    if (lowerPrompt.includes("newsletter") || lowerPrompt.includes("update")) {
      return "📬 Your Monthly Newsletter is Here";
    }
    if (lowerPrompt.includes("launch") || lowerPrompt.includes("new")) {
      return "🚀 Exciting News: We're Launching Something Big!";
    }
    if (lowerPrompt.includes("thank") || lowerPrompt.includes("appreciation")) {
      return "💝 Thank You for Being Amazing!";
    }
    return "📧 Important Update from Us";
  };

  const generateEmailBody = (prompt: string, style: string, color: typeof COLOR_SCHEMES[0], company: string): string => {
    const bgColor = style === "minimal" ? "#ffffff" : "#f4f7fa";
    const textDark = "#1f2937";
    const textMuted = "#6b7280";
    
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: ${bgColor};">
  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, ${color.primary} 0%, ${color.secondary} 100%);">
    <tr>
      <td align="center" style="padding: 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center; padding: 20px;">
              <h1 style="color: #ffffff; font-size: 28px; margin: 0; font-weight: 700;">${company}</h1>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Hero Section -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #ffffff;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <h1 style="color: ${textDark}; font-size: 36px; margin: 0 0 20px; font-weight: 700; line-height: 1.3;">
                ${getHeroTitle(prompt)}
              </h1>
              <p style="color: ${textMuted}; font-size: 18px; margin: 0 0 30px; line-height: 1.6;">
                ${getHeroDescription(prompt)}
              </p>
              <a href="#" style="display: inline-block; padding: 16px 45px; background: ${color.primary}; color: #ffffff; text-decoration: none; border-radius: ${style === 'minimal' ? '4px' : '50px'}; font-weight: 600; font-size: 16px;">
                ${getCtaText(prompt)}
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Content Section -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: ${bgColor};">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="20">
                <tr>
                  <td width="50%" style="background: #ffffff; padding: 30px; border-radius: 12px; vertical-align: top;">
                    <div style="width: 48px; height: 48px; background: ${color.primary}20; border-radius: 12px; text-align: center; line-height: 48px; font-size: 24px; margin-bottom: 15px;">✨</div>
                    <h3 style="color: ${textDark}; margin: 0 0 10px; font-size: 18px;">Feature One</h3>
                    <p style="color: ${textMuted}; margin: 0; font-size: 14px; line-height: 1.6;">Describe an amazing feature or benefit that your customers will love.</p>
                  </td>
                  <td width="50%" style="background: #ffffff; padding: 30px; border-radius: 12px; vertical-align: top;">
                    <div style="width: 48px; height: 48px; background: ${color.primary}20; border-radius: 12px; text-align: center; line-height: 48px; font-size: 24px; margin-bottom: 15px;">🚀</div>
                    <h3 style="color: ${textDark}; margin: 0 0 10px; font-size: 18px;">Feature Two</h3>
                    <p style="color: ${textMuted}; margin: 0; font-size: 14px; line-height: 1.6;">Another compelling reason why they should take action today.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- CTA Section -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, ${color.primary} 0%, ${color.secondary} 100%);">
    <tr>
      <td align="center" style="padding: 50px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <h2 style="color: #ffffff; font-size: 28px; margin: 0 0 15px;">Ready to Get Started?</h2>
              <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin: 0 0 25px;">Don't miss out on this amazing opportunity.</p>
              <a href="#" style="display: inline-block; padding: 16px 50px; background: #ffffff; color: ${color.primary}; text-decoration: none; border-radius: ${style === 'minimal' ? '4px' : '50px'}; font-weight: 700; font-size: 16px;">Take Action Now</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #1f2937;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <p style="color: #ffffff; font-size: 18px; font-weight: 600; margin: 0 0 15px;">${company}</p>
              <p style="color: #9ca3af; font-size: 14px; margin: 0 0 20px;">Your trusted partner for success</p>
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                © 2024 ${company}. All rights reserved.<br>
                <a href="#" style="color: ${color.primary}; text-decoration: none;">Unsubscribe</a> | <a href="#" style="color: ${color.primary}; text-decoration: none;">Privacy Policy</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;
  };

  const getHeroTitle = (prompt: string): string => {
    const lowerPrompt = prompt.toLowerCase();
    if (lowerPrompt.includes("sale")) return "Massive Sale Event!";
    if (lowerPrompt.includes("welcome")) return "Welcome Aboard!";
    if (lowerPrompt.includes("newsletter")) return "Your Monthly Update";
    if (lowerPrompt.includes("launch")) return "Something Big is Coming";
    if (lowerPrompt.includes("thank")) return "Thank You So Much!";
    return "We Have Exciting News";
  };

  const getHeroDescription = (prompt: string): string => {
    const lowerPrompt = prompt.toLowerCase();
    if (lowerPrompt.includes("sale")) return "Get ready for incredible savings on your favorite products. Limited time only!";
    if (lowerPrompt.includes("welcome")) return "We're thrilled to have you join our community. Here's what you can expect.";
    if (lowerPrompt.includes("newsletter")) return "Catch up on all the latest news, updates, and exclusive content from our team.";
    if (lowerPrompt.includes("launch")) return "We've been working on something special and can't wait to share it with you.";
    if (lowerPrompt.includes("thank")) return "Your support means everything to us. Here's a special gift just for you.";
    return "We have some exciting updates to share with you today.";
  };

  const getCtaText = (prompt: string): string => {
    const lowerPrompt = prompt.toLowerCase();
    if (lowerPrompt.includes("sale")) return "Shop the Sale";
    if (lowerPrompt.includes("welcome")) return "Get Started";
    if (lowerPrompt.includes("newsletter")) return "Read More";
    if (lowerPrompt.includes("launch")) return "Learn More";
    if (lowerPrompt.includes("thank")) return "Claim Your Gift";
    return "Explore Now";
  };

  const handleUseTemplate = () => {
    if (generatedTemplate) {
      onTemplateGenerated(generatedTemplate);
      setOpen(false);
      toast({
        title: "Template Applied",
        description: "Your AI-generated template has been added to the editor"
      });
    }
  };

  const handleCopy = () => {
    if (generatedTemplate) {
      navigator.clipboard.writeText(generatedTemplate.body);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/10">
          <Wand2 className="w-4 h-4" />
          AI Generate Template
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            AI Template Generator
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {!generatedTemplate ? (
            <>
              <div className="space-y-2">
                <Label>Describe your email campaign</Label>
                <Textarea
                  placeholder="E.g., A promotional email for our summer sale with 50% off all products, targeting existing customers..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  className="resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Company/Brand Name</Label>
                  <Input
                    placeholder="Your Company"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Template Style</Label>
                  <Select value={style} onValueChange={setStyle}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {TEMPLATE_STYLES.map((s) => (
                        <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Color Scheme</Label>
                <div className="grid grid-cols-3 gap-2">
                  {COLOR_SCHEMES.map((scheme) => (
                    <button
                      key={scheme.value}
                      onClick={() => setColorScheme(scheme.value)}
                      className={`p-3 rounded-lg border-2 transition-all flex items-center gap-2 ${
                        colorScheme === scheme.value 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div 
                        className="w-6 h-6 rounded-full" 
                        style={{ background: `linear-gradient(135deg, ${scheme.primary}, ${scheme.secondary})` }}
                      />
                      <span className="text-sm">{scheme.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={generateTemplate} 
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating Template...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Template
                  </>
                )}
              </Button>
            </>
          ) : (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Generated Subject</CardTitle>
                  <CardDescription className="text-base font-medium text-foreground">
                    {generatedTemplate.subject}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">Email Preview</CardTitle>
                  <Button variant="ghost" size="sm" onClick={handleCopy}>
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </CardHeader>
                <CardContent>
                  <div 
                    className="border rounded-lg overflow-hidden max-h-[300px] overflow-y-auto"
                    dangerouslySetInnerHTML={{ __html: generatedTemplate.body }}
                  />
                </CardContent>
              </Card>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => setGeneratedTemplate(null)}
                  className="flex-1"
                >
                  Generate Another
                </Button>
                <Button 
                  onClick={handleUseTemplate}
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  Use This Template
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AITemplateGenerator;
