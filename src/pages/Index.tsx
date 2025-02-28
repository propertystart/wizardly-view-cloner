
import { WizardLayout } from "@/components/layout/WizardLayout";
import { WizardProvider } from "@/components/wizard/WizardContext";
import { WizardStepIndicator } from "@/components/wizard/WizardStepIndicator";
import { WizardContent } from "@/components/wizard/WizardContent";
import { WizardNavigation } from "@/components/wizard/WizardNavigation";

const Index = () => {
  return (
    <WizardLayout>
      <div className="max-w-5xl mx-auto w-full px-4 py-8 flex-1 flex flex-col">
        <WizardProvider>
          <div className="relative pb-6">
            <WizardStepIndicator />
          </div>
          <WizardContent />
          <div className="mt-auto pt-8">
            <WizardNavigation />
          </div>
        </WizardProvider>
      </div>
    </WizardLayout>
  );
};

export default Index;
