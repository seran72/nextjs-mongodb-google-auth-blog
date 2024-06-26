import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    //myblog-s43l5afo5a-uc.a.run.app
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  // const data = await res.json();
  // return data;
  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  // Handle potential errors or empty data (optional)
  if (!data || !Array.isArray(data)) {
    return <p>Error fetching categories or no categories found.</p>;
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default CategoryList;
