import Image from "next/image";
import styles from "./PreviewSection.module.scss";

export const PreviewSection = () => {
  return (
    <section className={styles.previewSection}>
      <div className={"_container"}>
        <div className={styles.previewSection__wrap}>
          <h2>Preview the App</h2>
        </div>
      </div>
      <Image
        src={"/images/previewLine.png"}
        alt="review-section-bg"
        width={1850}
        height={70}
        className={styles.previewSection__bg}
      />
    </section>
  );
};
