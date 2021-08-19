import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import ProfileImg from "../utils/images/profilepic.jpg";
import resume from "../utils/Waris_resume.pdf";

const About = () => {
  return (
    <section id="about" className="bg-blue-400 py-4 px-2">
      <div className="block mx-4 md:m-2 lg:m-4 block md:flex sm:px-12 md:px-36">
        <div className="container w-full md:w-1/5 flex justify-center align-middle mx-auto py-auto">
          <img
            className="rounded-full w-40 h-40 md:w-28 md:h-28 flex items-center justify-center mx-4 md:mx-2"
            src={ProfileImg}
            alt="waris oloyede"
          />
        </div>
        <div className="w-full md:w-4/5 md:mx-2 container">
          <h2 className="text-3xl mt-4 font-medium">About Me</h2>
          <p className="py-4 sm:text-xl">
            I am a 300 level student at Obafemi Awolowo University and
            pursuing my B.Sc in Computer Science from here. I am a self taught
            Full Stack Web Developer, diving deeper into Mobile
            Development. I believe that to be successful in life, one needs to
            be obsessive with their dreams and keep working towards them.
          </p>
          <h2 className="text-3xl mt-4  font-medium">My Expertise</h2>
          <p className="py-4 sm:text-xl">
            My expertise is front-end development,
            Building scalable components, layouts, user interfaces animations and many more features as a React Developer.
            I also have Back-end development skill and experience with Node JS, Express JS and MongoDB.
          </p>
          <div className="py-auto inline-block text-left my-4">
            <a href={resume} download="Waris-resume.pdf">
              <button className="rounded-full flex justify-center items-center text-xl text-blue-900 font-medium px-4 py-2 border-2 border-blue-900 hover:bg-blue-900 hover:text-white sm:text-2l">
                <DownloadOutlined style={{ fontSize: "22px", marginRight: "5px" }} />
                Download resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
