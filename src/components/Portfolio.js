import React from "react";
import SocialHub from "../Utils/images/portfolio/socialhub.png";
import Calculatify from "../Utils/images/portfolio/calculatify.png";
import Todo from "../Utils/images/portfolio/todo.png";
import Weatherlify from "../Utils/images/portfolio/weatherlify.png";
import Chatlify from "../Utils/images/portfolio/chatlify.png";
import ShoppGX from "../Utils/images/portfolio/shoppgx.png";
import Goveera from "../Utils/images/portfolio/goveera.png";
import { EyeOutlined, GithubOutlined } from "@ant-design/icons";

const Portfolio = () => {
  const portfolio = [
    {
      name: "SocialHub",
      description:
        `SocialHub is Web based social application users can share posts, likes and comments and also follow 
        each other built with the mern stack.`,
      tools: [
        "React",
        "Redux",
        "Ant Design",
        "Node.js",
        "MongoDB",
        "Express",
        "CSS"
      ],
      imgurl: SocialHub,
      githubUrl: "https://github.com/oloyedewaris/social-space",
      viewUrl: "https://waris-social-app.herokuapp.com",
    },
    {
      name: "ShoppGX",
      description:
        `A Mern stack e-commerce application for selling laptops online. ShoppGX also includes features like user 
        authentication, upload and deleting of products, order receipts, saved product, and also a live payment 
        system which is just as sample`,
      tools: [
        "React-hooks",
        "Redux",
        "Ant design",
        "Node.js",
        "MongoDB",
        "Express",
        "CSS"
      ],
      imgurl: ShoppGX,
      githubUrl: "https://github.com/oloyedewaris/shoppGX",
      viewUrl: "https://shoppgx.herokuapp.com/",
    },
    {
      name: "Chatlify Web",
      description:
        "Chatlify is a web chat application where users can join a chat room  and start live-messaging",
      tools: [
        "React-hooks",
        "CSS",
        "Node.js",
        "Express",
        "Socket.io"
      ],
      imgurl: Chatlify,
      githubUrl: "https://github.com/oloyedewaris/chatlify-client",
      viewUrl: "https://waris-chatlify.netlify.app",
    },
    {
      name: "Calculatify",
      description: "A Web calculator with simple and basic functionality",
      tools: [
        "React",
        "CSS"
      ],
      imgurl: Calculatify,
      githubUrl: "https://github.com/oloyedewaris/calculatify",
      viewUrl: "https://calculatify.netlify.app/",
    },
    {
      name: "Todo List",
      description: "A Simple todo list application for creating, deleting and editing todos",
      tools: [
        "React",
        "CSS"
      ],
      imgurl: Todo,
      githubUrl: "https://github.com/oloyedewaris/react-todo-app",
      viewUrl: "https://waris-todolist.netlify.app",
    },
    {
      name: "Weatherlify App",
      description:
        `An application that shows weather information of user's entered location. Weatherlify uses open 
        weather map api to fetch live weather information`,
      tools: [
        "React-hooks",
        "Open-weather-map api",
        "CSS"
      ],
      imgurl: Weatherlify,
      githubUrl: "https://github.com/oloyedewaris/react-weather-app",
      viewUrl: "https://waris-weatherlify.netlify.app",
    },
    {
      name: "Goveera",
      description:
        `A governance monitoring system for organizations.`,
      tools: [
        "React",
        "Redux",
        "Ant Design",
        "Node.js",
        "MongoDB",
        "Express",
        "CSS"
      ],
      imgurl: Goveera,
      githubUrl: "https://github.com/oloyedewaris/",
      viewUrl: "https://gov-tech.herokuapp.com",
    },
  ];

  return (
    <section id="portfolio" className="bg-blue-100 mx-auto py-4 sm:px-12 md:px-36">
      <div className="text-center">
        <div className="container py-2 m-auto">
          <h1 className="text-3xl mb-4 sm:mb-8 text-center text-blue-700 font-medium">
            Check Out Some of My Works.
          </h1>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-2 xs:mx-4 sm:mx-8 lg:mx-20 px-2"
          >
            {portfolio.map((item, i) => (
              <div key={i} className="my-2 px-2 img-container">
                <h5 className="mb-4 text-xl text-blue-500">{item.name}</h5>
                <div className="inline-block relative text-center">
                  <img
                    className="rounded h-32 w-60"
                    src={`${item.imgurl}`}
                    alt="my work"
                  />
                  <div className="rounded flex justify-center items-center overlay absolute inset-0 grid grid-cols-2 px-1 w-full h-100">
                    <a target="_blank" rel="noopener noreferrer" href={item.githubUrl} className='hover:text-blue-800 '>
                      <GithubOutlined style={{ fontSize: "25px" }} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={item.viewUrl} className='hover:text-blue-800 '>
                      <EyeOutlined style={{ fontSize: "25px" }} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div >
    </section >
  );
};

export default Portfolio;
