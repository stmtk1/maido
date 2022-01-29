import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <p>hello</p>
      </main>
    </div>
  );
};

export default Home;
