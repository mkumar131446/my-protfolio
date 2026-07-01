import styles from './BackgroundLayer.module.css'

/**
 * Single fixed background (color + ambient glow + grid texture) that sits
 * behind every section on the page, so the whole page — hero included —
 * reads as one continuous background instead of alternating section colors.
 */
const BackgroundLayer = () => (
  <div className={styles.layer}>
    <div className={`${styles.glow} ${styles.glowTop}`} />
    <div className={`${styles.glow} ${styles.glowBottom}`} />
    <div className={styles.grid} />
  </div>
)

export default BackgroundLayer
