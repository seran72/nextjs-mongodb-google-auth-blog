import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=cyber"
        className={`${styles.categoryItem} ${styles.cyber}`}
      >
        Cyber Security
      </Link>
      <Link href="/blog?cat=networking" className={`${styles.categoryItem} ${styles.networking}`}>
        Networking
      </Link>
      <Link href="/blog?cat=swe" className={`${styles.categoryItem} ${styles.swe}`}>
        ML | SWE
      </Link>
      <Link href="/blog?cat=math" className={`${styles.categoryItem} ${styles.math}`}>
        Math
      </Link> 
      {/* <Link href="/blog" className={`${styles.categoryItem} ${styles.philosophy}`}>
        Philosophy
      </Link> */}
      <Link href="/blog?cat=psychology" className={`${styles.categoryItem} ${styles.psychology}`}>
        Psychology
      </Link>
      <Link href="/blog?cat=other" className={`${styles.categoryItem} ${styles.other}`}>
        Other
      </Link>
    </div>
  );
};

export default MenuCategories;
