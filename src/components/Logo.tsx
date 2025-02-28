
import { MouseEventHandler } from "react";

interface LogoProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export function Logo({ className = "", onClick }: LogoProps) {
  return (
    <div 
      className={`flex items-center gap-2 ${className}`}
      onClick={onClick}
    >
      <div className="w-8 h-8 bg-wizard-accent rounded-lg flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"></path>
          <path d="M22 21H7"></path>
          <path d="m5 11 9 9"></path>
        </svg>
      </div>
      <span className="font-medium text-lg">ViewWizard</span>
    </div>
  );
}
