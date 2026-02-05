import styles from "../App.module.scss";
import { FaRegClock } from "react-icons/fa6";
import { GrFormPrevious } from "react-icons/gr";
import { FiCalendar } from "react-icons/fi";
import { GrFormNext } from "react-icons/gr";

export default function Schedule() {
  return (
    <section className={styles.schedule}>
      <div className={styles.scheduleHeader}>
        <div className={styles.scheduleTitle}>
          <FaRegClock />
          <h2>授業スケジュール</h2>
        </div>
        <div className={styles.scheduleActions}>
          <button type="button" aria-label="前へ">
            <GrFormPrevious />
          </button>
          <button type="button" aria-label="カレンダー">
            <FiCalendar />
          </button>
          <button type="button" aria-label="次へ">
            <GrFormNext />
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
  );
}
