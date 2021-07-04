import React from "react";
import warisCv from "../Utils/Waris-CV.docx";

const Resume = (props) => {
  const work = [
    {
      icon: <span>💻</span>,
      service: "Responsive Websites",
      specialization:
        "I build responsive and pixel perfect websites for desktop, tablets and mobile devices",
    },
    {
      icon: <span>⚙️</span>,
      service: "Web Applications",
      specialization:
        "I build great web apps with React, Redux and some third party libraries",
    },
    {
      icon: <span>🛢</span>,
      service: "Restful APIs",
      specialization:
        "I build restful APIs which will be used by front-end engineers with the help of Node, Express and mongoDB",
    },
  ];

  const skills = [
    {
      skillname: "JavaScript (ES6+)",
    },
    {
      skillname: " Reactjs (Hooks)",
    },
    {
      skillname: "Redux (Thunk)",
    },
    {
      skillname: " Nodejs & Express",
    },
    {
      skillname: " MongoDB & Mongoose",
    },
    {
      skillname: "HTML5",
    },
    {
      skillname: "CSS3",
    },
  ];

  return (
    <section id="resume" className="right-0 py-4 mx-auto bg-blue-400">
      <div className="mx-2 sm:mx-4 md:mx-12 w-full sm:w-5/6 text-center block py-4 sm:py-8 sm:flex sm:justify-center">
        <div className="sm:w-1/4 sm:text-left">
          <p className="border-b-1 border-blue-700 text-center text-2xl font-medium">
            Services
          </p>
        </div>

        <div className=" flex sm:w-4/5 flex flex-col justify-center text-center sm:text-left px-2 sm:px-4">
          {work.map((item, i) => {
            return (
              <div className="" key={i}>
                <div className="mx-auto py-2">
                  <span className="text-xl">{item.icon}</span>
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
          <h1 className="font-sans border-b-1 border-blue-700 text-center text-2xl">
            Skills
          </h1>
        </div>
        <div className="px-4 sm:px-8 sm:w-4/5 mx-auto py-2">
          <p className="text-2xl text-left italic">
            I am a Mern Stack Developer
          </p>
          <div className="my-2">
            {skills.map((item, i) => (
              <h2 className="mx-auto text-left py-2" key={i}>
                {item.skillname}
              </h2>
            ))}
          </div>
        </div>
      </div>
      <div className="py-auto mx-36 inline-block text-left my-4">
        <a href={warisCv} download="Waris-CV.docx">
          <button className="rounded px-4 py-2 bg-blue-700 hover:bg-blue-600">
            Download CV
          </button>
        </a>
      </div>
    </section>
  );
};

export default Resume;
