import styles from "../App.module.scss";
import { RiHomeFill } from "react-icons/ri";
import { FiFileText } from "react-icons/fi";
import { GoTrophy } from "react-icons/go";
import { FiUser } from "react-icons/fi";

export default function BottomNav() {
  return (
    <nav className={styles.bottomNav}>
      <button type="button" className={`${styles.navItem} ${styles.navItemActive}`}>
        <RiHomeFill />
        <span>ホーム</span>
      </button>
      <button type="button" className={styles.navItem}>
        <FiFileText />
        <span>課題</span>
      </button>
      <button type="button" className={styles.navItem}>
        <GoTrophy />
        <span>テスト</span>
      </button>
      <button type="button" className={styles.navItem}>
        <FiUser />
        <span>マイページ</span>
      </button>
    </nav>
  );
}
