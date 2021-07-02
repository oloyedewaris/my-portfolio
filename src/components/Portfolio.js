import React from "react";
import SocialHub from "../Utils/images/portfolio/socialhub.png";
import Calculatify from "../Utils/images/portfolio/calculatify.png";
import Todo from "../Utils/images/portfolio/todo.png";
import Weatherlify from "../Utils/images/portfolio/weatherlify.png";
import Chatlify from "../Utils/images/portfolio/chatlify.png";
import ShoppGX from "../Utils/images/portfolio/shoppgx.png";
import { EyeOutlined, GithubOutlined } from "@ant-design/icons";

const Portfolio = () => {
  const portfolio = [
    {
      name: "SocialHub",
      description: "Web based social application built with the mern stack",
      tools: "React, Ant Design, MongoDB, Express, css3",
      imgurl: SocialHub,
      githubUrl: "https://github.com/oloyedewaris/social-space",
      viewUrl: "https://waris-social-app.herokuapp.com",
    },
    {
      name: "Calculatify",
      description: "Web calculator",
      tools: "React, css3",
      imgurl: Calculatify,
      githubUrl: "https://github.com/oloyedewaris/react-calculator-app",
      viewUrl: "https://waris-calculatify.herokuapp.com/",
    },
    {
      name: "Todo List",
      description: "A Simple todo list application",
      tools: "React, css3",
      imgurl: Todo,
      githubUrl: "https://github.com/oloyedewaris/react-todo-app",
      viewUrl: "https://waris-todolist.netlify.app",
    },
    {
      name: "ShoppGX",
      description:
        "Mern stack e-commerce application for selling phones online",
      tools: "React-hooks, Ant-design, MongoDB, Express, css3",
      imgurl: ShoppGX,
      githubUrl: "https://github.com/oloyedewaris/shoppGX",
      viewUrl: "https://shoppgx.herokuapp.com/",
    },
    {
      name: "Weather App",
      description:
        "An application that shows weather information of user's location",
      tools: "React-hooks, Open weather map api, css3",
      imgurl: Weatherlify,
      githubUrl: "https://github.com/oloyedewaris/react-weather-app",
      viewUrl: "https://waris-weatherlify.netlify.app",
    },
    {
      name: "Chatlify",
      description:
        "A chat application where users  can join a chat room  and start chatting",
      tools: "React-hooks, css3, socket.io",
      imgurl: Chatlify,
      githubUrl: "https://github.com/oloyedewaris/chatlify-client",
      viewUrl: "https://waris-chatlify.netlify.app ",
    },
  ];

  return (
    <section id="portfolio" className="bg-blue-200 mx-auto py-4">
      <div className="text-center">
        <div className="container py-2 m-auto">
          <h1 className="text-3xl mb-4 sm:mb-8 text-center font-medium">
            Check Out Some of My Works.
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mx-4 sm:mx-8 lg:mx-32 px-2 text-center place-items-center">
            {portfolio.map((item, i) => (
              <div key={i} className="my-2 px-2 shadow-lg">
                <h5 className="mb-4 font-medium">{item.name}</h5>
                <div className="inline-block w-auto relative text-center">
                  <img
                    className="rounded h-32 w-52"
                    src={`${item.imgurl}`}
                    alt="work"
                  />
                  <div className="overlay absolute inset-0 px-2 text-left">
                    <h5 className="font-medium">{item.name}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
                <p className="text-center align-center content-center h-14 sm:h-20 md:h-18 lg:h-16">
                  {item.tools}
                </p>
                <div className="">
                  <h6 style={{ textAlign: "center" }}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.githubUrl}
                    >
                      <GithubOutlined
                        style={{ fontSize: "25px", margin: "10px" }}
                        className="hover:text-blue-800"
                      />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.viewUrl}
                    >
                      <EyeOutlined
                        style={{ fontSize: "25px", margin: "10px" }}
                        className="hover:text-blue-800"
                      />
                    </a>
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
