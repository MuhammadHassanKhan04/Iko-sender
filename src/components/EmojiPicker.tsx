import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Smile } from "lucide-react";

const EMOJI_CATEGORIES = {
  "Smileys": ["😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "😚", "😋", "😛", "🤔"],
  "Gestures": ["👋", "🤚", "✋", "🖖", "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "👇", "☝️", "👍", "👎", "✊"],
  "Business": ["💼", "📧", "📩", "📬", "📮", "📝", "📊", "📈", "📉", "📋", "📌", "📎", "✂️", "🖊️", "✏️", "📁", "📂", "🗂️", "📅", "📆"],
  "Celebration": ["🎉", "🎊", "🎁", "🎈", "🏆", "🥇", "🥈", "🥉", "🏅", "⭐", "🌟", "✨", "💫", "🔥", "💯", "❤️", "🧡", "💛", "💚", "💙"],
  "Symbols": ["✅", "❌", "⭕", "❗", "❓", "💡", "🔔", "📢", "🎯", "💎", "🔒", "🔓", "🔑", "⚡", "💪", "🚀", "⏰", "📍", "🔗", "➡️"],
};

interface EmojiPickerProps {
  onSelect: (emoji: string) => void;
}

const EmojiPicker = ({ onSelect }: EmojiPickerProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("Smileys");
  const [open, setOpen] = useState(false);

  const handleSelect = (emoji: string) => {
    onSelect(emoji);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" type="button">
          <Smile className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-2" align="start">
        <div className="flex gap-1 mb-2 flex-wrap">
          {Object.keys(EMOJI_CATEGORIES).map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="text-xs px-2 py-1"
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-10 gap-1 max-h-40 overflow-y-auto">
          {EMOJI_CATEGORIES[activeCategory as keyof typeof EMOJI_CATEGORIES].map((emoji) => (
            <button
              key={emoji}
              onClick={() => handleSelect(emoji)}
              className="p-1.5 hover:bg-muted rounded text-lg transition-colors"
            >
              {emoji}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default EmojiPicker;
