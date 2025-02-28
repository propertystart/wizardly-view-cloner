
import { useWizard } from "./WizardContext";
import { Check } from "lucide-react";

export function WizardStepIndicator() {
  const { currentStep, totalSteps, isStepComplete, setCurrentStep } = useWizard();

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        {Array.from({ length: totalSteps }).map((_, i) => {
          const stepNumber = i + 1;
          const isActive = currentStep === stepNumber;
          const isCompleted = isStepComplete(stepNumber);
          const canNavigate = isCompleted || stepNumber <= currentStep;

          return (
            <div key={stepNumber} className="flex flex-col items-center gap-2">
              <button
                onClick={() => canNavigate && setCurrentStep(stepNumber)}
                disabled={!canNavigate}
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  transition-all-200
                  ${isActive ? 'bg-wizard-accent text-white scale-110' : ''} 
                  ${isCompleted && !isActive ? 'bg-green-500 text-white' : ''} 
                  ${!isActive && !isCompleted ? 'bg-wizard-muted text-wizard-muted-foreground' : ''}
                  ${canNavigate ? 'hover:scale-105 cursor-pointer' : 'cursor-not-allowed'}
                `}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{stepNumber}</span>
                )}
              </button>
              <span className={`text-xs hidden md:block ${isActive ? 'font-medium' : 'text-wizard-muted-foreground'}`}>
                {getStepName(stepNumber)}
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Progress line that connects the circles */}
      <div className="absolute top-14 left-0 w-full flex justify-center z-[-1] px-16 md:px-32 hidden lg:block">
        <div className="w-full max-w-xl h-1 bg-wizard-muted relative">
          <div 
            className="absolute top-0 left-0 h-full bg-wizard-accent transition-all duration-300 ease-in-out"
            style={{ width: `${(currentStep - 1) / (totalSteps - 1) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function getStepName(step: number): string {
  switch (step) {
    case 1:
      return "Window Type";
    case 2:
      return "Frame Color";
    case 3:
      return "Glass Type";
    case 4:
      return "Dimensions";
    case 5:
      return "Installation";
    default:
      return `Step ${step}`;
  }
}
