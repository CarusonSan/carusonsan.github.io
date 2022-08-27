import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carson Cheung</title>
        <meta name="description" content="Carson Cheung - Virtual Business Card" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello, I&apos;m Carson
        </h1>
        <h2>
          Full-Stack Developer @ Phlo
        </h2>

        <div className={styles.grid}>
          <a href="https://github.com/CarusonSan" className={styles.card}>
            <h2>GitHub</h2>
            <FontAwesomeIcon icon={faGithub} className={styles.brand}/>
          </a>

          <a href="https://www.linkedin.com/in/carson-cheung-906a1a87/" className={styles.card}>
            <h2>LinkedIn</h2>
            <FontAwesomeIcon icon={faLinkedin} className={styles.brand} />
          </a>

        </div>
      </main>
    </div>
  )
}

export default Home
