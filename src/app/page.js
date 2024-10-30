"use client"

import { useEffect } from "react"; r
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/jobdetails");
  }, []);

  return <div className={styles.container}></div>;
}
