import React, { useState } from "react";
import { CloudSyncOutlined, LaptopOutlined, TeamOutlined, DownOutlined, UpOutlined, MobileOutlined } from "@ant-design/icons"

const Resume = () => {
  const [isOpen, setOpen] = useState({
    frame: false,
    ui: false,
    devOps: false
  })
  const work = [
    {
      icon: <LaptopOutlined />,
      service: "Web development",
      specialization:
        `I build, design and develop responsive and interactive layout for websites/web-apps for desktops, tablets and 
        mobile devices with full stack functionality`,
    },
    {
      icon: <MobileOutlined />,
      service: "Mobile development",
      specialization:
        `With my Mobile development expertise and experience, I am able to translate code into user-friendly and 
        functional applications. Contribute to the design, build, testing, support and release of apps`
    },
    {
      icon: <TeamOutlined />,
      service: "Building Components and Working in Team",
      specialization:
        "I am also good at building and managing React-based components, plugins, themes and layouts and also working in team",
    }
  ];

  const skill = [
    {
      name: "Frameworks/Languages",
      alias: 'frame',
      skills: [
        {
          skillname: "JavaScript (ES6+)",
          level: "87%"
        },
        {
          skillname: " ReactJS/React Native",
          level: "92%"
        },
        {
          skillname: "NextJS",
          level: "68%"
        },
        {
          skillname: "HTML5/CSS3/LESS",
          level: "67%"
        },
        {
          skillname: " NodeJS/ExpressJS",
          level: "58%"
        }
      ]
    },
    {
      name: "UI Libraries/Tools",
      alias: 'ui',
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
      name: "DevOps/Web Services",
      alias: 'devOps',
      skills: [
        {
          skillname: "WebSockets/REST/Socket.io",
          level: "58%"
        },
        {
          skillname: " MongoDB/Mongoose",
          level: "72%"
        },
        {
          skillname: "Git/Github/FireBase",
          level: "60%"
        },
      ]
    }
  ];

  const handleCollapse = (alias) => {
    if (alias === 'frame') setOpen({ ui: false, devOps: false, frame: !isOpen[alias] })
    else if (alias === 'ui') setOpen({ devOps: false, frame: false, ui: !isOpen[alias] })
    else if (alias === 'devOps') setOpen({ frame: false, ui: false, devOps: !isOpen[alias] })
  }

  return (
    <section id="resume" className="py-4 mx-auto sm:px-10 md:px-28 lg:px-32 xl:px-40">
      <div className="mx-2 sm:mx-4 md:mx-12 sm:w-5/6 text-center block py-4 sm:py-8 sm:flex sm:justify-center">
        <div className="sm:w-1/4 sm:text-left mb-4 inline-block text-center">
          <p className="text-blue-800 text-center text-2xl font-medium underline">
            Services
          </p>
        </div>
        <div className=" flex sm:w-4/5 flex flex-col justify-center text-center sm:text-left px-2 sm:px-4">
          {work.map((item, i) => {
            return (
              <div className="block px-2 xs:px-4 py-2 my-4 hover:shadow rounded border-2" key={Math.random()}>
                <div className="text-xl text-blue-800">{item.icon}</div>
                <h3 className="text-xl font-medium">{item.service}</h3>
                <p className="">{item.specialization}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-2 sm:mx-4 md:mx-12 sm:w-5/6 text-center block py-4 sm:py-8 sm:flex sm:justify-center">
        <div className="sm:w-1/4 sm:text-left mb-4 inline-block text-center">
          <p className="text-blue-800 text-center text-2xl font-medium underline">
            Skills
          </p>
        </div>
        <div className="px-2 sm:px-8 sm:w-4/5 mx-auto py-auto">
          <div className="my-2">
            {skill.map((category) => (
              <div key={Math.random()}>
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleCollapse(category.alias)}
                  className="my-4 text-blue-800 w-full flex justify-between items-center mx-auto">
                  <span className='text-xl font-medium'>{category.name}</span>
                  {isOpen[category.alias] ? <DownOutlined /> : <UpOutlined />}
                </div>
                <div>{category.skills.map((item, i) => (
                  <>
                    {isOpen[category.alias] ?
                      <div className='skills_transition mx-auto text-left py-2' key={Math.random()}>
                        <div className="h-6 relative">
                          <div className="absolute font-medium left-0">
                            {item.skillname}
                          </div>
                          <div className="absolute right-0">
                            {item.level}
                          </div>
                        </div>
                        <div className="bg-blue-200 relative h-2">
                          <div style={{ width: item.level }} className="bg-blue-800 h-2 left-0 absolute" />
                        </div>
                      </div> :
                      null}
                  </>
                ))}
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
