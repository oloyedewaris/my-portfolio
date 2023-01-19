import React from "react";
import SocialHub from "../assets/images/portfolio/socialhub.png";
import Calculatify from "../assets/images/portfolio/calculatify.png";
import Todo from "../assets/images/portfolio/todo.png";
import Weatherlify from "../assets/images/portfolio/weatherlify.png";
import Chatlify from "../assets/images/portfolio/chatlify.png";
import ShoppGX from "../assets/images/portfolio/shoppgx.png";
import Goveera from "../assets/images/portfolio/goveera.png";
import MyBudget from "../assets/images/portfolio/mybudget.png";
import { EyeOutlined, GithubOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";

const Portfolio = () => {
  const portfolio = [
    {
      name: "Goveera",
      description: `Governance monitoring system for organizations. Built as a startup project at AfricaHacks hackathon`,
      imgurl: Goveera,
      githubUrl: "https://github.com/oloyedewaris/",
      viewUrl: "https://gov-tech.herokuapp.com",
    },
    {
      name: "MyBudget",
      description: `MyBudget is a mobile application for managing budgets and tracking expenses`,
      imgurl: MyBudget,
      githubUrl: "https://github.com/oloyedewaris/mybudget",
      viewUrl: "https://play.google.com/store/apps/details?id=com.waris.mybudget",
    },
    {
      name: "SocialHub",
      description: `SocialHub is Web based social application users can share thoughts. Built with the mern stack.`,
      imgurl: SocialHub,
      githubUrl: "https://github.com/oloyedewaris/social-space",
      viewUrl: "https://waris-social-app.herokuapp.com",
    },
    {
      name: "ShoppGX",
      description: `A Mern stack e-commerce application for selling online products.`,
      imgurl: ShoppGX,
      githubUrl: "https://github.com/oloyedewaris/shoppGX",
      viewUrl: "https://shoppgx.herokuapp.com/",
    },
    {
      name: "Chatlify Web",
      description: "Chatlify is a live-messaging web application",
      imgurl: Chatlify,
      githubUrl: "https://github.com/oloyedewaris/chatlify-client",
      viewUrl: "https://waris-chatlify.netlify.app",
    },
    {
      name: "Calculatify",
      description: "A Web calculator with simple and basic functionality",
      imgurl: Calculatify,
      githubUrl: "https://github.com/oloyedewaris/calculatify",
      viewUrl: "https://calculatify.netlify.app/",
    },
    {
      name: "Todo List",
      description: "A Simple todo list application for creating, deleting and editing todos",
      imgurl: Todo,
      githubUrl: "https://github.com/oloyedewaris/react-todo-app",
      viewUrl: "https://waris-todolist.netlify.app",
    },
    {
      name: "Weatherlify App",
      description: `An application that shows weather information of user's entered location.`,
      imgurl: Weatherlify,
      githubUrl: "https://github.com/oloyedewaris/react-weather-app",
      viewUrl: "https://waris-weatherlify.netlify.app/",
    },
  ];


  return (
    <section id="portfolio" className="mx-auto py-4 px-8 w-full sm:w-4/5">
      <div className="container py-2 m-auto">
        <h1 className="text-6xl mb-4 sm:mb-8 text-center font-medium flex flex-row justify-center items-center">
          <Fade left>Recent </Fade> <Fade right> <span className='text-purple-800'> Works</span></Fade>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 justify-center items-center">
          {portfolio.map((item, i) => (
            <Roll left>
              <div key={i} className="m-4 w-full mx-auto px-2" style={{ maxWidth: '20rem' }}>
                <h1 className="mb-2 text-lg font-medium text-purple-800">{item.name}</h1>
                <div className='relative img_zoom h-48 w-full'>
                  <img
                    className="h-full w-full"
                    src={`${item.imgurl}`}
                    alt="my work"
                  />
                  <div className="opacity-0 bg-black hover:opacity-80 h-full w-full px-6 py-4 flex flex-col justify-between items-between absolute text-white inset-0">
                    <p className="font-semibold">{item.description}</p>
                    <div className="flex flex-row justify-between items-center">
                      <a target="_blank" rel="noopener noreferrer" href={item.githubUrl} className='ml-4 hover:text-purple-800'>
                        <GithubOutlined style={{ fontSize: 25 }} />
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href={item.viewUrl} className='ml-4 hover:text-purple-800'>
                        <EyeOutlined style={{ fontSize: 25 }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Roll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
