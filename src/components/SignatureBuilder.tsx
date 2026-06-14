import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Signature, Image, Phone, Globe, Linkedin, Twitter, Instagram } from "lucide-react";

interface SignatureData {
  name: string;
  title: string;
  company: string;
  phone: string;
  website: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  logoUrl: string;
  style: "modern" | "classic" | "minimal" | "colorful";
}

interface SignatureBuilderProps {
  onInsert: (signature: string) => void;
}

const SignatureBuilder = ({ onInsert }: SignatureBuilderProps) => {
  const [open, setOpen] = useState(false);
  const [signature, setSignature] = useState<SignatureData>({
    name: "",
    title: "",
    company: "",
    phone: "",
    website: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    logoUrl: "",
    style: "modern",
  });

  useEffect(() => {
    const saved = localStorage.getItem("email_signature");
    if (saved) {
      setSignature(JSON.parse(saved));
    }
  }, []);

  const generateSignatureHTML = (): string => {
    const styles = {
      modern: {
        container: "font-family: 'Segoe UI', Arial, sans-serif; border-left: 4px solid #6366f1; padding-left: 16px;",
        name: "font-size: 18px; font-weight: bold; color: #1f2937; margin: 0;",
        title: "font-size: 14px; color: #6366f1; margin: 4px 0;",
        company: "font-size: 14px; color: #4b5563; margin: 0;",
        link: "color: #6366f1; text-decoration: none;",
      },
      classic: {
        container: "font-family: Georgia, serif; border-top: 2px solid #1f2937; padding-top: 16px;",
        name: "font-size: 18px; font-weight: bold; color: #1f2937; margin: 0;",
        title: "font-size: 14px; color: #4b5563; font-style: italic; margin: 4px 0;",
        company: "font-size: 14px; color: #4b5563; margin: 0;",
        link: "color: #1f2937; text-decoration: underline;",
      },
      minimal: {
        container: "font-family: Arial, sans-serif;",
        name: "font-size: 16px; font-weight: bold; color: #374151; margin: 0;",
        title: "font-size: 13px; color: #6b7280; margin: 2px 0;",
        company: "font-size: 13px; color: #6b7280; margin: 0;",
        link: "color: #374151; text-decoration: none;",
      },
      colorful: {
        container: "font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #f0f9ff 0%, #fdf4ff 100%); padding: 16px; border-radius: 8px;",
        name: "font-size: 18px; font-weight: bold; background: linear-gradient(90deg, #6366f1, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0;",
        title: "font-size: 14px; color: #7c3aed; margin: 4px 0;",
        company: "font-size: 14px; color: #6b7280; margin: 0;",
        link: "color: #6366f1; text-decoration: none;",
      },
    };

    const s = styles[signature.style];

    let html = `<div style="${s.container}">`;
    
    if (signature.logoUrl) {
      html += `<img src="${signature.logoUrl}" alt="Logo" style="max-height: 50px; margin-bottom: 8px;" />`;
    }
    
    if (signature.name) {
      html += `<p style="${s.name}">${signature.name}</p>`;
    }
    
    if (signature.title) {
      html += `<p style="${s.title}">${signature.title}</p>`;
    }
    
    if (signature.company) {
      html += `<p style="${s.company}">${signature.company}</p>`;
    }
    
    if (signature.phone || signature.website) {
      html += `<p style="font-size: 13px; color: #6b7280; margin: 8px 0 0 0;">`;
      if (signature.phone) {
        html += `📞 ${signature.phone}`;
      }
      if (signature.phone && signature.website) {
        html += ` | `;
      }
      if (signature.website) {
        html += `🌐 <a href="${signature.website}" style="${s.link}">${signature.website.replace(/^https?:\/\//, '')}</a>`;
      }
      html += `</p>`;
    }
    
    const socials = [];
    if (signature.linkedin) socials.push(`<a href="${signature.linkedin}" style="${s.link}">LinkedIn</a>`);
    if (signature.twitter) socials.push(`<a href="${signature.twitter}" style="${s.link}">Twitter</a>`);
    if (signature.instagram) socials.push(`<a href="${signature.instagram}" style="${s.link}">Instagram</a>`);
    
    if (socials.length > 0) {
      html += `<p style="font-size: 12px; margin: 8px 0 0 0;">${socials.join(' | ')}</p>`;
    }
    
    html += `</div>`;
    
    return html;
  };

  const handleSave = () => {
    localStorage.setItem("email_signature", JSON.stringify(signature));
  };

  const handleInsert = () => {
    handleSave();
    onInsert(generateSignatureHTML());
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" type="button">
          <Signature className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Signature className="h-5 w-5" />
            Email Signature Builder
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Style</Label>
              <Select value={signature.style} onValueChange={(v: any) => setSignature({ ...signature, style: v })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="modern">Modern</SelectItem>
                  <SelectItem value="classic">Classic</SelectItem>
                  <SelectItem value="minimal">Minimal</SelectItem>
                  <SelectItem value="colorful">Colorful</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input
                value={signature.name}
                onChange={(e) => setSignature({ ...signature, name: e.target.value })}
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Job Title</Label>
              <Input
                value={signature.title}
                onChange={(e) => setSignature({ ...signature, title: e.target.value })}
                placeholder="Marketing Manager"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Company</Label>
              <Input
                value={signature.company}
                onChange={(e) => setSignature({ ...signature, company: e.target.value })}
                placeholder="Acme Inc."
              />
            </div>
            
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Phone className="h-3 w-3" /> Phone
              </Label>
              <Input
                value={signature.phone}
                onChange={(e) => setSignature({ ...signature, phone: e.target.value })}
                placeholder="+1 234 567 8900"
              />
            </div>
            
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Globe className="h-3 w-3" /> Website
              </Label>
              <Input
                value={signature.website}
                onChange={(e) => setSignature({ ...signature, website: e.target.value })}
                placeholder="https://example.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Image className="h-3 w-3" /> Logo URL
              </Label>
              <Input
                value={signature.logoUrl}
                onChange={(e) => setSignature({ ...signature, logoUrl: e.target.value })}
                placeholder="https://example.com/logo.png"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1">
                <Label className="flex items-center gap-1 text-xs">
                  <Linkedin className="h-3 w-3" />
                </Label>
                <Input
                  value={signature.linkedin}
                  onChange={(e) => setSignature({ ...signature, linkedin: e.target.value })}
                  placeholder="LinkedIn URL"
                  className="text-xs"
                />
              </div>
              <div className="space-y-1">
                <Label className="flex items-center gap-1 text-xs">
                  <Twitter className="h-3 w-3" />
                </Label>
                <Input
                  value={signature.twitter}
                  onChange={(e) => setSignature({ ...signature, twitter: e.target.value })}
                  placeholder="Twitter URL"
                  className="text-xs"
                />
              </div>
              <div className="space-y-1">
                <Label className="flex items-center gap-1 text-xs">
                  <Instagram className="h-3 w-3" />
                </Label>
                <Input
                  value={signature.instagram}
                  onChange={(e) => setSignature({ ...signature, instagram: e.target.value })}
                  placeholder="Instagram URL"
                  className="text-xs"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <Label>Preview</Label>
            <div 
              className="p-4 border rounded-lg bg-white min-h-[200px]"
              dangerouslySetInnerHTML={{ __html: generateSignatureHTML() }}
            />
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleSave} className="flex-1">
                Save
              </Button>
              <Button onClick={handleInsert} className="flex-1">
                Insert Signature
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignatureBuilder;
