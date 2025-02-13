"use client";
import React from "react";
import { useUserStore } from "../../../app/core/application/global-state/store";
import ProgressBar from "@/ui/molecules/progressBar/ProgressBar";
import StepOne from "@/ui/molecules/steps/stepOne";
import StepTwo from "@/ui/molecules/steps/stepTwo";
import StepThree from "@/ui/molecules/steps/stepThree";
import StepFour from "@/ui/molecules/steps/stepFour";
import StepFive from "@/ui/molecules/steps/stepFive";
import "./dataCollection.styles.scss";

const steps = [StepOne, StepTwo, StepThree, StepFour, StepFive];

const DataCollection: React.FC = () => {
  const { currentStep, setCurrentStep } = useUserStore();
  const StepComponent = steps[currentStep];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="min-h-[78vh] flex flex-col items-center justify-center content">
      <ProgressBar step={currentStep} totalSteps={steps.length} />
      <div className=" content-information">
        <StepComponent onNext={nextStep} />
      </div>
    </div>
  );
};

export default DataCollection;
