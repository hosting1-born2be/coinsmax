"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/shared/lib/helpers/animations";
import styles from "./FeatureSection.module.scss";
import Image from "next/image";
export const FeatureSection = () => {
  return (
    <section className={styles.featureSection}>
      <div className={styles.featureSection__row}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className={styles.featureSection__col1}
        >
          <Image
            src="/images/FeatureImage.png"
            alt="feature"
            width={948}
            height={922}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className={styles.featureSection__col2}
        >
          <h2>
            Features <br />
            Snapshot
          </h2>
          <div className={styles.featuresList}>
            <div>
              <Image
                src="/images/feature1.svg"
                alt="feature"
                width={60}
                height={60}
              />
              <p>
                Multi-Currency Support: Pay invoices in EUR, USD, GBP, and more
              </p>
            </div>
            <div>
              <Image
                src="/images/feature2.svg"
                alt="feature"
                width={60}
                height={60}
              />
              <p>API Wallet Integration: 1-click crypto authorization</p>
            </div>
            <div>
              <Image
                src="/images/feature3.svg"
                alt="feature"
                width={60}
                height={60}
              />
              <p>Pre-Funded Fiat Accounts: Instant bank settlements </p>
            </div>
            <div>
              <Image
                src="/images/feature4.svg"
                alt="feature"
                width={60}
                height={60}
              />
              <p>Simple Invoice Upload: No complicated setup</p>
            </div>
            <div>
              <Image
                src="/images/feature5.svg"
                alt="feature"
                width={60}
                height={60}
              />
              <p>Compliance-Ready: Clean source verification, no custody </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
