import React, { useState } from "react";
import { useUserStore } from "@/app/core/application/global-state/store";
import styles from "./Steps.module.scss";
import Image from "next/image";
import { useContextState } from "@/app/core/application/global-state";

interface StepProps {
  onNext: () => void;
}

const StepTwo: React.FC<StepProps> = ({ onNext }) => {
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
          width={150} // Ajusta el ancho
          height={150} // Ajusta el alto
        />

        <h2 className={styles.title}>
          What is your current level of physical activity?
        </h2>
      </div>
      <div className={styles.optionsGrid}>
        <button
          onClick={() => handleSelect("Sedentary")}
          className={`${styles.optionButton} ${
            selectedOption === "Sedentary" ? styles.selected : ""
          }`}
        >
          <span>Sedentary</span>
        </button>
        <button
          onClick={() => handleSelect("Moderate")}
          className={`${styles.optionButton} ${
            selectedOption === "Moderate" ? styles.selected : ""
          }`}
        >
          <span>Moderate</span>
        </button>
        <button
          onClick={() => handleSelect("Active")}
          className={`${styles.optionButton} ${
            selectedOption === "Active" ? styles.selected : ""
          }`}
        >
          <span>Active</span>
        </button>
        <button
          onClick={() => handleSelect("Very active")}
          className={`${styles.optionButton} ${
            selectedOption === "Very active" ? styles.selected : ""
          }`}
        >
          <span>Very active</span>
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

export default StepTwo;
