
import { useWizard, GlassType } from "../WizardContext";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const glassOptions = [
  {
    id: "standard",
    name: "Standard",
    description: "Clear, single-pane glass - economical but less energy efficient",
    features: ["Economical", "Clear view"],
  },
  {
    id: "low-e",
    name: "Low-E Glass",
    description: "Energy-efficient coating that reduces heat transfer",
    features: ["Energy efficient", "UV protection", "Reduced heat transfer"],
  },
  {
    id: "tinted",
    name: "Tinted Glass",
    description: "Reduces glare and solar heat gain with a slight color",
    features: ["Reduces glare", "Solar heat reduction", "Privacy"],
  },
  {
    id: "tempered",
    name: "Tempered Glass",
    description: "Safety glass that breaks into small pieces instead of shards",
    features: ["Safety rated", "Stronger than standard glass", "Building code compliant"],
  },
  {
    id: "obscured",
    name: "Obscured Glass",
    description: "Textured or frosted for privacy while still allowing light",
    features: ["Privacy", "Light transmitting", "Decorative options"],
  },
];

export function WizardStep3() {
  const { glassType, setGlassType } = useWizard();

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-medium">Select Glass Type</h2>
        <p className="text-wizard-muted-foreground">
          Choose the glass type that meets your needs for energy efficiency, privacy, and safety
        </p>
      </div>

      <div className="space-y-4 mt-6">
        {glassOptions.map((option) => (
          <Card
            key={option.id}
            className={`overflow-hidden cursor-pointer transition-all-200 hover:shadow-md p-4 ${
              glassType === option.id ? "border-wizard-accent ring-1 ring-wizard-accent" : "border-wizard-border"
            }`}
            onClick={() => setGlassType(option.id as GlassType)}
          >
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{option.name}</h3>
                  {glassType === option.id && (
                    <div className="bg-wizard-accent text-white rounded-full p-1">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-wizard-muted-foreground mt-1">{option.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {option.features.map((feature, index) => (
                    <span 
                      key={index} 
                      className="text-xs py-1 px-2 bg-wizard-muted text-wizard-muted-foreground rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
