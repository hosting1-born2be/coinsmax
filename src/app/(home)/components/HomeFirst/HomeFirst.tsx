import Image from 'next/image';
import Link from 'next/link';

import styles from './HomeFirst.module.scss';

export default function HomeFirst() {
  return (
    <section className={styles.home_first} id="home-be-first-section">
      <div className="container">
        <div className={styles.home_first__inner}>
          <p className={`${styles.home_first__title} h3`}>
            Be the First to Know
          </p>
          <p className={`${styles.home_first__description} text-style`}>
            We know crypto feels frustrating — that’s why we’ve prepared
            resources to make things easier.
          </p>
          <div className={styles.home_first__bottom}>
            <div className={styles.home_first__input}>
              Enter your email address
            </div>
            <Link href="/" className="btn btn-white">
              Join Waitlist
            </Link>
          </div>
          <div className={styles.home_first__image}>
            <Image
              src="/images/careers/see_role.png"
              alt="Image"
              width={1120}
              height={355}
              loading={'lazy'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
