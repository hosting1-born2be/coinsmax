import Image from 'next/image';
import Link from 'next/link';

import styles from './Meet.module.scss';

export default function Meet() {
  return (
    <section className={styles.home_meet}>
      <div className="container">
        <div className={styles.home_meet__top}>
          <h2>Meet Coinsmax!</h2>
          <p className={`${styles.home_meet__description} text-style`}>
            Coinsmax functions as a cryptocurrency exchange, built on clear and
            regulated processes. Our platform enables the conversion between
            digital assets and fiat currencies in a transparent environment
            supported by robust technology.
          </p>
          <div className="text-center">
            <Link href="/careers" className="btn btn-white">
              View Careers
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.home_meet__images}>
        <Image
          src="/images/home/meet-one.png"
          alt="Coinsmax"
          width={310}
          height={350}
        />

        <Image
          src="/images/home/meet-two.png"
          alt="Coinsmax"
          width={700}
          height={500}
        />

        <Image
          src="/images/home/meet-three.png"
          alt="Coinsmax"
          width={310}
          height={350}
        />
      </div>
    </section>
  );
}
