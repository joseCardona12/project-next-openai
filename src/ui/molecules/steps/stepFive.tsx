import React, { useState } from 'react';
import { useUserStore } from '../../../state/store';
import styles from './StepOne.module.scss';

interface StepProps {
  onNext: () => void;
}

const StepFive: React.FC<StepProps> = ({ onNext }) => {
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
    

        <h2 className={styles.title}>how much time can you dedicate to each session?</h2>
      </div>
      <div className={styles.optionsGrid}>
        <button
          onClick={() => handleSelect('Lose Weight')}
          className={`${styles.optionButton} ${
            selectedOption === 'Lose Weight' ? styles.selected : ''
          }`}
        >
          <span>15 min</span>
        </button>
        <button
          onClick={() => handleSelect('Gain Muscle')}
          className={`${styles.optionButton} ${
            selectedOption === 'Gain Muscle' ? styles.selected : ''
          }`}
        >
          <span>30 min</span>
        </button>
        <button
          onClick={() => handleSelect('Improve Endurance')}
          className={`${styles.optionButton} ${
            selectedOption === 'Improve Endurance' ? styles.selected : ''
          }`}
        >
          <span>1 hour</span>
        </button>
        <button
          onClick={() => handleSelect('Flexibility')}
          className={`${styles.optionButton} ${
            selectedOption === 'Flexibility' ? styles.selected : ''
          }`}
        >
          <span>2 hours</span>
        </button>
      </div>
      <button
        onClick={handleContinue}
        disabled={!selectedOption}
        className={`${styles.continueButton} ${
          !selectedOption ? styles.disabled : ''
        }`}
      >
        <a href="/context">Continue</a>
      </button>
    </div>
  );
};

export default StepFive;
