import FixedEmailLink from "components/FIxedEmailLink";
import FixedSocialLinks from "components/FIxedSocialLinks";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import AboutMe from "components/sections/AboutMe";
import ContactMe from "components/sections/ContactMe";
import EmploymentHistory from "components/sections/EmploymentHistory";
import Projects from "components/sections/Projects";
import WelcomeSection from "components/sections/WelcomeSection";
import Head from "next/head";
import Image from "next/image";
import SplashScreen from "../components/SplashScreen";
import styles from "../styles/home.module.scss";
import { useEffect, useState } from "react";
import fs from "fs";
import { Project } from "utils/types";

export default function Home({ projects }: { projects: Project[] }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (!showSplash) {
      const sections = Array.from(document.getElementsByTagName("section"));
      // const anchor_tags = Array.from(document.getElementsByTagName('a'));

      // const cursor = document.getElementById('custom_cursor') as HTMLElement;
      // const pointer = document.getElementById('custom_pointer') as HTMLElement;

      // anchor_tags.forEach((tag) => {
      //   tag.addEventListener('mouseenter', () => {
      //     cursor.style.backgroundColor = '#ef6616a2';
      //     pointer.style.backgroundColor = 'transparent';
      //   });
      //   tag.addEventListener('mouseout', () => {
      //     cursor.style.backgroundColor = 'transparent';
      //     pointer.style.backgroundColor = 'white';
      //   });
      // });

      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = `1`;
              entry.target.style.transform = `translateY(0rem)`;
            }
          }),
        {
          rootMargin: "-30%",
        },
      );

      sections.forEach((section) => {
        observer.observe(section);
      });
    }
  }, [showSplash]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Waris Oloyede - Portfolio</title>
        <meta
          name="description"
          content="Hey there, welcome to my personal website,Check out some of my projects, or contact me if you have any questions for me!"
        />
        <link rel="icon" href="/waris.png" style={{ borderRadius: "100px" }} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Waris Oloyede - Portfolio" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Hey there, welcome to my personal website,Check out some of my projects, or contact me if you have any questions for me!"
        />
        <meta
          property="og:image"
          content="/waris.png"
          style={{ borderRadius: "100px" }}
        />
        <meta property="og:site_name" content="Waris Oloyede - Portfolio" />

        {/* Twitter  */}
        <meta name="twitter:title" content="Waris Oloyede - Portfolio" />
        <meta
          name="twitter:description"
          content="Hey there, welcome to my personal website,Check out some of my projects, or contact me if you have any questions for me!"
        />
        <meta name="twitter:image" content="/waris.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@waris_oloyede" />
        <meta
          name="twitter:image:alt"
          content="Hey there, welcome to my personal website,Check out some of my projects, or contact me if you have any questions for me!"
        />
      </Head>

      {showSplash ? (
        <SplashScreen
          removeSplash={() => {
            setShowSplash(false);
          }}
        />
      ) : (
        <>
          <main className={styles.main}>
            <Navbar />
            <div className={styles.mainContent}>
              <FixedEmailLink />
              <FixedSocialLinks />
              <WelcomeSection />
              <AboutMe />
              <EmploymentHistory />
              <Projects projects={projects} />
              <ContactMe />
            </div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fs.promises.readFile(
    `./project-data/all-projects.json`,
    "utf-8",
  );
  const projects = JSON.parse(res);
  return { props: { projects } };
};
