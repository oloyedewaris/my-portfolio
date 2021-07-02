import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-4 px-2">
      <div className="block mx-4 md:m-2 lg:m-4 block md:flex">
        <div className="container w-full md:w-1/5 flex justify-center align-middle mx-auto py-auto">
          <img
            className="rounded-full w-40 h-40 md:w-28 md:h-28 flex items-center justify-center mx-4 md:mx-2"
            src="images/profilepic.jpg"
            alt="waris oloyede"
          />
        </div>
        <div className="w-full md:w-4/5 md:mx-2 container">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="py-4">
            I am currently a 300 level student at Obafemi Awolowo University and
            pursuing my B.Sc in Computer Science from here. I am a self taught
            Full Stack Web Developer, currently diving deeper into Mobile
            Development. I believe that to be successful in life, one needs to
            be obsessive with their dreams and keep working towards them.
          </p>
          <div>
            <div>
              <h2 className="text-2xl my-2 font-bold">Contact Details</h2>
              <p className="my-2">
                <p className="font-medium my-2">Waris Oloyede</p>
                <p>Isawo road, Ikorodu, Lagos, Nigeria</p>
                <p>+2348108745769</p>
                <p>oloyedewaris@gmail.com</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
