import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Variable } from "lucide-react";

interface TemplateVariableInputProps {
  variables: string[];
  values: Record<string, string>;
  onChange: (values: Record<string, string>) => void;
}

const TemplateVariableInput = ({ variables, values, onChange }: TemplateVariableInputProps) => {
  if (variables.length === 0) return null;

  const handleChange = (variable: string, value: string) => {
    onChange({ ...values, [variable]: value });
  };

  const formatLabel = (variable: string) => {
    return variable
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Card className="border-2 border-dashed border-primary/30 bg-primary/5">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <Variable className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg">Template Variables</CardTitle>
        </div>
        <p className="text-sm text-muted-foreground">
          Fill in custom fields for your email template
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {variables.map((variable) => (
            <div key={variable} className="space-y-2">
              <Label htmlFor={variable} className="text-sm font-medium">
                {formatLabel(variable)}
              </Label>
              <Input
                id={variable}
                placeholder={`Enter ${formatLabel(variable).toLowerCase()}`}
                value={values[variable] || ""}
                onChange={(e) => handleChange(variable, e.target.value)}
                className="h-10 border-2 hover:border-primary transition-colors"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TemplateVariableInput;
