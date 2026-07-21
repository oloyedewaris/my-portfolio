import { useState, useEffect } from "react";
import styles from "styles/sections/employmenthistory.module.scss";
import EmploymentDetails from "./EmploymentDetails";

const EmploymentHistory = () => {
  const [tab, setTab] = useState("sphere");
  const [index, setIndex] = useState(0);
  const [companies] = useState([
    "sphere",
    "myxellia",
    "estateiq",
    "anli",
    "edubaloo",
  ]);

  const changeTab = (selected: string) => {
    setTab(selected);
    const ind = companies.indexOf(selected);
    document.documentElement.setAttribute("style", `--tab-number: ${ind}`);
    const oldsection = document.getElementById(`${tab}-tasks`);
    const newsection = document.getElementById(`${selected}-tasks`);

    console.log(oldsection, newsection);

    if (tab === selected) {
      return;
    }

    oldsection ? (oldsection.style.opacity = "0") : null;
    setTimeout(() => {
      oldsection ? (oldsection.style.display = `none`) : null;
      newsection ? (newsection.style.display = `block`) : null;
      setTimeout(() => {
        newsection ? (newsection.style.opacity = "1") : null;
      }, 10);
    }, 150);

    setIndex(ind);
  };
  useEffect(() => {
    const section = document.getElementById(`${tab}-tasks`);
    section ? (section.style.display = `block`) : null;
    setTimeout(() => {
      section ? (section.style.opacity = "1") : null;
    }, 10);
  }, []);

  const activeTab = {
    color: `var(--green)`,
    backgroundColor: `var(--light-navy)}`,
  };

  return (
    <section id="jobs" className={styles.employmentHistorySection}>
      <h1>Where I’ve Worked</h1>
      <div className={styles.innerContent}>
        <div className={styles.theWhere}>
          <div className={styles.employmentList}>
            <span
              style={index === 0 ? activeTab : {}}
              onClick={() => changeTab("sphere")}
            >
              Sphere
            </span>
            <span
              style={index === 1 ? activeTab : {}}
              onClick={() => changeTab("myxellia")}
            >
              Myxellia
            </span>
            <span
              style={index === 2 ? activeTab : {}}
              onClick={() => changeTab("anli")}
            >
              EstateIQ
            </span>
            <span
              style={index === 3 ? activeTab : {}}
              onClick={() => changeTab("anli")}
            >
              Anli
            </span>
            <span
              style={index === 4 ? activeTab : {}}
              onClick={() => changeTab("edubaloo")}
            >
              Edubaloo
            </span>
            <div className={`${styles.indicator}`}></div>
          </div>
        </div>
        <div className={styles.theWhat}>
          <EmploymentDetails
            tasks={[
              "Built Sphere from the ground up, evolving it from a personal project into a logistics startup by developing the complete product ecosystem over three years.",
              "Owned the full software development lifecycle, including mobile applications, backend systems, APIs, and infrastructure required to bring the product from concept to MVP.",
              "Transformed an idea into a publicly available product by successfully launching Sphere applications on both Google Play Store and Apple App Store.",
              "Led continuous product improvement by identifying user needs, implementing new features, and shaping the technical direction of the platform.",
            ]}
            title="Co-founder / Software Engineer"
            company="Sphere"
            timePeriod="June 2024 - Present"
            url="https://sphere.ng"
          />

          <EmploymentDetails
            tasks={[
              "Developed Next.js applications that help real estate developers manage and streamline their business operations.",
              "Built custom client solutions for real estate companies including Mainstone, Adozillion, and Doorhive, delivering tailored digital experiences for their workflows.",
              "Created reusable UI components and frontend solutions that improved consistency and accelerated development across the engineering team.",
              "Optimized application performance, usability, and scalability to support Myxellia’s vision of a connected real estate ecosystem.",
            ]}
            title="Frontend Engineer"
            company="Myxellia"
            timePeriod="May 2023 - Present"
            url="https://myxellia.io"
          />

          <EmploymentDetails
            tasks={[
              "Enhanced EstateIQ’s mobile platform by developing and improving features that support smarter estate management and resident experiences.",
              "Implemented key modules including access control, visitor verification, household management, estate reporting, billing, payments, and emergency alerts.",
              "Improved existing mobile solutions by optimizing functionality, resolving issues, and delivering updates that enhanced reliability and user experience.",
              "Contributed to building a digital platform that strengthens communication, security, and convenience within gated communities.",
            ]}
            title="Mobile Engineer"
            company="EstateIQ"
            timePeriod="September 2023 - Present"
            url="https://estateiq.ng/"
          />

          <EmploymentDetails
            tasks={[
              "Developed core accounting and reporting modules for Anli’s hotel and restaurant management platform.",
              "Built features for sales reporting, purchase tracking, staff management, account management, and operational insights.",
              "Created and integrated backend APIs to power frontend applications and ensure smooth data flow across the platform.",
              "Helped improve business operations by delivering tools that enable hospitality businesses to monitor performance and manage daily activities efficiently.",
            ]}
            title="Full-stack Developer"
            company="Anli"
            timePeriod="June 2025 - January 2026"
            url="https://www.weareanli.com/"
          />

          <EmploymentDetails
            tasks={[
              "Developed mobile payment features that enabled users to subscribe to different service plans and complete transactions seamlessly.",
              "Integrated Paystack payment solutions into the platform, enabling secure and reliable payment processing across the application.",
              "Extended contributions beyond mobile development by building a web-based single-page payment application to support online transactions.",
              "Delivered a complete payment experience across mobile and web platforms, improving the platform’s subscription and monetization capabilities.",
            ]}
            title="Mobile and Web Developer (Contract)"
            company="Edubaloo"
            timePeriod="December 2023 - April 2024"
            url="https://edubaloo.com/"
          />
        </div>
      </div>
    </section>
  );
};

export default EmploymentHistory;
