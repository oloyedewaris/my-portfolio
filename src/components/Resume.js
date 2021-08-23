import React from "react";

const Resume = () => {
  const work = [
    {
      service: "Responsive Websites/Web Application",
      specialization:
        "I build responsive, pixel perfect and interactive websites/web apps for desktops, tablets and mobile devices",
    },
    {
      service: "React Components and Working in Team",
      specialization:
        "I am also good at building and managing React-based components, plugins, themes and layouts and also working in team",
    },
    {
      service: "Restful APIs/Back End Utilities",
      specialization:
        "With my Full-stack expertise and experience, I am able to build restful APIs which will be used by front-end engineers with the help of Node JS, Express JS and Mongo DB",
    },
  ];

  const skill = [
    {
      name: "Frameworks/Languages",
      skills: [
        {
          skillname: "JavaScript (ES6+)",
          level: "87%"
        },
        {
          skillname: " ReactJS/Redux",
          level: "92%"
        },
        {
          skillname: " React Native",
          level: "65%"
        },
        {
          skillname: "NextJS",
          level: "60%"
        },
        {
          skillname: "HTML5/CSS3/LESS",
          level: "71%"
        },
        {
          skillname: " NodeJS/ExpressJS",
          level: "78%"
        }
      ]
    },
    {
      name: "UI Libraries/Tools",
      skills: [
        {
          skillname: "Bootstrap/Material UI/Ant-design",
          level: "75%"
        },
        {
          skillname: "Tailwind-CSS, React-hooks, Formik",
          level: "67%"
        },
        {
          skillname: "Axios/Bcrypt/Json web tokens",
          level: "85%"
        },
      ]
    },
    {
      name: "DevOps/Web Services",
      skills: [
        {
          skillname: "WebSockets/Socket.io",
          level: "68%"
        },
        {
          skillname: " MongoDB/Mongoose",
          level: "72%"
        },
        {
          skillname: "Git/Github/FireBase",
          level: "64%"
        },
      ]
    }
  ];

  return (
    <section id="resume" className="py-4 mx-auto bg-blue-500  sm:px-12 md:px-36">
      <div className="mx-2 sm:mx-4 md:mx-12 sm:w-5/6 text-center block py-4 sm:py-8 sm:flex sm:justify-center">
        <div className="sm:w-1/4 sm:text-left mb-4 inline-block text-center">
          <p className="text-gray-600 text-center text-3xl font-medium w-28" style={{ borderBottom: "3px solid blue" }}>
            Services
          </p>
        </div>
        <div className=" flex sm:w-4/5 flex flex-col justify-center text-center sm:text-left px-2 sm:px-4">
          {work.map((item, i) => {
            return (
              <div className="mx-auto py-2" key={Math.random()}>
                <h3 className="text-xl font-medium underline">{item.service}</h3>
                <p className="">{item.specialization}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-2 sm:mx-4 md:mx-12 sm:w-5/6 text-center block py-4 sm:py-8 sm:flex sm:justify-center">
        <div className="sm:w-1/4 sm:text-left mb-4 inline-block text-center">
          <p className="text-gray-600 text-center text-3xl font-medium w-20" style={{ borderBottom: "3px solid blue" }}>
            Skills
          </p>
        </div>
        <div className="px-2 sm:px-8 sm:w-4/5 mx-auto py-auto">
          <div className="my-2">
            {skill.map((category) => (
              <div key={Math.random()}>
                <div className="my-4 text-gray-300 text-xl font-medium mx-auto">{category.name}</div>
                <div>{category.skills.map((item, i) => (
                  <div className="mx-auto text-left py-2" key={Math.random()}>
                    <div>
                      {item.skillname}
                    </div>
                    <div className="block">
                      <div style={{ width: item.level }} className="bg-blue-900 h-2" />
                      {item.level}
                    </div>
                  </div>
                ))}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Resume;
