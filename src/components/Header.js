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

const Header = (props) => {
  const socialLinks = [
    {
      name: "instagram",
      url: "https://www.instagram.com//temi_topzee",
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
    },
    {
      name: "whatsapp",
      url: "https://wa.me/2348108745769?text=Hello%20Waris",
      icon: <WhatsAppOutlined />,
    },
  ];

  return (
    <React.Fragment>
      <header id="waris" className="w-full header-background">
        <div className="h-20"></div>
        <div className="fixed left-0 z-10 nav bg-blue-900 top-0 right-0 flex justify-center">
          <nav className="h-18 m-auto flex py-3 mx-4 w-2/4 justify-center md:w-3/4">
            <a
              href="#"
              className=" mx-8 text-center px-4 font-medium text-3xl w-1/5 mx-auto"
            >
              Waris
            </a>
            <div className=" w-3/4 m-auto mx-12 px-4 flex text-center">
              <div className="mx-auto font-medium py-2 hover:bg-blue-600 px-4 py-2 rounded">
                <a href="#about">About</a>
              </div>
              <div className="mx-auto font-medium py-2 hover:bg-blue-600 px-4 py-2 rounded">
                <a href="#resume">Resume</a>
              </div>
              <div className="mx-auto font-medium py-2 hover:bg-blue-600 px-4 py-2 rounded">
                <a href="#portfolio">Portfolio</a>
              </div>
              <div className="mx-auto  font-medium py-2 hover:bg-blue-600 px-4 py-2 rounded">
                <a href="#contact">Contact</a>
              </div>
            </div>
          </nav>
        </div>
        <div className="block text-center py-8 mx-auto w-5/6 lg:w-3/5 md:4/6">
          <div>
            <h1 className="align-top head text-6xl mx-auto my-2 font-mono">
              Waris Oloyede
            </h1>
            <h3 className="align-middle font-sans mx-auto px-auto text-center colors-coolGrey-200">
              <Typist cursor={{ show: false }} startDelay={2500}>
                <p className="border-b-1 border-blue-700 text-2xl my-4">
                  I am a Full Stack Mern Developer. I enjoy building
                  applications ranging from simple front-end apps to full-stack
                  apps with the help of some latest technologies in my free
                  time.
                </p>
              </Typist>
            </h3>
            <hr />
            <ul className="flex justify-center">
              {socialLinks.map((link) => (
                <div
                  className="text-center w1/5 mx-1 my-4 px-2 py-2"
                  key={link.name}
                >
                  <a
                    className="text-4xl hover:text-blue-800"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
