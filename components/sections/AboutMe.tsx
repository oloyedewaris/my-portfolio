import Image from "next/image";
import styles from "styles/sections/aboutme.module.scss";

const AboutMe = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h1>About Me</h1>
      <div className={styles.inner}>
        <div className={styles.text}>
          <p>
            Hey! I'm Waris, a software engineer passionate about building
            digital products that solve real-world problems. Over the past four
            years, I've been designing and developing web and mobile
            applications using technologies like React, React Native, Next.js,
            and Node.js. I enjoy turning ideas into scalable, user-friendly
            products and continuously improving my skills through every project
            I build.
          </p>
          <p>
            Throughout my journey, I've worked on a variety of solutions,
            including healthcare platforms, legal websites, booking systems,
            productivity apps, and real estate applications. Each project has
            strengthened my understanding of software architecture, performance,
            and creating experiences that users genuinely enjoy.
          </p>
          <p>
            Beyond software engineering, I'm currently a co-founder of{" "}
            <a href="https://sphere.ng/" target="_blank" rel="noreferrer">
              Sphere
            </a>
            , a logistics startup that connects people who need to move goods
            and belongings with trusted drivers. Building Sphere has given me
            the opportunity to think beyond writing code—contributing to product
            strategy, solving real user problems, and helping shape a business
            from the ground up.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>NextJS</li>
            <li>Node.js</li>
            <li>React Native</li>
          </ul>
        </div>
        <div className={styles.image}>
          <div className={styles.imageWrapper}>
            <Image
              src="/waris.jpeg"
              alt="My Image"
              width={300}
              height={450}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
