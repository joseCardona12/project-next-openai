import React, { useState } from 'react';
import { useUserStore } from '../../../app/core/application/global-state/store';
import styles from './Steps.module.scss';
import Image from 'next/image';

interface StepProps {
  onNext: () => void;
}

const StepThree: React.FC<StepProps> = ({ onNext }) => {
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
      <Image
          src="/img/joseui.png"
          alt="Jose Iu Smart"
          className={styles.icon}
          width={150} // Ajusta el ancho
          height={150} // Ajusta el alto
        />
    

        <h2 className={styles.title}>What is your age range?</h2>
      </div>
      <div className={styles.optionsGrid}>
        <button
          onClick={() => handleSelect('Lose Weight')}
          className={`${styles.optionButton} ${
            selectedOption === 'Lose Weight' ? styles.selected : ''
          }`}
        >
          <span>14-18</span>
        </button>
        <button
          onClick={() => handleSelect('Gain Muscle')}
          className={`${styles.optionButton} ${
            selectedOption === 'Gain Muscle' ? styles.selected : ''
          }`}
        >
          <span>19-29</span>
        </button>
        <button
          onClick={() => handleSelect('Improve Endurance')}
          className={`${styles.optionButton} ${
            selectedOption === 'Improve Endurance' ? styles.selected : ''
          }`}
        >
          <span>30-39</span>
        </button>
        <button
          onClick={() => handleSelect('Flexibility')}
          className={`${styles.optionButton} ${
            selectedOption === 'Flexibility' ? styles.selected : ''
          }`}
        >
          <span>from 40 onwards</span>
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

export default StepThree;
