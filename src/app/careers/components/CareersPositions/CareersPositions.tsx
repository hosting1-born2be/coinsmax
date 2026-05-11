import Link from 'next/link';

import { positions } from '../../data/positions';
import styles from './CareersPositions.module.scss';

const PREVIEW_LIST_COUNT = 2;

export default function CareersPositions() {
  return (
    <section className={styles.careers_positions}>
      <div className="container">
        <h2 className={`${styles.careers_positions__title}`}>Open Positions</h2>

        <ul className={styles.careers_positions__list}>
          {positions.map(item => (
            <li key={item.slug} className={styles.careers_positions__item}>
              <p className={`${styles.careers_positions__item_title} h4`}>
                {item.title}
              </p>
              <p className={styles.careers_positions__item_price}>
                {item.price}
              </p>
              <p
                className={`${styles.careers_positions__item_address} text-style`}
              >
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

                {item.address}
              </p>
              <p
                className={`${styles.careers_positions__item_description} text-style`}
              >
                {item.description}
              </p>

              <div className={styles.careers_positions__item_list_wrapper}>
                <div>
                  <p
                    className={
                      styles.careers_positions__item_responsibilities_list_title
                    }
                  >
                    {item.responsibilitiesTitle}
                  </p>
                  <ul
                    className={
                      styles.careers_positions__item_responsibilities_list
                    }
                  >
                    {item.responsibilitiesList
                      .slice(0, PREVIEW_LIST_COUNT)
                      .map((responsibilitiesItem, index, arr) => {
                        const isLastVisible = index === arr.length - 1;
                        const hasMore =
                          item.responsibilitiesList.length > PREVIEW_LIST_COUNT;
                        return (
                          <li key={index}>
                            <p>
                              {responsibilitiesItem.value}
                              {isLastVisible && hasMore ? ' ...' : ''}
                            </p>
                          </li>
                        );
                      })}
                  </ul>
                </div>

                <div>
                  <p
                    className={
                      styles.careers_positions__item_responsibilities_list_title
                    }
                  >
                    {item.requirementsTitle}
                  </p>
                  <ul
                    className={
                      styles.careers_positions__item_responsibilities_list
                    }
                  >
                    {item.requirementsList
                      .slice(0, PREVIEW_LIST_COUNT)
                      .map((requirementsItem, index, arr) => {
                        const isLastVisible = index === arr.length - 1;
                        const hasMore =
                          item.requirementsList.length > PREVIEW_LIST_COUNT;
                        return (
                          <li key={index}>
                            <p>
                              {requirementsItem.value}
                              {isLastVisible && hasMore ? ' ...' : ''}
                            </p>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>

              <Link
                href={`/careers/${item.slug}`}
                className={styles.careers_positions__item_btn}
              >
                See More
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
