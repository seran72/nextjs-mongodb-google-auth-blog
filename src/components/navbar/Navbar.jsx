import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <a href="https://www.linkedin.com/in/serangemechu/" target="_blank" rel="noopener noreferrer">
          <Image src="/linkedin.png" alt="GitHub" width={24} height={24} />
        </a>
        <a href="https://github.com/seran72" target="_blank" rel="noopener noreferrer">
          <Image src="/git.png" alt="GitHub" width={24} height={24} />
        </a>
      </div>
      <div className={styles.logo}></div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        {/* <Link href="/" className={styles.link}>Contact</Link>  */}
        <Link href="https://seran-portfolio.vercel.app/#projects" className={styles.link} target="_blank">Projects</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;