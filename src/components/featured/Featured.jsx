"use client"
import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>
        <b>Welcome </b> to my little corner of the internet...
      </h1> */}
      <div className={styles.post}>
        {/* <div className={styles.imgContainer}>
          <Image src="/seran.jpeg" alt="" fill className={styles.image} />
        </div> */}
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Welcome to my blog!</h1>
          <p className={styles.postDesc}>
          Explore my latest blog posts. Consider signing up and submitting 
          your own guest article.     
          </p>
          {/* <button className={styles.button}>Read More</button> */}
          <Link href="https://seran-portfolio.vercel.app/" target="_blank">
            <button className={styles.button}>Personal Website</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
