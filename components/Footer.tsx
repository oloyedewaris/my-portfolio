import {
  FiCodepen,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import styles from "styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <ul>
          <li>
            <a
              href="https://github.com/oloyedewaris"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/waris_oloyede/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/waris_oloyede"
              aria-label="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <FiTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/waris-oloyede-26482319b/"
              aria-label="Linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/oloyedewaris"
              aria-label="Codepen"
              target="_blank"
              rel="noreferrer"
            >
              <FiCodepen />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        <a
          href="https://brittanychiang.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>Inspired by Brittany Chiang</div>
        </a>
        <a
          href="https://github.com/oloyedewaris/oloyedewaris"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className={styles.githubStats}>Built by Me</div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
