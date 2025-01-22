import styles from './footer.module.scss'; 

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <p className={styles['footer-text']}>
          © 2024 Smart UI. Todos los derechos reservados.
        </p>
        <div className={styles['footer-buttons']}>
          <button className={styles['footer-button']}>
            Términos
          </button>
          <button className={styles['footer-button']}>
            Privacidad
          </button>
        </div>
      </div>
    </footer>
  );
}
