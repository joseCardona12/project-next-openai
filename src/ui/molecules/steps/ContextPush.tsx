import styles from './StepOne.module.scss';


const ContextPush: React.FC = () => {


  return (
    <div className={styles.stepContainer}>
      <div className={styles.header}>
        <img
          src="../../../public/joseui.png"
          alt="joseiu"
          className={styles.icon}
        />
        <h2 className={styles.title}>wait a moment, we are preparing your routine</h2>
      </div>
      <div className={styles.optionsGrid}>


      </div>
      <button
        className={styles.continueButton}
      >
        <p>

          <a href="/exercises">Continue</a>
        </p>
      </button>
    </div>
  );
};

export default ContextPush;
