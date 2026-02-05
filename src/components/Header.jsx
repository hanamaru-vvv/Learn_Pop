import styles from "../App.module.scss";
import { FiCalendar } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.greeting}>
          <h1>おはよう！👋</h1>
          <div className={styles.dateRow}>
            <FiCalendar />
            <span>2月3日（火）</span>
          </div>
        </div>
        <div className={styles.sparkle}>✨</div>
      </div>
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>
            <FaRegClock />
            <span>3</span>
          </div>
          <p>未提出の課題</p>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>
            <FaRegCheckCircle />
            <span>8</span>
          </div>
          <p>今月完了</p>
        </div>
      </div>
    </header>
  );
}
