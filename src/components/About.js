import React from "react";
import ProfileImg from "../Utils/images/profilepic.jpg";
import resume from "../Utils/Waris_resume.pdf";

const About = () => {
  return (
    <section id="about" className="bg-blue-400 py-4 px-2">
      <div className="block mx-4 md:m-2 lg:m-4 block md:flex">
        <div className="container w-full md:w-1/5 flex justify-center align-middle mx-auto py-auto">
          <img
            className="rounded-full w-40 h-40 md:w-28 md:h-28 flex items-center justify-center mx-4 md:mx-2"
            src={ProfileImg}
            alt="waris oloyede"
          />
        </div>
        <div className="w-full md:w-4/5 md:mx-2 container">
          <h2 className="text-3xl font-medium">About Me</h2>
          <p className="py-4 text-xl">
            I am currently a 300 level student at Obafemi Awolowo University and
            pursuing my B.Sc in Computer Science from here. I am a self taught
            Full Stack Web Developer, currently diving deeper into Mobile
            Development. I believe that to be successful in life, one needs to
            be obsessive with their dreams and keep working towards them.
          </p>
          <h2 className="text-3xl font-medium">My Expertise</h2>
          <p className="py-4 text-xl">
            My expertise is front-end development,
            Building scalable components, layouts, user interfaces animations and many more features as a React Developer.
            I also have Back-end development with Node JS, Express JS and MongoDB.
          </p>
          <div className="py-auto inline-block text-left my-4">
            <a href={resume} download="Waris-resume.pdf">
              <button className="rounded-full text-2xl text-white font-medium px-6 py-2 bg-blue-700 hover:bg-blue-800 hover:text-blue-200">
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
