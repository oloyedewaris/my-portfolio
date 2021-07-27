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
      <header id="waris" className="header-background flex justify-center flex-col">
        <div className="z-10 nav bg-blue-900 fixed left-0 top-0 right-0 flex justify-center">
          <nav className="h-18 flex py-3 mx-4 w-full sm:w-2/4 justify-center md:w-3/4">
            <a
              href="#"
              className=" mx-8 text-center px-4 font-bold text-3xl sm:w-1/4 mx-auto"
            >
              Waris
            </a>
            <div className="media-nav w-3/4 m-auto mx-12 px-4 flex text-center">
              <a href="#about" className="mx-auto font-bold py-2 hover:bg-blue-600 px-4 py-2 rounded">
                About
              </a>
              <a href="#resume" className="mx-auto font-bold py-2 hover:bg-blue-600 px-4 py-2 rounded">

                Resume
              </a>
              <a href="#portfolio" className="mx-auto font-bold py-2 hover:bg-blue-600 px-4 py-2 rounded">
                Portfolio
              </a>
              <a href="#contact" className="mx-auto font-bold py-2 hover:bg-blue-600 px-4 py-2 rounded">
                Contact
              </a>
            </div>
          </nav>
        </div>
        <div className="inline-block text-center mt-8 py-8 mx-2 xs:mx-auto w-full xs:w-5/6 lg:w-3/5 md:4/6">
          <h1 className="align-top head text-6xl mx-auto my-2 font-mono">
            Waris Oloyede
          </h1>
          <h3 className="font-sans px-auto text-center text-coolGrey-200">
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
          <div className="flex justify-center">
            {socialLinks.map((link) => (
              <p className="text-center mx-1 xs:mx-2 my-4 py-2 sm:mx-4" key={link.name}>
                <a
                  className="text-4xl hover:text-blue-800"
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

// 03053875757059711 