import styles from "./Accordian.module.css"
import { FaCaretDown } from "react-icons/fa6"
import { FaCaretUp } from "react-icons/fa"
import { useState } from "react"

let nextId = 0

function App() {
  const [accordianList, setAccordianList] = useState([
    {
      id: nextId++,
      title: "List item 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                natus dolorum pariatur perferendis vero tempora amet qui error vel
                necessitatibus nam corporis sed, aut, est impedit libero placeat
                eius! Atque.`,
      isActive: false,
    },
    {
      id: nextId++,
      title: "List item 2",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                natus dolorum pariatur perferendis vero tempora amet qui error vel
                necessitatibus nam corporis sed, aut, est impedit libero placeat
                eius! Atque.`,
      isActive: false,
    },
    {
      id: nextId++,
      title: "List item 3",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                natus dolorum pariatur perferendis vero tempora amet qui error vel
                necessitatibus nam corporis sed, aut, est impedit libero placeat
                eius! Atque.`,
      isActive: false,
    },
  ])
  function toggleAccordianListItem(id: number) {
    setAccordianList((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, isActive: !item.isActive }
        }
        return item
      })
    })
  }
  return (
    <section className={styles.section}>
      <h1 style={{ textAlign: "center" }}>Accordian</h1>
      <ul className={styles.accordian}>
        {accordianList.map((accordianItem) => (
          <li key={accordianItem.id} className={styles.accordianListItem}>
            <div className={styles.accordianListItemHeadingContainer}>
              <strong>{accordianItem.title}</strong>
              <span
                onClick={() => toggleAccordianListItem(accordianItem.id)}
                className={styles.accordianListItemToggleIcon}
              >
                {accordianItem.isActive ? <FaCaretUp /> : <FaCaretDown />}
              </span>
            </div>
            <div
              className={styles.accordianListItemContent}
              style={{
                display: `${accordianItem.isActive ? "block" : "none"}`,
              }}
            >
              <p>{accordianItem.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default App
