import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';

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
              ID: <code className={styles.code}>sin1::g6x4x-1726839005229-fcf1c0eab6eb</code>
            </span>
          </p>
          <Link href="https://vercel.com/docs/errors/platform-error-codes#deployment_not_found" className={styles.ownerError}>
            <div className={styles.note}>
              This deployment cannot be found. For more information and troubleshooting, see our documentation.
            </div>
          </Link>
        </main>
      </div>
    </div>
  );
}