import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Cyber Security
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.networking}`}>
        Networking
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.swe}`}>
        Software Engineering
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.math}`}>
        Math
      </Link>
      {/* <Link href="/blog" className={`${styles.categoryItem} ${styles.philosophy}`}>
        Philosophy
      </Link> */}
      <Link href="/blog" className={`${styles.categoryItem} ${styles.psychology}`}>
        Psychology
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;