import { useState } from "react"
import styles from "./Tabs.module.css"

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState(1)
  return (
    <section className={styles.section}>
      <h1 className={styles.sectionHeading}>Tabs</h1>
      <div className={styles.tabsContainer}>
        <button
          className={styles.tabBtn}
          onClick={() => setCurrentTab(1)}
          style={{
            backgroundColor: currentTab === 1 ? "#333" : "",
            color: currentTab === 1 ? "white" : "",
          }}
        >
          Tab 1
        </button>
        <button
          className={styles.tabBtn}
          onClick={() => setCurrentTab(2)}
          style={{
            backgroundColor: currentTab === 2 ? "#333" : "",
            color: currentTab === 2 ? "white" : "",
          }}
        >
          Tab 2
        </button>
        <button
          className={styles.tabBtn}
          onClick={() => setCurrentTab(3)}
          style={{
            backgroundColor: currentTab === 3 ? "#333" : "",
            color: currentTab === 3 ? "white" : "",
          }}
        >
          Tab 3
        </button>

        {currentTab === 1 && (
          <div className={`${styles.tabContainer} ${styles.tabContainer1}`}>
            <h1>Tab 1</h1>
            <p>This is in the tab 1</p>
          </div>
        )}
        {currentTab === 2 && (
          <div className={`${styles.tabContainer} ${styles.tabContainer2}`}>
            <h1>Tab 2</h1>
            <p>This is in the tab 2</p>
          </div>
        )}
        {currentTab === 3 && (
          <div className={`${styles.tabContainer} ${styles.tabContainer3}`}>
            <h1>Tab 3</h1>
            <p>This is in the tab 3</p>
          </div>
        )}
      </div>
    </section>
  )
}
