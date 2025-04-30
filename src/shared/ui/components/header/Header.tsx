import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import { Facebook } from "../icons/facebook/Facebook";
import { Instagram } from "../icons/instagram/Instagram";
import { TikTok } from "../icons/tiktok/TikTok";
import { Youtube } from "../icons/youtube/Youtube";


export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={"_container"}>
        <div className={styles.header__row}>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={255}
              height={60}
              quality={100}
            />
          </Link>
          <div className={styles.header__social}>
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
        </div>
      </div>
    </header>
  );
};
