"use client";
import React, { useState } from "react";
import { useUserStore } from "@/app/core/application/global-state/store";
import styles from "./Steps.module.scss";
import Image from "next/image";
import { useContextState } from "@/app/core/application/global-state";

interface StepProps {
  onNext: () => void;
}

const StepThree: React.FC<StepProps> = ({ onNext }) => {
  const { addResponse } = useUserStore();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { contextState, setContextState } = useContextState((state) => state);

  const handleSelect = (response: string) => {
    setSelectedOption(response);
  };

  const handleContinue = () => {
    if (selectedOption) {
      addResponse(selectedOption);
      setContextState([...contextState, selectedOption]);
      onNext();
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

        <h2 className={styles.title}>What is your age range?</h2>
      </div>
      <div className={styles.optionsGrid}>
        <button
          onClick={() => handleSelect("14-18")}
          className={`${styles.optionButton} ${
            selectedOption === "14-18" ? styles.selected : ""
          }`}
        >
          <span>14-18</span>
        </button>
        <button
          onClick={() => handleSelect("19-29")}
          className={`${styles.optionButton} ${
            selectedOption === "19-29" ? styles.selected : ""
          }`}
        >
          <span>19-29</span>
        </button>
        <button
          onClick={() => handleSelect("30-39")}
          className={`${styles.optionButton} ${
            selectedOption === "30-39" ? styles.selected : ""
          }`}
        >
          <span>30-39</span>
        </button>
        <button
          onClick={() => handleSelect("from 40 onwards")}
          className={`${styles.optionButton} ${
            selectedOption === "from 40 onwards" ? styles.selected : ""
          }`}
        >
          <span>from 40 onwards</span>
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

export default StepThree;
