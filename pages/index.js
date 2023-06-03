import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1 className={styles.title}> hello world</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quas
          eaque doloribus saepe repudiandae unde explicabo amet necessitatibus,
          voluptate blanditiis numquam libero nam excepturi deleniti veritatis
          impedit maiores earum! Nisi!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quas
          eaque doloribus saepe repudiandae unde explicabo amet necessitatibus,
          voluptate blanditiis numquam libero nam excepturi deleniti veritatis
          impedit maiores earum! Nisi!
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
