
import { useWizard } from "./WizardContext";
import { WizardStep1 } from "./steps/WizardStep1";
import { WizardStep2 } from "./steps/WizardStep2";
import { WizardStep3 } from "./steps/WizardStep3";
import { WizardStep4 } from "./steps/WizardStep4";
import { WizardStep5 } from "./steps/WizardStep5";
import { WizardComplete } from "./steps/WizardComplete";

export function WizardContent() {
  const { currentStep, totalSteps } = useWizard();

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="pt-8 animate-fade-in">
        {currentStep === 1 && <WizardStep1 />}
        {currentStep === 2 && <WizardStep2 />}
        {currentStep === 3 && <WizardStep3 />}
        {currentStep === 4 && <WizardStep4 />}
        {currentStep === 5 && <WizardStep5 />}
        {currentStep > totalSteps && <WizardComplete />}
      </div>
    </div>
  );
}
