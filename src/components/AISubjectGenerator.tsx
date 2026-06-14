import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Sparkles, Copy, RefreshCw, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SUBJECT_TEMPLATES = {
  promotional: [
    "🔥 Limited Time Offer: {{offer}} - Don't Miss Out!",
    "Exclusive Deal Just for You: {{offer}}",
    "⏰ Last Chance! {{offer}} Ends Soon",
    "Unlock {{percentage}}% Off on {{product}}",
    "🎁 Your Special Gift Inside: {{offer}}",
  ],
  newsletter: [
    "📬 {{company}} Newsletter: {{topic}}",
    "This Week's Highlights from {{company}}",
    "📰 {{topic}} - Your Weekly Update",
    "What's New at {{company}}? Find Out!",
    "💡 {{topic}}: Insights You Can't Miss",
  ],
  welcome: [
    "Welcome to {{company}}! 🎉 Let's Get Started",
    "You're In! Here's What's Next at {{company}}",
    "👋 Welcome Aboard, {{name}}!",
    "Your Journey with {{company}} Begins Now",
    "🚀 Welcome! Here's Everything You Need",
  ],
  followup: [
    "Quick Follow-Up: {{topic}}",
    "Checking In: Did You Have a Chance to Review?",
    "Following Up on Our Conversation",
    "Any Questions About {{topic}}?",
    "Don't Forget: {{action}} is Still Available",
  ],
  urgent: [
    "⚠️ Action Required: {{action}}",
    "🚨 Important Update About {{topic}}",
    "URGENT: {{topic}} Needs Your Attention",
    "Time-Sensitive: {{action}} by {{date}}",
    "⏳ Reminder: {{action}} Due Soon",
  ],
};

interface AISubjectGeneratorProps {
  onSelect: (subject: string) => void;
  emailBody?: string;
}

const AISubjectGenerator = ({ onSelect, emailBody }: AISubjectGeneratorProps) => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<keyof typeof SUBJECT_TEMPLATES>("promotional");
  const [context, setContext] = useState("");
  const [generatedSubjects, setGeneratedSubjects] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateSubjects = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const templates = SUBJECT_TEMPLATES[category];
      const subjects = templates.map(template => {
        let result = template;
        // Replace common placeholders with context or generic values
        const words = context.split(" ");
        result = result.replace("{{offer}}", context || "Amazing Deal");
        result = result.replace("{{product}}", words[0] || "Our Product");
        result = result.replace("{{topic}}", context || "Latest Updates");
        result = result.replace("{{company}}", "Your Company");
        result = result.replace("{{name}}", "Valued Customer");
        result = result.replace("{{percentage}}", String(Math.floor(Math.random() * 30 + 10)));
        result = result.replace("{{action}}", context || "Complete Your Action");
        result = result.replace("{{date}}", new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString());
        return result;
      });
      
      // Shuffle and take 5
      setGeneratedSubjects(subjects.sort(() => Math.random() - 0.5));
      setIsGenerating(false);
    }, 800);
  };

  const handleSelect = (subject: string) => {
    onSelect(subject);
    setOpen(false);
    toast({
      title: "Subject Applied",
      description: "Subject line has been added to your email",
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" type="button" className="text-primary">
          <Sparkles className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-4" align="start">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Sparkles className="h-4 w-4 text-primary" />
            AI Subject Generator
          </div>
          
          <div className="space-y-2">
            <Label className="text-xs">Category</Label>
            <div className="flex flex-wrap gap-1">
              {Object.keys(SUBJECT_TEMPLATES).map((cat) => (
                <Button
                  key={cat}
                  size="sm"
                  variant={category === cat ? "default" : "outline"}
                  onClick={() => setCategory(cat as keyof typeof SUBJECT_TEMPLATES)}
                  className="text-xs capitalize"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="text-xs">Context (optional)</Label>
            <Textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="e.g., Summer Sale, Product Launch, Weekly Tips..."
              rows={2}
              className="text-sm"
            />
          </div>
          
          <Button onClick={generateSubjects} disabled={isGenerating} className="w-full">
            {isGenerating ? (
              <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Generating...</>
            ) : (
              <><RefreshCw className="h-4 w-4 mr-2" /> Generate Subjects</>
            )}
          </Button>
          
          {generatedSubjects.length > 0 && (
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {generatedSubjects.map((subject, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded bg-muted/50 hover:bg-muted cursor-pointer group"
                  onClick={() => handleSelect(subject)}
                >
                  <span className="text-sm flex-1">{subject}</span>
                  <Copy className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AISubjectGenerator;
