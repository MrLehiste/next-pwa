import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const teamIndexPage = (props) => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h2 className={styles.title}>
      經過Fuji培訓出來的企業夥伴包括有
      </h2>

      <p className={styles.description}>
        <Link href="/"><code className={styles.code}>FujiSuzuki.com</code></Link>
      </p>

      <div className={styles.grid}>

        <div className={styles.card}>
          <Image alt="Connie" alt="Connie" width={200} height={68} src="https://teamcoach.fujisuzuki.com/hosted/images/fb/071eb036ca4afd8e2db9ea3c88b5fb/Circle-CONNIE.jpg" />
          <h3>Connie</h3>
          <p>我經營微商生意多年，一直都在尋找一個源源不盡有被動收入的平台，我選擇
�跟隨Fuji 卓越團隊系統，她的領導能力令我佩服，還有她的團隊自動吸客系統，還她的自動培訓系統，還有她的自動管理系統，都是現代網絡時代的需求，令我明白有多重要
省了很多創業是分磨練挫折的時間，令我輕鬆創業，帶領我們的團隊向前繼續邁進衝上行業都最頂尖，短短時間，已經證明了，一個月已經令我做從未有過的生意，很多客戶主動打電話找我..."</p>
        </div>

        <div className={styles.card}>
          <Image alt="LILY" alt="LILY" width={200} height={68} src="https://teamcoach.fujisuzuki.com/hosted/images/00/0328ddc3e44ebc992d81da6d7e7eba/Circle-LILY.jpg" />
          <h3>LILY</h3>
          <p>我說過全職家庭主婦14年從沒有過任何直銷或跨國電商的經驗，我跟隨Fuji Suzuki的方法，在短短兩個月做到了經理的級別，有了理想的收入，幫助了我改變我們家庭的生活質素，我有更健康財富的自由，而且學到我從來未學到在市場上可以運用的知識..."是一個主旨常常有責任的團隊導師，相信我跟隨Fuji的系統和她的指導在未來的日子讓我不需要走任何成功的冤枉路，可以輕鬆創業，帶領我們的團隊繼續向前邁進！
非常感激上帝讓我認識Fuji導師⋯</p>
        </div>


      </div>
    </main>

    <footer className={styles.footer}>
      <p>Copyright 2021 | FujiSuzuki.com | ✉️ info@fujisuzuki.com</p>
    </footer>
  </div>
)

export default teamIndexPage;