import Image from 'next/image';

import styles from './CareersWhatOffer.module.scss';

const items = [
  {
    id: 1,
    image: 'what-offer-one.svg',
    title: 'Central Location',
    description: 'Modern office in Bratislava city center, Slovakia.',
  },
  {
    id: 2,
    image: 'what-offer-two.svg',
    title: 'Hybrid Work',
    description:
      'Flexible hybrid working model—balance office collaboration with remote flexibility.',
  },
  {
    id: 3,
    image: 'what-offer-three.svg',
    title: 'Learning Budget',
    description:
      'Annual budget for courses, conferences, and professional development.',
  },
  {
    id: 4,
    image: 'what-offer-four.svg',
    title: 'Modern Tech Stack',
    description: 'Work with cutting-edge technologies and tools.',
  },
  {
    id: 5,
    image: 'what-offer-five.svg',
    title: 'Great Office',
    description:
      'Comfortable, well-equipped workspace designed for productivity and collaboration.',
  },
  {
    id: 6,
    image: 'what-offer-six.svg',
    title: 'Dynamic Team',
    description: 'Join a young, energetic team building something new.',
  },
  {
    id: 7,
    image: 'what-offer-six.svg',
    title: 'Competitive Package',
    description: 'Competitive salary and benefits.',
  },
  {
    id: 8,
    image: 'what-offer-eight.svg',
    title: 'Early Stage Opportunity',
    description: 'Join at the beginning and grow with the company.',
  },
];

export default function CareersWhatOffer() {
  return (
    <section className={styles.careers_what_offer}>
      <div className="container">
        <h2 className={`${styles.careers_what_offer__title}`}>What We Offer</h2>

        <ul className={styles.careers_what_offer__list}>
          {items.map(item => (
            <li key={item.id} className={styles.careers_what_offer__item}>
              <div className={styles.careers_what_offer__item_image}>
                <Image
                  src={`/images/careers/${item.image}`}
                  alt="Image"
                  width={81}
                  height={81}
                  loading={'lazy'}
                />
              </div>
              <p className="h4">{item.title}</p>
              <p
                className={`${styles.careers_what_offer__item_description} text-style`}
              >
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
