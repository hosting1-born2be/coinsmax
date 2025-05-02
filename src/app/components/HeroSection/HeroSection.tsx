"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <Image
        src="/images/hero-circle1.svg"
        alt="hero-bg"
        width={240}
        height={320}
      />
      <Image
        src="/images/hero-circle2.svg"
        alt="hero-bg"
        width={890}
        height={850}
      />
      <Image
        src="/images/hero-circle-mobile.svg"
        alt="hero-bg"
        width={125}
        height={235}
      />
      <div className={"_container"}>
        <div className={styles.heroSection__body}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Pay Any Invoice with <br />
            Crypto — <span>Instantly</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Upload invoices. Pay with Bitcoin, Ethereum, or USDC. Fiat settles
            directly <br />
            to any bank account. Fast, compliant, and easy to use.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link href="#contact">Get In Touch</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
