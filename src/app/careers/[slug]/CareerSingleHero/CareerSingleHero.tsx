import Image from 'next/image';

import styles from './CareerSingleHero.module.scss';

type CareerSingleHeroProps = {
  title: string;
};

export default function CareerSingleHero({ title }: CareerSingleHeroProps) {
  return (
    <section className={styles.careers_hero}>
      <h1 className={`${styles.careers_hero__title}`}>{title}</h1>
      <div className={styles.careers_hero__image}>
        <Image
          src="/images/careers/hero-single.png"
          alt="Image"
          width={1440}
          height={455}
          loading={'lazy'}
        />
      </div>
    </section>
  );
}
