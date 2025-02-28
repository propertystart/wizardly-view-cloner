
import { useWizard } from "../WizardContext";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";

export function WizardStep4() {
  const { width, setWidth, height, setHeight } = useWizard();
  
  const [widthInput, setWidthInput] = useState(width?.toString() || "");
  const [heightInput, setHeightInput] = useState(height?.toString() || "");
  
  // Update width and height in context when inputs change
  useEffect(() => {
    const numWidth = Number(widthInput);
    if (!isNaN(numWidth) && numWidth > 0) {
      setWidth(numWidth);
    } else {
      setWidth(null);
    }
  }, [widthInput, setWidth]);
  
  useEffect(() => {
    const numHeight = Number(heightInput);
    if (!isNaN(numHeight) && numHeight > 0) {
      setHeight(numHeight);
    } else {
      setHeight(null);
    }
  }, [heightInput, setHeight]);

  // Update slider value when input changes
  const handleWidthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidthInput(e.target.value);
  };
  
  const handleHeightInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeightInput(e.target.value);
  };
  
  // Update input value when slider changes
  const handleWidthSliderChange = (value: number[]) => {
    setWidthInput(value[0].toString());
  };
  
  const handleHeightSliderChange = (value: number[]) => {
    setHeightInput(value[0].toString());
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-medium">Window Dimensions</h2>
        <p className="text-wizard-muted-foreground">
          Enter the width and height of your window in inches
        </p>
      </div>

      <Card className="border-wizard-border">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Width input */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="width" className="text-base">Width (inches)</Label>
                <div className="text-right font-medium">
                  {widthInput ? `${widthInput}"` : "-"}
                </div>
              </div>
              
              <Slider
                id="width-slider"
                min={12}
                max={120}
                step={1}
                value={[Number(widthInput) || 12]}
                onValueChange={handleWidthSliderChange}
                className="py-4"
              />
              
              <div className="pt-2">
                <Input
                  id="width"
                  type="number"
                  min="1"
                  placeholder="Enter width"
                  value={widthInput}
                  onChange={handleWidthInputChange}
                  className="w-full"
                />
              </div>
            </div>
            
            {/* Height input */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="height" className="text-base">Height (inches)</Label>
                <div className="text-right font-medium">
                  {heightInput ? `${heightInput}"` : "-"}
                </div>
              </div>
              
              <Slider
                id="height-slider"
                min={12}
                max={120}
                step={1}
                value={[Number(heightInput) || 12]}
                onValueChange={handleHeightSliderChange}
                className="py-4"
              />
              
              <div className="pt-2">
                <Input
                  id="height"
                  type="number"
                  min="1"
                  placeholder="Enter height"
                  value={heightInput}
                  onChange={handleHeightInputChange}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-wizard-muted rounded-lg">
            <h3 className="font-medium mb-2">Window Preview</h3>
            <div className="flex items-center justify-center p-4">
              {width && height ? (
                <div 
                  className="border-4 border-black bg-blue-50 transition-all duration-300"
                  style={{ 
                    width: `${Math.min(width, 300) / 2}px`, 
                    height: `${Math.min(height, 300) / 2}px`,
                    backgroundColor: getGlassBackground()
                  }}
                ></div>
              ) : (
                <div className="text-wizard-muted-foreground text-sm">
                  Enter dimensions to see preview
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-wizard-muted text-wizard-muted-foreground p-4 rounded-lg text-sm mt-4">
        <p>
          <strong>Note:</strong> These measurements should be for the entire window opening, not just the glass.
          For replacement windows, measure the existing window frame.
        </p>
      </div>
    </div>
  );
}

// Helper function to get a background based on selected glass type
function getGlassBackground() {
  const { glassType } = useWizard();
  
  switch (glassType) {
    case 'tinted':
      return 'rgba(70, 130, 180, 0.3)';
    case 'low-e':
      return 'rgba(152, 251, 152, 0.2)';
    case 'obscured':
      return 'rgba(255, 255, 255, 0.7)';
    default:
      return 'rgba(240, 248, 255, 0.4)';
  }
}
