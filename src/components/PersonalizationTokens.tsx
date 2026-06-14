import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { AtSign, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PERSONALIZATION_TOKENS = [
  { token: "{{first_name}}", label: "First Name", description: "Recipient's first name" },
  { token: "{{last_name}}", label: "Last Name", description: "Recipient's last name" },
  { token: "{{full_name}}", label: "Full Name", description: "Recipient's full name" },
  { token: "{{email}}", label: "Email", description: "Recipient's email address" },
  { token: "{{company}}", label: "Company", description: "Recipient's company name" },
  { token: "{{date}}", label: "Current Date", description: "Today's date" },
  { token: "{{day}}", label: "Day of Week", description: "Current day name" },
  { token: "{{month}}", label: "Month", description: "Current month name" },
  { token: "{{year}}", label: "Year", description: "Current year" },
  { token: "{{unsubscribe_link}}", label: "Unsubscribe", description: "Unsubscribe link placeholder" },
  { token: "{{view_online}}", label: "View Online", description: "View in browser link" },
  { token: "{{custom_1}}", label: "Custom 1", description: "Custom field 1" },
  { token: "{{custom_2}}", label: "Custom 2", description: "Custom field 2" },
];

interface PersonalizationTokensProps {
  onInsert: (token: string) => void;
}

const PersonalizationTokens = ({ onInsert }: PersonalizationTokensProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleInsert = (token: string) => {
    onInsert(token);
    toast({
      title: "Token Inserted",
      description: `${token} has been added`,
    });
  };

  const handleCopy = (token: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(token);
    toast({
      title: "Copied!",
      description: `${token} copied to clipboard`,
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" type="button">
          <AtSign className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-2" align="start">
        <div className="space-y-2">
          <div className="px-2 py-1">
            <p className="font-medium text-sm">Personalization Tokens</p>
            <p className="text-xs text-muted-foreground">Click to insert, or copy to clipboard</p>
          </div>
          <div className="max-h-64 overflow-y-auto space-y-1">
            {PERSONALIZATION_TOKENS.map((item) => (
              <div
                key={item.token}
                className="flex items-center justify-between p-2 rounded hover:bg-muted cursor-pointer group"
                onClick={() => handleInsert(item.token)}
              >
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.label}</p>
                  <code className="text-xs text-primary">{item.token}</code>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => handleCopy(item.token, e)}
                >
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PersonalizationTokens;
