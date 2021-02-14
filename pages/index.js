import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome!
           {/* to <a href="https://app.fujisuzuki.com">FujiSuzuki.com!</a> */}
        </h1>

        <p className={styles.description}>
          {/* Get started by editing{' '} */}
          <code className={styles.code}>FujiSuzuki.com</code>
        </p>

        <div className={styles.grid}>
          <a href="/team" className={styles.card}>
            <h3>Team  &rarr;</h3>
            <p>經過Fuji培訓出來的企業夥伴包括有</p>
          </a>

          <a href="https://go.fujisuzuki.com/contact" className={styles.card}>
            <h3>Contact &rarr;</h3>
            <p>跟隨Fuji Suzuki都是我的Mentor,她的提點給我一個肯定</p>
          </a>

          <div className={styles.card}>
            <video width="640" id="player" controls="" playsinline="" poster="https://video.fujisuzuki.com/fs.jpg">
              <source src="https://video.fujisuzuki.com/fs.mp4" type="video/mp4" />
            </video>
          </div>

        </div>
      </main>

      <footer className={styles.footer}>
        <p>Copyright 2021 | FujiSuzuki.com | ✉️ info@fujisuzuki.com</p>
      </footer>
    </div>
  )
}
