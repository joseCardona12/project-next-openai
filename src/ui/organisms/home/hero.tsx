import styles from './hero.module.scss'; 

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles['hero-container']}>
        <div className={styles['hero-content']}>
          <div className={styles['hero-title']}>
            <h1>Transforma tu cuerpo</h1>
          </div>
          <p className={styles['hero-description']}>
            Alcanza tus objetivos fitness con nuestro programa personalizado.
          </p>
          <div className={styles['hero-button-container']}>
            <button className={styles['hero-button']}>
              Comienza ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
