import Image from 'next/image';
import Link from 'next/link';

import styles from './CareersSeeRole.module.scss';

export default function CareersSeeRole() {
  return (
    <section className={styles.careers_see_role}>
      <div className="container">
        <div className={styles.careers_see_role__inner}>
          <p className={`${styles.careers_see_role__title} h3`}>
            Don&apos;t See Your Role?
          </p>
          <p className={`${styles.careers_see_role__description} text-style`}>
            We&apos;re always interested in meeting talented people. If you
            don&apos;t see a perfect match, send us your resume and tell us why
            you&apos;d like to join.
          </p>
          <div className="text-center">
            <Link href="/" className="btn btn-white">
              Get in Touch
            </Link>
          </div>
          <div className={styles.careers_see_role__image}>
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
