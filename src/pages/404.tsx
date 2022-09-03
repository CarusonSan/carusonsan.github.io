import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import styles from '../styles/404.module.css'

const Custom404: NextPage = () => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Carson Cheung</title>
            <meta name="description" content="Carson Cheung - Virtual Business Card" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <h1 className={styles.title}>
              404 - Not Found
            </h1>    
          </main>
        </div>
      )
  }

export default Custom404;