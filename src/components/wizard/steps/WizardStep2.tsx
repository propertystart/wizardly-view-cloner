
import { useWizard, FrameColor } from "../WizardContext";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const colorOptions = [
  {
    id: "white",
    name: "White",
    description: "Classic clean look that matches with any home style",
    color: "#ffffff",
    border: true,
  },
  {
    id: "black",
    name: "Black",
    description: "Modern, dramatic appearance for contemporary homes",
    color: "#1a1a1a",
  },
  {
    id: "bronze",
    name: "Bronze",
    description: "Rich, warm tone that complements traditional homes",
    color: "#8c6239",
  },
  {
    id: "almond",
    name: "Almond",
    description: "Subtle cream color for a soft, neutral appearance",
    color: "#f5e7c1",
    border: true,
  },
  {
    id: "silver",
    name: "Silver",
    description: "Sleek metallic finish for a contemporary look",
    color: "#c0c0c0",
    border: true,
  },
];

export function WizardStep2() {
  const { frameColor, setFrameColor } = useWizard();

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-medium">Select Frame Color</h2>
        <p className="text-wizard-muted-foreground">
          Choose a color that complements your home's exterior and interior
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {colorOptions.map((option) => (
          <Card
            key={option.id}
            className={`w-full max-w-[280px] overflow-hidden cursor-pointer transition-all-200 group hover:shadow-md p-4 ${
              frameColor === option.id ? "border-wizard-accent ring-1 ring-wizard-accent" : "border-wizard-border"
            }`}
            onClick={() => setFrameColor(option.id as FrameColor)}
          >
            <div className="flex items-start gap-4">
              <div 
                className={`w-16 h-16 rounded-full flex-shrink-0 ${option.border ? "border border-wizard-border" : ""}`} 
                style={{ backgroundColor: option.color }}
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{option.name}</h3>
                  {frameColor === option.id && (
                    <div className="bg-wizard-accent text-white rounded-full p-1">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-wizard-muted-foreground mt-1">{option.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
