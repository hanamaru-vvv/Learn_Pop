import styles from "./App.module.scss";

const imgIcon = "http://localhost:3845/assets/a12cc161bedf5581ae1a9ceab0504ff28ce50965.svg";
const imgIcon1 = "http://localhost:3845/assets/afc519cef4d619c92190673d4c21a884f7ba097d.svg";
const imgIcon2 = "http://localhost:3845/assets/8c2466dc9dd24286795fc06b88f15bdfedcfa214.svg";
const imgIcon3 = "http://localhost:3845/assets/447f97cd9ceae70f4fc147362c8a6e9ae4de99d8.svg";
const imgIcon4 = "http://localhost:3845/assets/581752cf171c5a0e643bc243ea5bdbf5a39f6303.svg";
const imgIcon5 = "http://localhost:3845/assets/23ee10c437995842dac555d3c9324dfc20512fcc.svg";
const imgIcon6 = "http://localhost:3845/assets/b8f6fb8ef4a3a1979c8769c623218eac2185935f.svg";
const imgIcon7 = "http://localhost:3845/assets/ac5236d678d3bbcd25f8b46c7ca5b3eb0b3a5917.svg";
const imgVector = "http://localhost:3845/assets/bd405153d9cba4ec55072008499ae2fb64200d2b.svg";
const imgIcon8 = "http://localhost:3845/assets/71944b9ceb2ce6951e25aafa2304397dd1e29969.svg";
const imgIcon9 = "http://localhost:3845/assets/72a6d655ab37a825cde60c6b44a5fa0a74fd4cad.svg";
const imgIcon10 = "http://localhost:3845/assets/0ebd9aa491ff0d1050f6ca85daf909d74dc68fe9.svg";
const imgIcon11 = "http://localhost:3845/assets/aa2045d9695101ffccc58e4ed894ca80c45e08e6.svg";

export default function App() {
  return (
    <div className={styles.appFrame}>
      <div className={styles.phone}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.greeting}>
              <h1>おはよう！👋</h1>
              <div className={styles.dateRow}>
                <img src={imgIcon} alt="" />
                <span>2月3日（火）</span>
              </div>
            </div>
            <div className={styles.sparkle}>✨</div>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>
                <img src={imgIcon1} alt="" />
                <span>3</span>
              </div>
              <p>未提出の課題</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>
                <img src={imgIcon2} alt="" />
                <span>8</span>
              </div>
              <p>今月完了</p>
            </div>
          </div>
        </header>

        <main className={styles.content}>
          <section className={styles.schedule}>
            <div className={styles.scheduleHeader}>
              <div className={styles.scheduleTitle}>
                <img src={imgIcon3} alt="" />
                <h2>授業スケジュール</h2>
              </div>
              <div className={styles.scheduleActions}>
                <button type="button" aria-label="前へ">
                  <img src={imgIcon4} alt="" />
                </button>
                <button type="button" aria-label="カレンダー">
                  <img src={imgIcon5} alt="" />
                </button>
                <button type="button" aria-label="次へ">
                  <img src={imgIcon6} alt="" />
                </button>
              </div>
            </div>
            <div className={styles.dateScroller}>
              <button type="button" className={styles.dateItem}>
                <span>月</span>
                <strong>2</strong>
              </button>
              <button type="button" className={`${styles.dateItem} ${styles.dateItemActive}`}>
                <span>火</span>
                <strong>3</strong>
              </button>
              <button type="button" className={styles.dateItem}>
                <span>水</span>
                <strong>4</strong>
              </button>
              <button type="button" className={styles.dateItem}>
                <span>木</span>
                <strong>5</strong>
              </button>
              <button type="button" className={styles.dateItem}>
                <span>金</span>
                <strong>6</strong>
              </button>
              <button type="button" className={styles.dateItem}>
                <span>土</span>
                <strong>7</strong>
              </button>
              <button type="button" className={styles.dateItem}>
                <span>日</span>
                <strong>8</strong>
              </button>
            </div>
          </section>

          <section className={styles.cards}>
            <article className={styles.card}>
              <div className={`${styles.cardStripe} ${styles.stripeSlate}`} />
              <div className={styles.cardBody}>
                <div className={styles.cardLeft}>
                  <div className={`${styles.periodBadge} ${styles.periodSlate}`}>1限</div>
                  <div className={styles.cardText}>
                    <h3>数学基礎</h3>
                    <p>09:00 - 10:30 • A101</p>
                  </div>
                </div>
                <div className={styles.cardRight}>
                  <span className={`${styles.statusBadge} ${styles.statusSlate}`}>完了</span>
                  <img src={imgIcon7} alt="" />
                </div>
              </div>
            </article>

            <article className={`${styles.card} ${styles.cardActive}`}>
              <div className={`${styles.cardStripe} ${styles.stripeIndigo}`} />
              <div className={styles.cardBody}>
                <div className={styles.cardLeft}>
                  <div className={`${styles.periodBadge} ${styles.periodIndigo}`}>2限</div>
                  <div className={styles.cardText}>
                    <h3>環境学</h3>
                    <p>10:40 - 12:10 • B205</p>
                  </div>
                </div>
                <div className={styles.cardRight}>
                  <span className={`${styles.statusBadge} ${styles.statusGreen}`}>授業中</span>
                  <img src={imgIcon7} alt="" />
                </div>
              </div>
            </article>

            <article className={styles.card}>
              <div className={`${styles.cardStripe} ${styles.stripeTeal}`} />
              <div className={styles.cardBody}>
                <div className={styles.cardLeft}>
                  <div className={`${styles.periodBadge} ${styles.periodTeal}`}>3限</div>
                  <div className={styles.cardText}>
                    <h3>英語コミュニケーション</h3>
                    <p>13:00 - 14:30 • C302</p>
                  </div>
                </div>
                <div className={styles.cardRight}>
                  <img className={styles.chevron} src={imgVector} alt="" />
                </div>
              </div>
            </article>
          </section>
        </main>

        <nav className={styles.bottomNav}>
          <button type="button" className={`${styles.navItem} ${styles.navItemActive}`}>
            <img src={imgIcon8} alt="" />
            <span>ホーム</span>
          </button>
          <button type="button" className={styles.navItem}>
            <img src={imgIcon9} alt="" />
            <span>課題</span>
          </button>
          <button type="button" className={styles.navItem}>
            <img src={imgIcon10} alt="" />
            <span>テスト</span>
          </button>
          <button type="button" className={styles.navItem}>
            <img src={imgIcon11} alt="" />
            <span>マイページ</span>
          </button>
        </nav>
      </div>
    </div>
  );
}

