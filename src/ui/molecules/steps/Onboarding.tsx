import Image from 'next/image';  
import styles from '../steps/Steps.module.scss';

const Onboarding: React.FC = () => {
  return (
    <div className={styles.stepContainer}>
      <div className={styles.header}>
       
        <Image
          src="/joseui.png"  
          alt="joseiu"
          className={styles.icon}
          width={100} 
          height={100} 
        />
        <h2 className={styles.title}>Hello! I´m Jose iu</h2>
      </div>
      <div className={styles.optionsGrid}>
     
      </div>
      <button className={styles.continueButton}>
        <p>
          <a href="/collection">Continue</a>
        </p>
      </button>
    </div>
  );
};

export default Onboarding;
