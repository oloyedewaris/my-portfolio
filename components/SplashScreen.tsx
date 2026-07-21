import { useEffect, useState } from "react";

import styles from "../styles/splashscreen.module.scss";
import IconSVG from "./IconSVG";

const SplashScreen = ({ show = true, removeSplash = () => {} }) => {
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    const splash = document.getElementById("splashScreen");
    if (splash) {
      setTimeout(() => {
        setClosing(true);
        splash.style.opacity = "0";
        setTimeout(() => {
          splash.style.display = "none";
          removeSplash();
        }, 300);
      }, 4500);
    }
  }, []);

  return (
    <section className={styles.splashScreen} id="splashScreen">
      <span className={styles.splashIcon} style={closing ? { scale: 0 } : {}}>
        <IconSVG />
      </span>
    </section>
  );
};

export default SplashScreen;
