import {
  FiGithub,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiCodepen,
} from "react-icons/fi";
import styles from "../styles/fixedsociallinks.module.scss";

const FixedSocialLinks = () => {
  return (
    <div className={styles.verticalContainer}>
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
  );
};

export default FixedSocialLinks;
