
import { useWizard, ViewType } from "../WizardContext";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const viewTypeOptions = [
  {
    id: "bay",
    name: "Bay Window",
    description: "Extends outward to create a bay in a room, providing more space and light.",
    imageSrc: "/placeholder.svg",
  },
  {
    id: "picture",
    name: "Picture Window",
    description: "Fixed window that doesn't open, providing unobstructed views.",
    imageSrc: "/placeholder.svg",
  },
  {
    id: "casement",
    name: "Casement Window",
    description: "Hinged on one side and opens outward like a door.",
    imageSrc: "/placeholder.svg",
  },
  {
    id: "awning",
    name: "Awning Window",
    description: "Hinged at the top and opens outward, providing ventilation even during light rain.",
    imageSrc: "/placeholder.svg",
  },
  {
    id: "sliding",
    name: "Sliding Window",
    description: "Slides horizontally on tracks, ideal for spaces where outward opening windows are impractical.",
    imageSrc: "/placeholder.svg",
  },
];

export function WizardStep1() {
  const { viewType, setViewType } = useWizard();

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-medium">Select Window Type</h2>
        <p className="text-wizard-muted-foreground">
          Choose the type of window you want to install
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {viewTypeOptions.map((option) => (
          <Card
            key={option.id}
            className={`overflow-hidden cursor-pointer transition-all-200 group hover:shadow-md ${
              viewType === option.id ? "border-wizard-accent ring-1 ring-wizard-accent" : "border-wizard-border"
            }`}
            onClick={() => setViewType(option.id as ViewType)}
          >
            <div className="relative aspect-video bg-wizard-muted">
              <img 
                src={option.imageSrc} 
                alt={option.name}
                className="w-full h-full object-cover transition-transform-200 group-hover:scale-105"
              />
              {viewType === option.id && (
                <div className="absolute top-2 right-2 bg-wizard-accent text-white rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
              )}
            </div>
            <CardContent className="pt-4">
              <h3 className="font-medium">{option.name}</h3>
              <p className="text-sm text-wizard-muted-foreground mt-1">{option.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
