import Image from 'next/image';

import styles from './CareersWhyWork.module.scss';

export default function CareersWhyWork() {
  return (
    <section className={styles.careers_why_work}>
      <div className="container">
        <div className={styles.careers_why_work__top}>
          <div>
            <p className={`${styles.careers_why_work__title} h3`}>
              Why Work With Us
            </p>
            <p className={`${styles.careers_why_work__description} text-style`}>
              We&apos;re a growing team working on ambitious projects in
              financial technology. Join us at the ground floor and help shape
              what we&apos;re building.
            </p>
          </div>
        </div>

        <div className={styles.careers_why_work__images}>
          <Image
            src="/images/careers/why-works-one.png"
            alt="Image"
            width={545}
            height={545}
            loading={'lazy'}
          />

          <Image
            src="/images/careers/why-works-two.png"
            alt="Image"
            width={545}
            height={545}
            loading={'lazy'}
          />
        </div>
      </div>
    </section>
  );
}
