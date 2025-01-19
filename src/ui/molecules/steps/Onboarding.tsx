import styles from './StepOne.module.scss';


const Onboarding: React.FC = () => {


  return (
    <div className={styles.stepContainer}>
      <div className={styles.header}>
        <img
          src="../../../public/joseui.png"
          alt="joseiu"
          className={styles.icon}
        />
        <h2 className={styles.title}>Hello! I´m Jose iu</h2>
      </div>
      <div className={styles.optionsGrid}>
       
    
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
