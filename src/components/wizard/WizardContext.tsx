
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export type ViewType = "bay" | "picture" | "casement" | "awning" | "sliding";
export type FrameColor = "white" | "black" | "bronze" | "almond" | "silver";
export type GlassType = "standard" | "low-e" | "tinted" | "tempered" | "obscured";

interface WizardContextType {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  viewType: ViewType | null;
  setViewType: Dispatch<SetStateAction<ViewType | null>>;
  frameColor: FrameColor | null;
  setFrameColor: Dispatch<SetStateAction<FrameColor | null>>;
  glassType: GlassType | null;
  setGlassType: Dispatch<SetStateAction<GlassType | null>>;
  width: number | null;
  setWidth: Dispatch<SetStateAction<number | null>>;
  height: number | null;
  setHeight: Dispatch<SetStateAction<number | null>>;
  installationDate: Date | null;
  setInstallationDate: Dispatch<SetStateAction<Date | null>>;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  isStepComplete: (step: number) => boolean;
  isLastStep: boolean;
  totalSteps: number;
}

const WizardContext = createContext<WizardContextType | undefined>(undefined);

export const useWizard = () => {
  const context = useContext(WizardContext);
  if (!context) {
    throw new Error("useWizard must be used within a WizardProvider");
  }
  return context;
};

export function WizardProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [viewType, setViewType] = useState<ViewType | null>(null);
  const [frameColor, setFrameColor] = useState<FrameColor | null>(null);
  const [glassType, setGlassType] = useState<GlassType | null>(null);
  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [installationDate, setInstallationDate] = useState<Date | null>(null);
  
  const totalSteps = 5;
  const isLastStep = currentStep === totalSteps;

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const isStepComplete = (step: number) => {
    switch (step) {
      case 1:
        return Boolean(viewType);
      case 2:
        return Boolean(frameColor);
      case 3:
        return Boolean(glassType);
      case 4:
        return Boolean(width && height);
      case 5:
        return Boolean(installationDate);
      default:
        return false;
    }
  };

  return (
    <WizardContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        viewType,
        setViewType,
        frameColor,
        setFrameColor,
        glassType,
        setGlassType,
        width,
        setWidth,
        height,
        setHeight,
        installationDate,
        setInstallationDate,
        goToNextStep,
        goToPrevStep,
        isStepComplete,
        isLastStep,
        totalSteps,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
}
