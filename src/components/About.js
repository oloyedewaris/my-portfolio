import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import ProfileImg from "../assets/images/profilepic.jpg";
import resume from "../assets/Waris_Oloyede.pdf";
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <section id="about" className="py-4 px-2">
      <div className="block md:flex flex-row justify-between items-center w-full sm:w-4/5 mx-auto">
        <Fade left>
          <div className="container w-full md:w-1/5 flex justify-center items-center mx-auto py-auto md:mx-8">
            <img
              className="rounded-full w-40 h-40 object-cover sm:w-28 sm:h-28 md:w-32 md:h-32"
              src={ProfileImg}
              alt="waris oloyede"
            />
          </div>
        </Fade>
        <Fade duration={2500} right>
          <div className=" px-4 w-full md:w-4/5 md:mx-2 container">
            <h2 className="text-4xl md:text-6xl mt-4 font-medium">About <span className="text-purple-800">Me</span></h2>
            <p className="py-4 text-lg">
              I am a passionate and highly skilled software engineer with over four years of experience specializing in 
              a wide range of technologies, including React, React Native, and Node.js. My robust understanding of the 
              software project lifecycle, from initial planning and design to deployment and maintenance, has equipped
              me with the ability to deliver high-quality solutions efficiently. My technical proficiency is 
             complemented by excellent interpersonal skills, enabling seamless collaboration with cross-functiona
              teams and effective communication with stakeholders. I thrive in dynamic environments, continually
             seeking opportunities to learn and grow. Driven by an unwavering commitment to excellence, I
            believe that success is achieved through relentless dedication to one's dreams and persistent effort toward their realization.
            </p>
            <div className="py-auto inline-block text-left my-4">
              <a href={resume} download="Waris-resume.pdf">
                <button className="hover:transition-colors rounded-full flex justify-center items-center text-xl font-medium px-4 py-2 border-2 border-purple-800 bg-purple-800 hover:bg-white text-white hover:text-purple-800 sm:text-2l">
                  <DownloadOutlined style={{ fontSize: "22px", marginRight: "5px" }} />
                  Download resume
                </button>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
