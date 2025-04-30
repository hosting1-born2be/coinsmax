"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/shared/lib/helpers/animations";
import styles from "./FormSection.module.scss";
import Image from "next/image";
import { ContactForm } from "@/features/contact-form/ui/ContactForm";
export const FormSection = () => {
  return (
    <section className={styles.formSection}>
      <div className={styles.formSection__row}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className={styles.formSection__col1}
        >
          <h2>
            Talk to <br />
            Our Team
          </h2>
          <ContactForm />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className={styles.formSection__col2}
        >
          <Image
            src="/images/ContactImage.svg"
            alt="feature"
            width={931}
            height={800}
          />
        </motion.div>
      </div>
    </section>
  );
};
