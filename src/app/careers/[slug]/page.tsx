import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getPositionBySlug, positions } from '../data/positions';
import { CareerApplyButton } from './CareerApplyButton';
import styles from './CareerPosition.module.scss';
import CareerSingleHero from './CareerSingleHero/CareerSingleHero';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return positions.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const position = getPositionBySlug(slug);

  if (!position) {
    return { title: 'Position not found | Coinsmax' };
  }

  return {
    title: `${position.title} | Coinsmax Careers`,
    description: position.description,
  };
}

export default async function CareerPositionPage({ params }: PageProps) {
  const { slug } = await params;
  const position = getPositionBySlug(slug);

  if (!position) {
    notFound();
  }

  return (
    <main>
      <CareerSingleHero title={position.title} />
      <section className={styles.career_position}>
        <div className="container">
          <Link href="/careers" className={styles.career_position__back}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="17"
              viewBox="0 0 9 17"
              fill="none"
            >
              <path
                d="M8.78122 15.2198C8.8509 15.2895 8.90617 15.3722 8.94388 15.4632C8.9816 15.5543 9.00101 15.6519 9.00101 15.7504C9.00101 15.849 8.9816 15.9465 8.94388 16.0376C8.90617 16.1286 8.8509 16.2114 8.78122 16.281C8.71153 16.3507 8.62881 16.406 8.53776 16.4437C8.44672 16.4814 8.34914 16.5008 8.25059 16.5008C8.15204 16.5008 8.05446 16.4814 7.96342 16.4437C7.87237 16.406 7.78965 16.3507 7.71996 16.281L0.219965 8.78104C0.150232 8.71139 0.0949136 8.62867 0.0571704 8.53762C0.0194272 8.44657 0 8.34898 0 8.25042C0 8.15186 0.0194272 8.05426 0.0571704 7.96321C0.0949136 7.87216 0.150232 7.78945 0.219965 7.71979L7.71996 0.219792C7.8607 0.0790615 8.05157 -3.92322e-09 8.25059 0C8.44961 3.92322e-09 8.64048 0.0790615 8.78122 0.219792C8.92195 0.360523 9.00101 0.551394 9.00101 0.750417C9.00101 0.94944 8.92195 1.14031 8.78122 1.28104L1.8109 8.25042L8.78122 15.2198Z"
                fill="white"
              />
            </svg>
            Back
          </Link>

          <article className={styles.career_position__card}>
            <p className="h4">{position.title}</p>
            <p className={styles.career_position__price}>{position.price}</p>
            <p className={`${styles.career_position__address} text-style`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 1.5C7.85953 1.5 4.5 4.52391 4.5 8.25C4.5 14.25 12 22.5 12 22.5C12 22.5 19.5 14.25 19.5 8.25C19.5 4.52391 16.1405 1.5 12 1.5ZM12 12C11.4067 12 10.8266 11.8241 10.3333 11.4944C9.83994 11.1648 9.45542 10.6962 9.22836 10.1481C9.0013 9.59987 8.94189 8.99667 9.05764 8.41473C9.1734 7.83279 9.45912 7.29824 9.87868 6.87868C10.2982 6.45912 10.8328 6.1734 11.4147 6.05764C11.9967 5.94189 12.5999 6.0013 13.1481 6.22836C13.6962 6.45542 14.1648 6.83994 14.4944 7.33329C14.8241 7.82664 15 8.40666 15 9C14.9991 9.79538 14.6828 10.5579 14.1204 11.1204C13.5579 11.6828 12.7954 11.9991 12 12Z"
                  fill="white"
                  fillOpacity="0.6"
                />
              </svg>
              {position.address}
            </p>

            <p className={styles.career_position__description}>
              {position.description}
            </p>

            <div>
              <p className={styles.career_position__list_title}>
                {position.responsibilitiesTitle}
              </p>
              <ul className={styles.career_position__list}>
                {position.responsibilitiesList.map((it, index) => (
                  <li key={index}>
                    <p>{it.value}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className={styles.career_position__list_title}>
                {position.requirementsTitle}
              </p>
              <ul className={styles.career_position__list}>
                {position.requirementsList.map((it, index) => (
                  <li key={index}>
                    <p>{it.value}</p>
                  </li>
                ))}
              </ul>
            </div>

            <CareerApplyButton positionTitle={position.title} />
          </article>
        </div>
      </section>
    </main>
  );
}
