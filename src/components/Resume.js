import React from "react";
import { CloudSyncOutlined, LaptopOutlined, TeamOutlined } from "@ant-design/icons"

const Resume = () => {
  const work = [
    {
      icon: <LaptopOutlined />,
      service: "Responsive Websites/Web Application",
      specialization:
        "I build responsive, pixel perfect and interactive websites/web apps for desktops, tablets and mobile devices",
    },
    {
      icon: <TeamOutlined />,
      service: "Building Components and Working in Team",
      specialization:
        "I am also good at building and managing React-based components, plugins, themes and layouts and also working in team",
    },
    {
      icon: <CloudSyncOutlined />,
      service: "Restful APIs/Back-end Utilities/Micro-services",
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
    <section id="resume" className="py-4 mx-auto sm:px-12 md:px-36">
      <div className="mx-2 sm:mx-4 md:mx-12 sm:w-5/6 text-center block py-4 sm:py-8 sm:flex sm:justify-center">
        <div className="sm:w-1/4 sm:text-left mb-4 inline-block text-center">
          <p className="text-blue-700 text-center text-2xl font-medium underline">
            Services
          </p>
        </div>
        <div className=" flex sm:w-4/5 flex flex-col justify-center text-center sm:text-left px-2 sm:px-4">
          {work.map((item, i) => {
            return (
              <div className="mx-auto py-2" key={Math.random()}>
                <div className="text-2xl text-blue-900">{item.icon}</div>
                <h3 className="text-xl font-medium">{item.service}</h3>
                <p className="">{item.specialization}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-2 sm:mx-4 md:mx-12 sm:w-5/6 text-center block py-4 sm:py-8 sm:flex sm:justify-center">
        <div className="sm:w-1/4 sm:text-left mb-4 inline-block text-center">
          <p className="text-blue-700 text-center text-2xl font-medium underline">
            Skills
          </p>
        </div>
        <div className="px-2 sm:px-8 sm:w-4/5 mx-auto py-auto">
          <div className="my-2">
            {skill.map((category) => (
              <div key={Math.random()}>
                <div className="my-4 text-blue-600 text-xl font-medium mx-auto">{category.name}</div>
                <div>{category.skills.map((item, i) => (
                  <div className="mx-auto text-left py-2" key={Math.random()}>
                    <div className="h-6 relative">
                      <div className="absolute left-0">
                        {item.skillname}
                      </div>
                      <div className="absolute right-0">
                        {item.level}
                      </div>
                    </div>
                    <div className="bg-blue-100 relative h-2">
                      <div style={{ width: item.level }} className="bg-blue-700 h-2 left-0 absolute" />
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
