import styles from "../styles/iconsvg.module.scss";

const IconSVG = () => {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      className={styles.myLogo}
    >
      {/* Circle */}
      <circle className={styles.myCircle} cx="70" cy="70" r="60" />

      {/* W */}
      <g transform="translate(25 25) scale(0.75)">
        <polyline
          className={styles.myW}
          points="
            30,35
            45,85
            60,50
            75,85
            90,35
          "
        />
      </g>
    </svg>
  );
};

export default IconSVG;
