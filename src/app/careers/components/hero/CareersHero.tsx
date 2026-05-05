import Image from 'next/image';
import Link from 'next/link';

import styles from './CareersHero.module.scss';

export default function CareersHero() {
  return (
    <section className={styles.careers_hero}>
      <h1 className={`${styles.careers_hero__title}`}>
        Join Limitless Technologies
      </h1>
      <p className={`${styles.careers_hero__description} text-style`}>
        Build something extraordinary with us
      </p>
      <div className={styles.careers_hero__image}>
        <Image
          src="/images/careers/hero.png"
          alt="Image"
          width={1440}
          height={455}
          loading={'lazy'}
        />
      </div>
    </section>
  );
}
