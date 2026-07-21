import styles from "styles/sections/contactme.module.scss";

const ContactMe = () => {
  return (
    <section id="contact" className={styles.contactMeSection}>
      <h1>Want to reach out?</h1>
      <h2>Let’s Connect</h2>
      <p>
        I’m always open to new opportunities, meaningful collaborations, and
        interesting conversations. If you think I’d be a great addition to your
        team or have a project you’d like to discuss, I’d love to hear from you.
        And if you just want to say hello or ask a question, feel free to reach
        out. I’ll do my best to get back to you as soon as possible.
      </p>
      <a
        className="emailLink"
        href="mailto:oloyedewaris@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Say Hello
      </a>
    </section>
  );
};

export default ContactMe;
