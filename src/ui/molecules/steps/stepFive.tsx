"use client";
import React, { useState } from "react";
import { useUserStore } from "@/app/core/application/global-state/store";
import styles from "./Steps.module.scss";
import Image from "next/image";
import { useContextState } from "@/app/core/application/global-state";
import { useRouter } from "next/navigation";

interface StepProps {
  onNext: () => void;
}

const StepFive: React.FC<StepProps> = ({ onNext }) => {
  const { addResponse } = useUserStore();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { contextState, setContextState } = useContextState((state) => state);
  const router = useRouter();

  const handleSelect = (response: string) => {
    setSelectedOption(response);
  };

  const handleContinue = () => {
    if (selectedOption) {
      addResponse(selectedOption);
      setContextState([...contextState, selectedOption]);
      onNext();
      router.push("/context");
      localStorage.setItem("user-context", JSON.stringify(contextState));
    }
  };

  return (
    <div className={styles.stepContainer}>
      <div className={styles.header}>
      <Image
          src="/img/joseui.png"
          alt="Jose Iu Smart"
          className={styles.icon}
          layout="responsive"
          width={150}  // Mantenemos la relación de aspecto
          height={150}
        />

        <h2 className={styles.title}>
          how much time can you dedicate to each session?
        </h2>
      </div>
      <div className={styles.optionsGrid}>
        <button
          onClick={() => handleSelect("15 min")}
          className={`${styles.optionButton} ${
            selectedOption === "15 min" ? styles.selected : ""
          }`}
        >
          <span>15 min</span>
        </button>
        <button
          onClick={() => handleSelect("30 min")}
          className={`${styles.optionButton} ${
            selectedOption === "30 min" ? styles.selected : ""
          }`}
        >
          <span>30 min</span>
        </button>
        <button
          onClick={() => handleSelect("1 hour")}
          className={`${styles.optionButton} ${
            selectedOption === "1 hour" ? styles.selected : ""
          }`}
        >
          <span>1 hour</span>
        </button>
        <button
          onClick={() => handleSelect("2 hours")}
          className={`${styles.optionButton} ${
            selectedOption === "2 hours" ? styles.selected : ""
          }`}
        >
          <span>2 hours</span>
        </button>
      </div>
      <button
        onClick={handleContinue}
        disabled={!selectedOption}
        className={`${styles.continueButton} ${
          !selectedOption ? styles.disabled : ""
        }`}
      >
        Continue
      </button>
    </div>
  );
};

export default StepFive;
