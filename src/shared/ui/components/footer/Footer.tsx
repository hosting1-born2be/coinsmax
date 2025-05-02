import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";
import { Facebook } from "../icons/facebook/Facebook";
import { Instagram } from "../icons/instagram/Instagram";
import { TikTok } from "../icons/tiktok/TikTok";
import { Youtube } from "../icons/youtube/Youtube";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={"_container"}>
        <div className={styles.footer__row}>
          <div className={styles.footer__col1}>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="logo"
                width={255}
                height={60}
                quality={100}
              />
            </Link>
          </div>
          <div className={styles.footer__col2}>
            <p>
              Copyright © coinsmax {new Date().getFullYear()}. All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
