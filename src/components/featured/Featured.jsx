import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Binary to Brainiac</b> unveiling various CS topics - one article at a time.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Hi there, I am Seran...</h1>
          <p className={styles.postDesc}>
            I'm passionate about technology. Through my blog, 
            I share bite-sized insights on various CS fields and psycholgy. 
            I hope you'll find my blog both informative and captivating. 
            Don't hesitate to join the 
            conversation by signing up and sharing your own CS expertise, or 
            by leaving comments on my posts.           
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;