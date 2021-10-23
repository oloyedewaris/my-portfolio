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

const Header = () => {
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
    },
    {
      name: "whatsapp",
      url: "https://wa.me/2348108745769?text=Hello%20Waris",
      icon: <WhatsAppOutlined />,
    },
  ];

  return (
    <React.Fragment>
      <header id="waris" className="header-background flex justify-around flex-col">
        <div className="media-nav z-10 bg-blue-900 nav fixed left-0 top-0 right-0 flex justify-center">
          <nav className="h-16 text-white flex py-3 mx-4 sm:w-2/4 justify-center md:w-3/4">
            <a
              href="#"
              className="text-center px-4 text-3xl sm:w-1/4 hover:text-blue-600 mx-auto"
            >
              Waris
            </a>
            <div className="w-3/4 m-auto mx-12 px-4 flex text-center">
              <a href="#about" className="text-2xl mx-auto py-2 hover:text-blue-600 px-4 py-2 rounded">
                About
              </a>
              <a href="#resume" className="text-2xl mx-auto py-2 hover:text-blue-600 px-4 py-2 rounded">
                Resume
              </a>
              <a href="#portfolio" className="text-2xl mx-auto py-2 hover:text-blue-600 px-4 py-2 rounded">
                Portfolio
              </a>
              <a href="#contact" className="text-2xl mx-auto py-2 hover:text-blue-600 px-4 py-2 rounded">
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
              <p className="border-b-1 border-blue-700 text-xl py-6">
                I am a React Full-Stack(Mern) Developer. I enjoy building
                applications ranging from simple front-end apps to full-stack
                apps with the help of some latest technologies.
              </p>
            </Typist>
          </h3>
          <hr />
          <div className="flex justify-center">
            {socialLinks.map((link) => (
              <p className="text-center mx-2 my-4 py-2 sm:mx-4" key={link.name}>
                <a
                  className="text-3xl sm:text-4xl hover:text-blue-800"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              </p>
            ))}
          </div>
        </div>
      </header>

    </React.Fragment>
  );
};

export default Header;