import * as React from "react";
import {
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  GithubOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Typewriter } from "react-simple-typewriter";

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
          <nav className="w-full h-16 flex py-3 flex-row items-center justify-between px-12">
            <a
              href="#"
              className="text-3xl hover:text-purple-800"
            >
              Waris
            </a>
            <div className="flex flex-row text-center">
              <a href="#about" className="text-lg hover:text-purple-800 pl-8 py-2 rounded">
                About
              </a>
              <a href="#resume" className="text-lg hover:text-purple-800 pl-8 py-2 rounded">
                Resume
              </a>
              <a href="#portfolio" className="text-lg hover:text-purple-800 pl-8 py-2 rounded">
                Portfolio
              </a>
              <a href="#contact" className="text-lg hover:text-purple-800 pl-8 py-2 rounded">
                Contact
              </a>
            </div>
          </nav>
        </div>
        <div className="flex justify-center items-center flex-col h-full text-center md:pt-10 mx-auto xs:w-5/6 lg:w-3/5 md:4/6">
          <div className="text-5xl md:text-7xl sm:text-8xl  mx-auto my-2">
            WARIS OLOYEDE
          </div>
          <h3 className="font-sans text-center text-coolGrey-200">
            <p className="px-2 md:text-xl py-6">Hello, I am  Waris Oloyede. A</p>
            <span className="text-purple-700 text-2xl md:text-4xl">
              <Typewriter words={[
                'Software Engineer',
                'React Native Developer',
                'React Developer',
                'JavaScript Developer',
                'Node.JS Developer',
                'Next.JS Developer'
              ]}
                cursor
                cursorStyle='_'
                delaySpeed={1500}
                deleteSpeed={70}
                typeSpeed={100}
                loop />
            </span>
          </h3>
          <hr />
          <p className="flex justify-center">
            {socialLinks.map((link) => (
              <span className="text-center mx-2 sm:mx-4 my-4 py-2" key={link.name}>
                <a
                  className="text-4xl sm:text-5xl hovertext-purple-800"
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