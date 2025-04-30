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
            <p>
              Coinsmax is owned and operated by MoneyFlow OÜ in Harju maakond,
              <br />
              Tallinn, Lasnamäe linnaosa, Valukoja tn 8/1, 11415 <br />
              Licence number: MoneyFlow OÜ - FVT00047
            </p>
          </div>
          <div className={styles.footer__col2}>
            <div className={styles.social}>
              <Link href="#">
                <Facebook />
              </Link>
              <Link href="#">
                <Instagram />
              </Link>
              <Link href="#">
                <TikTok />
              </Link>
              <Link href="#">
                <Youtube />
              </Link>
            </div>
            <Image
              src="/images/payments.png"
              alt="footer-bg"
              width={280}
              height={48}
              quality={100}
            />
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
