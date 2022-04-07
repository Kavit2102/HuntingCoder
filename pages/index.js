import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">HuntingCoder</a>
        </h1>

        <div className={styles.content}>
          <div className="item">
          <h3>How yo learn Flask</h3>
          <p>Nice Language</p>
          </div>
          <div className="item">
          <h3>How to learn Golang</h3>
          <p>Nice Language</p>
          </div>
          <div className="item">
          <h3>How to learn Javascript</h3>
          <p>Nice Language</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
