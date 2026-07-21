import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import styles from "styles/sections/projects.module.scss";
import MoreProjects from "./projects/MoreProjects";
import { Project } from "utils/types";
import { ProjectGalleryCard } from "./projects/ProjectGalleryCard";

const ImageProjectCard = ({ project }: { project: Project }) => {
  return (
    <li className={styles.projectCard}>
      <div className={styles.projectImage}>
        <div className={styles.imageContainer}>
          <a href={project.url} rel="noopener noreferrer" target="_blank">
            <Image
              src={`/project-media/${project.image}.png`}
              alt={project.name}
              fill
              style={{ objectFit: "contain" }}
              className={styles.tablet_image}
            />
            <Image
              src={`/project-media/${project.image}.png`}
              alt={project.name}
              fill
              style={{ objectFit: "cover" }}
              className={styles.mobile_image}
            />
          </a>
        </div>
      </div>
      <div className={styles.projectDescription}>
        <p className={styles.caption}>Featured Project</p>
        <h3 className={styles.projectTitle}>
          <a href={project.url} rel="noopener noreferrer" target="_blank">
            {project.name}
          </a>
        </h3>
        <div className={styles.description}>
          <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
        </div>
        <ul className={styles.projectTechList}>
          {project.technologies.map((tech) => (
            <li key={Math.random()}>{tech}</li>
          ))}
        </ul>
        <div className={styles.links}>
          {project.github && (
            <a href={project.github} rel="noopener noreferrer" target="_blank">
              <FiGithub />
            </a>
          )}
          <a href={project.url} rel="noopener noreferrer" target="_blank">
            <FiExternalLink />
          </a>
        </div>
      </div>
    </li>
  );
};

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section className={styles.projectsSection} id="projects">
      <h1>Some Things I’ve Built</h1>
      <ul className={styles.projectList}>
        {projects
          .slice(0, 4)
          .map((project, i) =>
            project?.media?.length && project?.media?.length > 0 ? (
              <ProjectGalleryCard
                key={project.id}
                project={project}
                index={i}
              />
            ) : (
              <ImageProjectCard key={project.id} project={project} />
            )
          )}
      </ul>
      {/* <MoreProjects projects={projects.slice(4)} /> */}
    </section>
  );
};

export default Projects;
