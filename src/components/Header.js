import React from "react";
import {
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  GithubOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import Typist from "react-typist";

const Header = ({ color }) => {
  const socialLinks = [
    {
      name: "instagram",
      url: "https://www.instagram.com/waris_oloyede/",
      icon: <InstagramOutlined />,
    },
    {
      name: "facebook",
      url: "https://www.facebook.com/waris.oloyede.5",
      icon: <FacebookOutlined />,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/waris-oloyede-26482319b",
      icon: <LinkedinOutlined />,
    },
    {
      name: "github",
      url: "https://github.com/oloyedewaris",
      icon: <GithubOutlined />,
    },
    {
      name: "twitter",
      url: "https://mobile.twitter.com/waris_oloyede",
      icon: <TwitterOutlined />,
    }
  ];

  return (
    <React.Fragment>
      <header id="waris" className="header-background flex justify-around flex-col">
        <div className={`z-10 hidden nav fixed left-0 top-0 right-0 md:flex justify-center ${color}`}>
          <nav className="h-16 flex py-3 mx-4 sm:w-2/4 justify-center md:w-3/4">
            <a
              href="#"
              className="text-center px-4 text-3xl sm:w-1/4 hover:text-blue-800 mx-auto"
            >
              Waris
            </a>
            <div className="w-3/4 m-auto mx-12 px-4 flex text-center">
              <a href="#about" className="text-2xl mx-auto py-2 hover:text-blue-800 px-4 py-2 rounded">
                About
              </a>
              <a href="#resume" className="text-2xl mx-auto py-2 hover:text-blue-800 px-4 py-2 rounded">
                Resume
              </a>
              <a href="#portfolio" className="text-2xl mx-auto py-2 hover:text-blue-800 px-4 py-2 rounded">
                Portfolio
              </a>
              <a href="#contact" className="text-2xl mx-auto py-2 hover:text-blue-800 px-4 py-2 rounded">
                Contact
              </a>
            </div>
          </nav>
        </div>
        <div className="inline-block flex justify-center items-center flex-col h-full text-center md:pt-10 mx-2 xs:mx-auto xs:w-5/6 lg:w-3/5 md:4/6">
          <div className="text-5xl sm:text-6xl  mx-auto my-2">
            WARIS OLOYEDE
          </div>
          <h3 className="font-sans px-auto text-center text-coolGrey-200">
            <Typist cursor={{ show: false }} startDelay={2500}>
              <p className="border-b-1 border-blue-800 text-xl py-6">
                React, Full-Stack Developer. I enjoy building
                applications ranging from simple front-end and mobile apps to full-stack
                apps with the help of some latest technologies.
              </p>
            </Typist>
          </h3>
          <hr />
          <p className="flex justify-center">
            {socialLinks.map((link) => (
              <span className="text-center mx-2 sm:mx-4 my-4 py-2" key={link.name}>
                <a
                  className="text-4xl sm:text-5xl hovertext-blue-800"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              </span>
            ))}
          </p>
        </div>
      </header>

    </React.Fragment>
  );
};

export default Header;