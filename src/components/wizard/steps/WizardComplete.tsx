
import { useWizard, ViewType, FrameColor, GlassType } from "../WizardContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Send } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";

// Mapping of IDs to display names
const viewTypeNames: Record<ViewType, string> = {
  bay: "Bay Window",
  picture: "Picture Window",
  casement: "Casement Window",
  awning: "Awning Window",
  sliding: "Sliding Window",
};

const frameColorNames: Record<FrameColor, string> = {
  white: "White",
  black: "Black",
  bronze: "Bronze",
  almond: "Almond",
  silver: "Silver",
};

const glassTypeNames: Record<GlassType, string> = {
  standard: "Standard Glass",
  "low-e": "Low-E Glass",
  tinted: "Tinted Glass",
  tempered: "Tempered Glass",
  obscured: "Obscured Glass",
};

export function WizardComplete() {
  const { 
    viewType, 
    frameColor, 
    glassType, 
    width, 
    height,
    installationDate,
    setCurrentStep
  } = useWizard();
  
  const { toast } = useToast();
  
  const handleStartOver = () => {
    setCurrentStep(1);
  };
  
  const handleDownloadQuote = () => {
    toast({
      title: "Quote downloaded",
      description: "Your quote has been downloaded as a PDF.",
    });
  };
  
  const handleEmailQuote = () => {
    toast({
      title: "Quote sent by email",
      description: "We've sent your quote to your email address.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
          <CheckCircle className="h-7 w-7 text-green-600" />
        </div>
        <h2 className="text-2xl font-medium">Your Window Order is Complete!</h2>
        <p className="text-wizard-muted-foreground max-w-md mx-auto">
          Thank you for using our window replacement wizard. Here's a summary of your window specifications.
        </p>
      </div>

      <Card className="border-wizard-border p-6">
        <h3 className="text-lg font-medium mb-4">Order Summary</h3>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-wizard-muted rounded-md">
              <div className="text-sm text-wizard-muted-foreground">Window Type</div>
              <div className="font-medium">{viewType ? viewTypeNames[viewType] : 'Not selected'}</div>
            </div>
            
            <div className="p-3 bg-wizard-muted rounded-md">
              <div className="text-sm text-wizard-muted-foreground">Frame Color</div>
              <div className="font-medium">{frameColor ? frameColorNames[frameColor] : 'Not selected'}</div>
            </div>
            
            <div className="p-3 bg-wizard-muted rounded-md">
              <div className="text-sm text-wizard-muted-foreground">Glass Type</div>
              <div className="font-medium">{glassType ? glassTypeNames[glassType] : 'Not selected'}</div>
            </div>
            
            <div className="p-3 bg-wizard-muted rounded-md">
              <div className="text-sm text-wizard-muted-foreground">Dimensions</div>
              <div className="font-medium">
                {width && height ? `${width}" × ${height}"` : 'Not specified'}
              </div>
            </div>
          </div>
          
          <div className="p-3 bg-wizard-muted rounded-md">
            <div className="text-sm text-wizard-muted-foreground">Installation Date</div>
            <div className="font-medium">
              {installationDate 
                ? format(installationDate, "EEEE, MMMM d, yyyy") 
                : 'Not scheduled'}
            </div>
          </div>
          
          <div className="mt-6 p-4 border border-wizard-border rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-medium">Estimated Price</div>
                <div className="text-sm text-wizard-muted-foreground">
                  Based on your selections
                </div>
              </div>
              <div className="text-2xl font-bold">$849.99</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button onClick={handleEmailQuote} className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            <span>Email Quote</span>
          </Button>
          
          <Button
            variant="outline"
            onClick={handleDownloadQuote}
            className="border-wizard-border flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            <span>Download Quote</span>
          </Button>
          
          <Button
            variant="ghost"
            onClick={handleStartOver}
            className="text-wizard-muted-foreground"
          >
            Start Over
          </Button>
        </div>
      </Card>
      
      <div className="text-center text-sm text-wizard-muted-foreground pt-4">
        <p>
          A confirmation email has been sent with your order details. 
          Our team will contact you within 24 hours to confirm your installation.
        </p>
      </div>
    </div>
  );
}
