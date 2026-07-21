import ProjectCard from 'components/sections/projects/ProjectCard';
import Link from 'next/link';
import { useState } from 'react';
import styles from 'styles/sections/projects/moreprojects.module.scss';
import { Project } from 'utils/types';

const MoreProjects = ({ projects }: { projects: Project[] }) => {
  const [showAll, setShowAll] = useState(false);

  const list = !showAll ? projects.slice(0, 6) : projects;

  return (
    <section className={styles.moreProjects}>
      <div className={styles.header}>
        <h2>Other Noteworthy Projects</h2>
        <a>view the archive below</a>
      </div>
      <ul className={styles.projectList}>
        {list.map((project: Project) => (
          <li key={project.id}>
            <ProjectCard data={project} />
          </li>
        ))}
      </ul>
      <div className={styles.showMoreButton}>
        {!showAll && (
          <button onClick={() => setShowAll(true)}>Show More</button>
        )}
      </div>
    </section>
  );
};

export default MoreProjects;
