import { useEffect, useState } from 'react';
import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';

import { zalgoGeneration } from "../utils/zalgo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [zalgoText, setZalgoText] = useState([]);

  useEffect(() => {
    setZalgoText([zalgoGeneration("find me some light please I can't see", 1, 1, 1), zalgoGeneration("it's so dark down here", 1, 1, 1)]);
  }, []);

  return (
    <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
      <Head>
        <title>404: NOT_FOUND</title>
        <meta name="description" content="404: Page Not Found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main>
          <p className={styles.devinfoContainer}>
            <span className={styles.errorCode}>
              <strong>404</strong>: NOT_FOUND
            </span>
            <span className={styles.devinfoLine}>
              Code: <code className={styles.code}>DEPLOYMENT_NOT_FOUND</code>
            </span>
            <span className={styles.devinfoLine}>
              <s>ID</s> Orpheus: <code className={styles.code}>{zalgoText[0]}</code>
            </span>
          </p>
          <Link href="https://hackclub.com" className={styles.ownerError}>
            <div className={styles.note}>
              <s>This deployment cannot be found. For more information and troubleshooting,</s> {zalgoText[1]} see our documentation.
            </div>
          </Link>
        </main>
      </div>
    </div>
  );
}