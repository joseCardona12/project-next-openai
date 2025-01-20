
import styles from './ContextPush.module.scss';
import Image from 'next/image';

const ContextPush: React.FC = () => {


  return (
    <div className={styles.contextpush}>
      <div className={styles.header}>
        <h2 className={styles.title}>wait a moment, we are preparing your routine</h2>
      </div>
      <div className={styles.optionsGrid}>
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

          <a href="/exercises">Continue</a>
        </p>
      </button>
    </div>
  );
};

export default ContextPush;
