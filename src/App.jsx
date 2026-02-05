import styles from "./App.module.scss";
import Header from "./components/Header";
import Schedule from "./components/Schedule";
import ScheduleCards from "./components/ScheduleCards";
import BottomNav from "./components/BottomNav";

const imgIcon7 = "http://localhost:3845/assets/ac5236d678d3bbcd25f8b46c7ca5b3eb0b3a5917.svg";
const imgVector = "http://localhost:3845/assets/bd405153d9cba4ec55072008499ae2fb64200d2b.svg";

export default function App() {
  return (
    <div className={styles.appFrame}>
      <div className={styles.phone}>
        <Header />

        <main className={styles.content}>
          <Schedule />
          <ScheduleCards statusIcon={imgIcon7} chevronIcon={imgVector} />
        </main>

        <BottomNav />
      </div>
    </div>
  );
}

