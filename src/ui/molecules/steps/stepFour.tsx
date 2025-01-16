import React, { useState } from 'react';
import { useUserStore } from '../../../state/store';
import styles from './StepOne.module.scss';

interface StepProps {
  onNext: () => void;
}

const StepFour: React.FC<StepProps> = ({ onNext }) => {
  const { addResponse } = useUserStore();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (response: string) => {
    setSelectedOption(response);
  };

  const handleContinue = () => {
    if (selectedOption) {
      addResponse(selectedOption);
      onNext();
    }
  };

  return (
    <div className={styles.stepContainer}>
      <div className={styles.header}>
        <img
          src="/path/to/icon.svg"
          alt="Training Icon"
          className={styles.icon}
        />
    

        <h2 className={styles.title}>How many days a week do you want to train ?</h2>
      </div>
      <div className={styles.optionsGrid}>
        <button
          onClick={() => handleSelect('Lose Weight')}
          className={`${styles.optionButton} ${
            selectedOption === 'Lose Weight' ? styles.selected : ''
          }`}
        >
          <span>1-2</span>
        </button>
        <button
          onClick={() => handleSelect('Gain Muscle')}
          className={`${styles.optionButton} ${
            selectedOption === 'Gain Muscle' ? styles.selected : ''
          }`}
        >
          <span>3-4</span>
        </button>
        <button
          onClick={() => handleSelect('Improve Endurance')}
          className={`${styles.optionButton} ${
            selectedOption === 'Improve Endurance' ? styles.selected : ''
          }`}
        >
          <span>5-6</span>
        </button>
        <button
          onClick={() => handleSelect('Flexibility')}
          className={`${styles.optionButton} ${
            selectedOption === 'Flexibility' ? styles.selected : ''
          }`}
        >
          <span>the whole week</span>
        </button>
      </div>
      <button
        onClick={handleContinue}
        disabled={!selectedOption}
        className={`${styles.continueButton} ${
          !selectedOption ? styles.disabled : ''
        }`}
      >
        Continue
      </button>
    </div>
  );
};

export default StepFour;
