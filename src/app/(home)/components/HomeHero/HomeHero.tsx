import Link from 'next/link';

import styles from './HomeHero.module.scss';

export default function HomeHero() {
  return (
    <section className={styles.home_hero}>
      <h1>Something New Is Coming</h1>
      <p className={`${styles.home_hero__description} text-style`}>
        We&apos;re building innovative financial technology
      </p>
      <Link href="/" className="btn btn-white">
        Start Now
      </Link>
    </section>
  );
}
