import React, { useState } from "react";
import SocialHub from "../Utils/images/portfolio/socialhub.png";
import Calculatify from "../Utils/images/portfolio/calculatify.png";
import Todo from "../Utils/images/portfolio/todo.png";
import Weatherlify from "../Utils/images/portfolio/weatherlify.png";
import Chatlify from "../Utils/images/portfolio/chatlify.png";
import ShoppGX from "../Utils/images/portfolio/shoppgx.png";
import Goveera from "../Utils/images/portfolio/goveera.png";
import MyBudget from "../Utils/images/portfolio/mybudget.png";
import { EyeOutlined, GithubOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Modal from './Modal'

const Portfolio = () => {
  const [item, setItem] = useState(null)

  const portfolio = [
    {
      name: "Goveera",
      description:
        `A robust governance monitoring system for organizations. Built as a startup project at AfricaHacks hackathon`,
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
    {
      name: "MyBudget",
      description:
        `MyBudget is a mobile application for managing budgets and tracking expenses`,
      tools: [
        "React",
        "React Native",
        "React navigation",
        "Android",
      ],
      imgurl: MyBudget,
      githubUrl: "https://github.com/oloyedewaris/mybudget",
      viewUrl: "https://play.google.com/store/apps/details?id=com.waris.mybudget",
    },
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
        authentication, upload and deleting of products, order receipts, saved product, and also a live payment system`,
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
      viewUrl: "https://waris-weatherlify.netlify.app/",
    },
  ];

  const handleDetails = (item) => {
    setItem(item)
  }

  return (
    <section id="portfolio" className="mx-auto py-4 sm:px-12 lg:px-32 xl:px-60">
      <div className="text-center">
        <div className="container py-2 m-auto">
          <h1 className="text-3xl mb-4 sm:mb-8 text-center text-blue-800 font-medium">
            Check Out Some of My Works.
          </h1>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-center items-center"
          >
            {portfolio.map((item, i) => (
              <div key={i} className="m-4 w-full mx-auto px-2 " style={{ maxWidth: '20rem' }}>
                <h1 className="mb-2 text-lg font-medium text-blue-800">{item.name}</h1>
                <div className='relative img_zoom h-44 w-full'>
                  <img
                    className="h-full w-full rounded"
                    src={`${item.imgurl}`}
                    alt="my work"
                  />
                  <div className="img_overlay h-full w-full rounded px-4 py-2 flex justify-between items-end absolute text-white inset-0">
                    <button className='flex-row flex items-center hover:text-blue-800'
                      onClick={() => handleDetails(item)}>
                      Details<ArrowRightOutlined style={{ marginLeft: 5 }} />
                    </button>
                    <div >
                      <a target="_blank" rel="noopener noreferrer" href={item.githubUrl} className='ml-4 hover:text-blue-800'>
                        <GithubOutlined style={{ fontSize: 20 }} />
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href={item.viewUrl} className='ml-4 hover:text-blue-800'>
                        <EyeOutlined style={{ fontSize: 20 }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {item &&
        <Modal item={item} setItem={setItem} />
      }
    </section>
  );
};

export default Portfolio;
