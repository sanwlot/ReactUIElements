import { useState } from "react"
import styles from "./Modal.module.css"
import { IoMdClose } from "react-icons/io"

export default function Modal() {
  const [showModal, setShowModal] = useState(false)
  return (
    <section className={styles.section}>
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className={styles.modalOverlay}
        ></div>
      )}
      <h1 className={styles.heading}>Modal</h1>
      {showModal && (
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <h2 className={styles.modalTitle}>Modal Title</h2>
            <span
              onClick={() => setShowModal(false)}
              className={styles.closeIcon}
            >
              <IoMdClose />
            </span>
            <div className={styles.modalBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eius alias explicabo blanditiis quis quaerat culpa harum beatae!
              Fugit nam eius consequuntur? Quasi sequi labore suscipit. Nam
              adipisci odit repellendus? lorem Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Voluptate, asperiores eos, vero
              velit consequuntur assumenda unde corporis perspiciatis, possimus
              sequi architecto quisquam mollitia dolorem molestiae pariatur
              saepe nam ipsam? Magnam iste nemo voluptas odio repellendus
              distinctio recusandae commodi quibusdam perspiciatis! Aperiam
              harum perspiciatis, iusto, inventore placeat eos quia debitis a
              est pariatur officia dignissimos eligendi repellendus nisi et
              voluptates fugit dolores officiis, sed nulla sequi iste. Molestias
              consequuntur consectetur illum nihil nemo ipsam doloremque
              aspernatur repellat asperiores ut hic vel, necessitatibus aliquam
              error aliquid qui temporibus. Minima earum voluptas quisquam
              molestias, omnis, voluptatum nihil dolore laborum aperiam,
              incidunt quae ducimus voluptate cupiditate! Quaerat sunt culpa
              amet dignissimos eveniet dolorem quisquam! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Voluptate recusandae quae neque
              officia vero quibusdam est ducimus, adipisci fuga aliquam
              repellendus, optio ipsa ut ab provident voluptates totam expedita
              dolores? lorem100 Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Maiores ipsa repudiandae, corrupti alias fuga
              voluptate labore, modi dignissimos obcaecati eligendi nihil
              reiciendis molestias voluptates iusto consequatur distinctio
              voluptas asperiores consectetur unde, maxime illo quo ipsum
              expedita esse? Hic, fugiat! Eaque hic eius neque explicabo error
              veniam exercitationem nulla magni? Beatae id ad impedit totam
              ratione corporis, nihil labore voluptatem provident quaerat eaque
              cum possimus error. Nulla nostrum, earum ad modi, nisi velit harum
              fugit cum provident culpa dignissimos quo delectus vel nemo beatae
              cupiditate reiciendis magnam reprehenderit facilis officiis
              libero? Repellat minus aliquid perferendis quo sed. Magnam quasi
              facere nam sed excepturi cumque laboriosam delectus, quo sit
              veritatis totam tempora. Cum possimus nihil rem nulla enim vero
              aut explicabo libero. Quia cumque est delectus, veniam deleniti
              fuga voluptatem eveniet necessitatibus! Beatae natus autem
              architecto commodi, odit dolorum corporis inventore impedit magni
              atque a explicabo omnis laboriosam cum pariatur, tenetur
              provident. Corporis assumenda iste porro, voluptate dolores dolore
              accusamus placeat tenetur cumque quos error ullam praesentium
              nihil, vel rem, facilis omnis delectus fuga reprehenderit iusto
              culpa voluptatum! Mollitia ipsam facere perferendis maiores minima
              dolore excepturi quasi saepe animi aspernatur aut ducimus maxime
              aperiam, laudantium placeat ad voluptatum repellat praesentium
              cupiditate atque.
            </div>
            <button
              onClick={() => setShowModal(false)}
              className={styles.modalCloseBtn}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className={styles.modalLaunchBtnContainer}>
        <button
          className={styles.modalLaunchBtn}
          onClick={() => setShowModal(true)}
        >
          Launch Modal
        </button>
      </div>
    </section>
  )
}
