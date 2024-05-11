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
          <h1 className={styles.postTitle}>Welcome to my blog...</h1>
          <p className={styles.postDesc}>
          I&apos;m an experienced professional with a Computer Science degree from 
          CSU, Sacramento. I have technical expertise in networking, programming, 
          and Tier 3 support. Successful track record as 
          a Technical Support Engineer at Tesla, Applications Support 
          Engineer at Embedded Works, and demonstrated ability to excel in 
          dynamic technical environments.        
          </p>
          {/* <button className={styles.button}>Read More</button> */}
          <Link href="https://seran-portfolio.vercel.app/" target="_blank">
            <button className={styles.button}>Visit My Website</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;