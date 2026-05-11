'use client';

import Image from 'next/image';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__top}>
          <div>
            <div className={styles.footer__logo}>
              <Image src="/logo.svg" alt="Coinsmax" width={128} height={30} />
            </div>
            <p className={styles.footer__subtitle}>Limitless Technologies</p>
          </div>

          <div>
            <p className={styles.footer__item_title}>Office Location</p>
            <p className={styles.footer__item_value}>
              Galvaniho 15/A v Bratislave
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
