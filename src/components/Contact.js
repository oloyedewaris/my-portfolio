import React, { useState } from "react";
import { MailOutlined, MobileOutlined, HomeOutlined } from "@ant-design/icons";
import { Bounce, Fade } from "react-reveal";

const ContactUs = () => {
  const [Message, setMessage] = useState("");

  const contact = [
    {
      title: "Mail",
      description: "oloyedewaris@gmail.com",
      icon: <MailOutlined className="mr-2 text-purple-800" />
    },
    {
      title: "Mobile",
      description: "+234 8108745769",
      icon: <MobileOutlined className="mr-2 text-purple-800" />
    },
    {
      title: "Location",
      description: "Ikorodu, Lagos, Nigeria",
      icon: <HomeOutlined className="mr-2 text-purple-800" />
    }
  ]

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const clickHandler = () => {
    Message.replace(" ", "%20");
  };

  return (
    <section id="contact">
      <div className="my-10 sm:px-6 md:px-12 lg:px-24 px-auto">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-4">
          Contact Me
        </h2>
        <div className="mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="px-8">
            <p className="md:text-lg text-left mb-8">
              We should definitely work together. Feel free to contact me for any work or suggestion
            </p>
            {contact.map(({ title, description, icon }, i) =>
              <Fade delay={1000 * (i + 0.3)} duration={1500} left>
                <div className="py-2">
                  <h2 key={title} className="font-bold flex md:text-lg items-center">{icon} {title}</h2>
                  <p className="text-sm">{description}</p>
                </div>
              </Fade>
            )}
          </div>
          <Bounce duration={2000} top>
            <div className='w-full shadow-xl hover:shadow-2xl p-6'>
              <input placeholder="Name" type='text' className="w-full mb-4 p-2 border-b-2 border-purple-800 outline-none text-left" />
              <input placeholder="Phone" type='tel' className="w-full mb-4 p-2 border-b-2 border-purple-800 outline-none text-left" />
              <input placeholder="E-mail" type='email' className="w-full mb-4 p-2 border-b-2 border-purple-800 outline-none text-left" />
              <textarea
                className="w-full mb-4 p-2 border-2 border-purple-800 outline-none h-32 text-left"
                onChange={messageHandler}
                placeholder="Message"
              />
              <a className="bg-purple-800 hover:bg-white hover:text-purple-800 text-white border-2 border-purple-800 text-center py-2 px-6"
                target="_blank" rel="noopener noreferrer" href={`https://wa.me/2348108745769?text=${Message}`} onClick={clickHandler}>
                Send
              </a>
            </div>
          </Bounce>
        </div>
      </div>
    </section >
  );
};

export default ContactUs;
