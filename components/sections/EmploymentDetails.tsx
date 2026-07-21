import styles from 'styles/sections/employmentdetails.module.scss';

const EmploymentDetails = ({
  tasks = [],
  title = '',
  company = '',
  timePeriod = '',
  url = ''
}: {
  title: string;
  tasks: string[];
  company: string;
  timePeriod: string;
  url: string;
}) => {
  return (
    <div
      className={styles.employmentDetails}
      id={`${company.toLowerCase()}-tasks`}
    >
      <h3>
        {title}{' '}
        <span>
          @{' '}
          <a href={url} target='_blank' rel='noreferrer noopener'>
            {company.split('-')[0]}
          </a>
        </span>
      </h3>
      <p className={styles.timePeriod}>{timePeriod}</p>
      <ul>
        {tasks.map((task) => (
          <li key={Math.random()}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmploymentDetails;
