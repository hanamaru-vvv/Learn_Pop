import styles from "../App.module.scss";

export default function ScheduleCards({ statusIcon, chevronIcon }) {
  return (
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
            <img src={statusIcon} alt="" />
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
            <img src={statusIcon} alt="" />
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
            <img className={styles.chevron} src={chevronIcon} alt="" />
          </div>
        </div>
      </article>
    </section>
  );
}
