
import { ReactNode } from "react";
import { Logo } from "../Logo";

interface WizardLayoutProps {
  children: ReactNode;
}

export function WizardLayout({ children }: WizardLayoutProps) {
  return (
    <div className="min-h-screen bg-wizard-background text-wizard-foreground flex flex-col">
      <header className="border-b border-wizard-border px-6 py-4">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium transition-all-200 hover:text-wizard-accent">
              Home
            </a>
            <a href="#" className="text-sm font-medium transition-all-200 hover:text-wizard-accent">
              Documentation
            </a>
            <a href="#" className="text-sm font-medium transition-all-200 hover:text-wizard-accent">
              Support
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <footer className="border-t border-wizard-border py-6 px-6">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-wizard-muted-foreground">
            © {new Date().getFullYear()} ViewWizard. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-wizard-muted-foreground transition-all-200 hover:text-wizard-accent">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-wizard-muted-foreground transition-all-200 hover:text-wizard-accent">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
