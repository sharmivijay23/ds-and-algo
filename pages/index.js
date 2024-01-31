import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Navbar } from './components/navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>DSA and algo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='mainHeading'> DSA and Algorithm </h1>
        <Navbar />
        <div className={styles.grid} >
          <Link href="/dsa/stack" className={styles.card}>
            <h3>DSA - Stack &rarr;</h3>
            <p>Stack implementation that has Push and Pop functionalities.</p>
          </Link>
          <Link href="/dsa/queue" className={styles.card}>
            <h3>DSA - Queue &rarr;</h3>
            <p>Queue implementation to enqueue and dequeue items.</p>
          </Link>
          <Link href="/dsa/circularqueue" className={styles.card}>
            <h3>DSA - Circular Queue &rarr;</h3>
            <p>Circular Queue implementation to enqueue and dequeue items.</p>
          </Link>
        </div>
      </main >
      <style jsx>{`
        main {
          padding: 0.5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}


{/* <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p> */}

{/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}