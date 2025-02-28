
import { Button } from "@/components/ui/button";
import { useWizard } from "./WizardContext";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export function WizardNavigation() {
  const { 
    currentStep, 
    goToNextStep, 
    goToPrevStep, 
    isStepComplete,
    isLastStep,
  } = useWizard();

  const canContinue = isStepComplete(currentStep);

  return (
    <div className="flex justify-between pt-8 mt-auto">
      {currentStep > 1 ? (
        <Button
          variant="outline"
          onClick={goToPrevStep}
          className="flex items-center gap-2 bg-transparent hover:bg-wizard-muted border-wizard-border"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>
      ) : (
        <div></div>
      )}
      
      <Button
        onClick={goToNextStep}
        disabled={!canContinue}
        className={`
          flex items-center gap-2 transition-all-200
          ${!canContinue ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        {isLastStep ? (
          <>
            <span>Complete</span>
            <Check className="w-4 h-4" />
          </>
        ) : (
          <>
            <span>Continue</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </Button>
    </div>
  );
}
