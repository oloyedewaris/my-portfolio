import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';
import styles from 'styles/sections/projects/projectcard.module.scss';
import { Project } from 'utils/types';

const ProjectCard = ({ data }: { data: Project }) => {
  return (
    <a
      href={data.url}
      target='_blank'
      rel='noreferrer noopener'
      className={styles.projectCard}
    >
      <div className={styles.top}>
        <div className={styles.left}>
          <a>
            <FiFolder strokeWidth={1} />
          </a>
        </div>
        <div className={styles.right}>
          {data.github && (
            <a href={data.github} target='_blank' rel='noreferrer noopener'>
              <FiGithub />
            </a>
          )}
          <a href={data.url} target='_blank' rel='noreferrer noopener'>
            <FiExternalLink />
          </a>
        </div>
      </div>
      <h4>{data.name}</h4>
      <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
      <ul className={styles.cardProjectTechList}>
        {data.technologies.map((tech) => (
          <li key={Math.random()}>{tech}</li>
        ))}
      </ul>
    </a>
  );
};

export default ProjectCard;
