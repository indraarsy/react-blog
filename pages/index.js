import Head from "next/head";
import { Component } from "react";
import styles from "../styles/Home.module.css";

class Home extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className={styles.title}>Blog</h1>

                    {/* <div className={styles.grid}>
                        <a
                            href="https://nextjs.org/docs"
                            className={styles.card}
                        >
                            <h3>Documentation &rarr;</h3>
                            <p>
                                Find in-depth information about Next.js features
                                and API.
                            </p>
                        </a>
                    </div> */}
                </main>
            </div>
        );
    }
}

export default Home;
