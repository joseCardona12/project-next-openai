import React from 'react';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step, totalSteps }) => {
  const progress = ((step + 1) / totalSteps) * 100;

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progress}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
