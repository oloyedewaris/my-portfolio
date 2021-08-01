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

  const skills = [
    {
      skillname: "JavaScript (ES6+)",
      level: "87%"
    },
    {
      skillname: " ReactJS/Redux/Hooks",
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
      skillname: "HTML5/CSS3/LESS/Tailwind-CSS",
      level: "71%"
    },
    {
      skillname: "Bootstrap/Material UI/And-design",
      level: "75%"
    },
    {
      skillname: " NodeJS/ExpressJS",
      level: "78%"
    },
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
  ];

  return (
    <section id="resume" className="py-4 mx-auto bg-blue-500">
      <div className="mx-2 sm:mx-4 md:mx-12 w-full sm:w-5/6 text-center block py-4 sm:py-8 sm:flex sm:justify-center">
        <div className="sm:w-1/4 sm:text-left">
          <p className="text-gray-600 text-center text-3xl font-medium">
            Services
          </p>
        </div>
        <div className=" flex sm:w-4/5 flex flex-col justify-center text-center sm:text-left px-2 sm:px-4">
          {work.map((item, i) => {
            return (
              <div className="" key={i}>
                <div className="mx-auto py-2">
                  <h3 className="font-medium">{item.service}</h3>
                  <p className="">{item.specialization}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-2 sm:mx-4 md:mx-12 w-full sm:w-5/6 text-center block py-4 sm:py-8 sm:flex sm:justify-center">
        <div className="sm:w-1/4 sm:text-left">
          <p className="text-gray-600 text-center text-3xl font-medium">
            Skills
          </p>
        </div>
        <div className="px-2 sm:px-8 sm:w-4/5 mx-auto py-auto">
          <div className="my-2 font-mono">
            {skills.map((item, i) => (
              <div className="mx-auto text-left py-2" key={i}>
                <div>
                  {item.skillname}
                </div>
                <div className="block">
                  <div style={{ width: item.level }} className="bg-blue-800 rounded-full h-4" />
                  {item.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Resume;
