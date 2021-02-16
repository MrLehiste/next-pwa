import styles from '../../styles/Home.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { getSortedPostsData } from './posts'
import Markdown from 'markdown-to-jsx'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const teamIndexPage = ({ allPostsData }) => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h2 className={styles.title}>
      經過Fuji培訓出來的企業夥伴包括有
      </h2>

      <p className={styles.description}>
        <Link href="/"><code className={styles.code}>FujiSuzuki.com</code></Link>
      </p>

      <div className={styles.grid}>
        {allPostsData.map(({ id, date, title, content }) => (
          <div className={styles.card} key={id}>
            <Markdown children={content} />
          </div>
        ))}
      </div>
    </main>

    <footer className={styles.footer}>
      <p>Copyright 2021 | FujiSuzuki.com | ✉️ info@fujisuzuki.com</p>
    </footer>
  </div>
)

export default teamIndexPage;