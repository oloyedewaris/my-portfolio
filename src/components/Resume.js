import React from "react";
import { LaptopOutlined, TeamOutlined, MobileOutlined } from "@ant-design/icons";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Resume = () => {
  const categoriesData = [
    {
      id: 1,
      name: "Frameworks/Languages",
      alias: 'frame',
      isOpen: false,
      skills: [
        {
          skillname: "JavaScript (ES6+)",
          level: "87%",
        },
        {
          skillname: " ReactJS/React Native",
          level: "92%",
        },
        {
          skillname: "NextJS",
          level: "68%",
        },
        {
          skillname: "HTML5/CSS3",
          level: "78%",
        },
        {
          skillname: " NodeJS/ExpressJS",
          level: "58%",
        }
      ]
    },
    {
      id: 2,
      name: "UI Libraries/Tools",
      alias: 'ui',
      isOpen: false,
      skills: [
        {
          skillname: "Bootstrap/Material UI",
          level: "75%"
        },
        {
          skillname: "Redux/React-router/Formik",
          level: "69%"
        },
        {
          skillname: "React navigation",
          level: "77%"
        },
        {
          skillname: "Axios/Bcrypt/Json web tokens",
          level: "75%"
        },
      ]
    },
    {
      id: 3,
      name: "DevOps/Web Services",
      alias: 'devOps',
      isOpen: false,
      skills: [
        {
          skillname: "Git/Github/FireBase",
          level: "60%"
        },
        {
          skillname: "WebSockets/REST/Socket.io",
          level: "48%"
        },
        {
          skillname: " MongoDB/Mongoose",
          level: "56%"
        },
      ]
    }
  ];
  const works = [
    {
      icon: <LaptopOutlined />,
      service: "Web development",
      specialization:
        `I build, responsive and interactive layout for websites/web-apps for desktops, tablets and 
        mobile devices. With over 4 years of experience building frontend based web applications using javascript, 
        I have more than 3 years of experience using ReactJS. I now build industry standard web applications 
        using React, Next.Js and virtually any Javascript framework that motivates me.`,
    },
    {
      icon: <MobileOutlined />,
      service: "Mobile development",
      specialization:
        `With my React Native expertise and experience, I am able to translate code into user-friendly and 
        functional mobile applications. Developing applications that runs on both Android and iOS devices.
        Contribute to the process of design, building, testing, documentating and release of mobile apps`
    },
    {
      icon: <TeamOutlined />,
      service: "Project Management",
      specialization:
        `Building Components and Working in Team.
        With a software project planned and managed successfully from start to finish,
        I am able to work well both in a team environment as well as using own initiative. 
        Building and managing software components, plugins, themes and layouts.
        I am a mature team worker and adaptable to all challenging situations.`,
    }
  ];


  return (
    <section id="resume" className="py-4 mx-auto sm:px-10 md:px-28 lg:px-32 xl:px-40">
      <div className="mx-2 sm:mx-4 md:mx-12 sm:w-5/6 text-center block py-4 sm:py-8 sm:flex sm:justify-center">
        <Fade duration={2500} left>
          <div className="sm:w-1/4 sm:text-left mb-4 inline-block text-center">
            <p className="text-purple-800 text-center text-3xl md:text-4xl font-medium underline">
              What I Do
            </p>
          </div>
        </Fade>
        <div className=" flex sm:w-4/5 flex-col justify-center text-center sm:text-left px-2 sm:px-4">
          {works.map((work, i) => (
            <Fade duration={2000} right key={i}>
              <div className="block p-4 xs:p-8 my-4 shadow-xl hover:shadow-2xl rounded-xl">
                <div className="text-3xl text-purple-800 my-2">{work.icon}</div>
                <h3 className="text-2xl font-medium my-2">{work.service}</h3>
                <p className="">{work.specialization}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      <div className="mx-2 sm:mx-4 md:mx-12 sm:w-5/6 text-center block py-4 sm:py-8 sm:flex sm:justify-center">
        <Fade duration={2500} left>
          <div className="sm:w-1/4 sm:text-left mb-4 inline-block text-center">
            <p className="text-purple-800 text-center text-3xl md:text-4xl font-medium underline">
              Skill Set
            </p>
          </div>
        </Fade>
        <div className="px-2 sm:px-8 sm:w-4/5 mx-auto py-auto">
          <div className="my-2">
            {categoriesData.map((category, i) => (
              <Zoom duration={2000} key={i} left>
                <div className="skill_transition overflow-hidden mb-6 w-full px-4 py-3 rounded-lg ring-1 ring-purple-600">
                  <div className="cursor-pointer my-4 text-purple-800 w-full flex justify-between items-center mx-auto">
                    <span className='text-xl font-medium'>{category.name}</span>
                  </div>
                  <div className="">
                    {category.skills.map((skill, i) => (
                      <div className='h-full mx-auto text-left py-2' key={i}>
                        <div className="h-6 relative">
                          <div className="absolute font-medium left-0">
                            {skill.skillname}
                          </div>
                          <div className="absolute right-0">
                            {skill.level}
                          </div>
                        </div>
                        <div className="bg-purple-200 relative h-2">
                          <div style={{ width: skill.level }} className="bg-purple-800 h-2 left-0 absolute" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Zoom>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Resume;
