'use client';

// import { scrollToSection } from '@/shared/lib/utils/scrollToSection';

import styles from './HomeHero.module.scss';

export default function HomeHero() {
  return (
    <section className={styles.home_hero}>
      <h1>Something New Is Coming</h1>
      <p className={`${styles.home_hero__description} text-style`}>
        We&apos;re building innovative financial technology
      </p>
      {/*<button*/}
      {/*  type={'button'}*/}
      {/*  className="btn btn-white"*/}
      {/*  onClick={() => {*/}
      {/*    scrollToSection('home-be-first-section');*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Join Waitlist*/}
      {/*</button>*/}
    </section>
  );
}
