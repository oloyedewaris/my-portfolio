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
              <a href="#about" className="text-2xl mx-auto hover:text-blue-800 px-4 py-2 rounded">
                About
              </a>
              <a href="#resume" className="text-2xl mx-auto hover:text-blue-800 px-4 py-2 rounded">
                Resume
              </a>
              <a href="#portfolio" className="text-2xl mx-auto hover:text-blue-800 px-4 py-2 rounded">
                Portfolio
              </a>
              <a href="#contact" className="text-2xl mx-auto hover:text-blue-800 px-4 py-2 rounded">
                Contact
              </a>
            </div>
          </nav>
        </div>
        <div className="flex justify-center items-center flex-col h-full text-center md:pt-10 mx-auto xs:w-5/6 lg:w-3/5 md:4/6">
          <div className="text-7xl sm:text-8xl  mx-auto my-2">
            WARIS OLOYEDE
          </div>
          <h3 className="font-sans text-center text-coolGrey-200">
            <Typist avgTypingDelay={50} cursor={{ show: false }} startDelay={2500}>
              <p className="px-2 text-xl py-6">Hello, I am  WARIS OLOYEDE. I am a</p>
              <span className="text-purple-700 text-3xl">Software Developer</span>
              <Typist.Backspace count={18} delay={1000} />
              <span className="text-purple-700 text-3xl">JavaScript Developer</span>
              <Typist.Backspace count={20} delay={1000} />
              <span className="text-purple-700 text-3xl">React Developer</span>
              <Typist.Backspace count={15} delay={1000} />
              <span className="text-purple-700 text-3xl">React Native Developer</span>
              <Typist.Backspace count={22} delay={1000} />
              <span className="text-purple-700 text-3xl">Node.JS Developer</span>
              <Typist.Backspace count={17} delay={1000} />
              <span className="text-purple-700 text-3xl">Next.JS Developer</span>
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