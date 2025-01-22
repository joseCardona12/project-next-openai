
import styles from './Onboarding.module.scss';
import Image from 'next/image';



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
