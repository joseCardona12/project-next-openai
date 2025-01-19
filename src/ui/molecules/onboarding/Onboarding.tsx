<<<<<<< HEAD:src/ui/molecules/steps/Onboarding.tsx

import styles from './StepOne.module.scss';
=======
import React, { useState } from 'react';
import { useUserStore } from '../../../app/core/application/global-state/store';
import styles from './Onboarding.module.scss';
import Image from 'next/image';
>>>>>>> a23999e3df32a75de791e0d4d77e7750b21d9661:src/ui/molecules/onboarding/Onboarding.tsx


const Onboarding: React.FC = () => {


  return (
    <div className={styles.onboarding}>
      <div className={styles.header}>
        <h2 className={styles.title}>Hello! I´m Jose iu</h2>
      </div>
      <div className={styles.optionsGrid} >
        <Image
          src="/img/joseui.png"
          alt="Jose Iu Smart"
          className={styles.icon}
          width={400} // Ajusta el ancho
          height={400} // Ajusta el alto
        />
      </div>
      <button
        className={styles.continueButton}
      >
        <p>
          <a href="/collection">Continue</a>
        </p>
      </button>
    </div>
  );
};

export default Onboarding;
