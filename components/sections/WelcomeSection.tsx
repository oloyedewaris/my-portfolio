import Link from "next/link";
import styles from "../../styles/sections/welcomesection.module.scss";

const WelcomeSection = () => {
  return (
    <section className={styles.welcomeSection}>
      <h3>Hello, I am</h3>
      <h1>Waris Oloyede.</h1>
      <h2>I build web and mobile applications.</h2>
      <p>
        I’m a software engineer specializing in building fast, scalable, and
        user-focused web and mobile applications. I enjoy transforming ideas
        into reliable digital products using React, React Native, Next.js, and
        Node.js, with a strong focus on clean architecture, performance, and
        exceptional user experiences.
      </p>
      <Link className={styles.viewMyProjects} href="/#projects">
        Explore My Work!
      </Link>
    </section>
  );
};

export default WelcomeSection;
