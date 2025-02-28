
import { useWizard } from "../WizardContext";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Info } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function WizardStep5() {
  const { installationDate, setInstallationDate } = useWizard();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  
  // Get dates for the next 60 days
  const today = new Date();
  const twoMonthsFromNow = new Date();
  twoMonthsFromNow.setMonth(today.getMonth() + 2);
  
  // Disable weekends (Saturday and Sunday)
  const disabledDays = [
    { dayOfWeek: [0, 6] }, // Sunday is 0, Saturday is 6
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-medium">Schedule Installation</h2>
        <p className="text-wizard-muted-foreground">
          Select a preferred date for your window installation
        </p>
      </div>

      <Card className="border-wizard-border p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-4">Select a Date</h3>
            
            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal border-wizard-border"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {installationDate ? (
                    format(installationDate, "MMMM d, yyyy")
                  ) : (
                    <span>Select date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={installationDate || undefined}
                  onSelect={(date) => {
                    setInstallationDate(date);
                    setIsCalendarOpen(false);
                  }}
                  disabled={[
                    { before: new Date(today.setDate(today.getDate() + 7)) }, // Minimum 7 days from today
                    { after: twoMonthsFromNow },
                    ...disabledDays,
                  ]}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            
            <div className="flex items-start gap-2 mt-4 text-wizard-muted-foreground text-sm">
              <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <p>
                Installation dates are available weekdays only, at least 7 days 
                from today to allow for manufacturing and delivery.
              </p>
            </div>
          </div>
          
          <div className="flex-1 border-t md:border-t-0 md:border-l border-wizard-border pt-6 md:pt-0 md:pl-6">
            <h3 className="text-lg font-medium mb-4">What To Expect</h3>
            
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="bg-wizard-accent text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <span>Our installation team will arrive between 8am - 10am on your scheduled date.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-wizard-accent text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <span>Installation typically takes 2-4 hours per window depending on complexity.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-wizard-accent text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <span>We'll clean up thoroughly after installation is complete.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-wizard-accent text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                <span>You'll receive a confirmation email with installation details.</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
