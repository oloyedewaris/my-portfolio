import React, { useState } from "react";
import { MailOutlined, MobileOutlined, HomeOutlined } from "@ant-design/icons";

const ContactUs = () => {
  const [Message, setMessage] = useState("");

  const contact = [
    {
      title: "Mail",
      description: "oloyedewaris@gmail.com",
      icon: <MailOutlined className="mr-2 text-blue-800" />
    },
    {
      title: "Mobile",
      description: "+234 8108745769",
      icon: <MobileOutlined className="mr-2 text-blue-800" />
    },
    {
      title: "Location",
      description: "Ikorodu, Lagos, Nigeria",
      icon: <HomeOutlined className="mr-2 text-blue-800" />
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
        <p className="text-lg sm:text-xl md:text-2xl text-center font-medium">
          Feel free to contact me for any work or suggestion below
        </p>
        <div className="m-auto w-5/6 sm:w-4/5 grid grid-cols-1 sm:grid-cols-2 items-start">
          <div className="mt-">
            {contact.map(({ title, description, icon }) =>
              <div className="py-2 font-bold ">
                <h2 key={title} className="flex text-lg sm:text-xl md:text-2xl items-center py-2">{icon} {title}</h2>
                <h4>{description}</h4>
              </div>
            )}
          </div>
          <div className='mt-8'>
            <textarea
              className="outline-none w-full xs:w-4/5 sm:w-3/4 md:w-full mb-8 p-2 bg-blue-100 border-2 border-blue-800 contact-input h-32 rounded text-left"
              onChange={messageHandler}
              placeholder="Instant Message"
            />
            <br />
            <a className="bg-blue-800 text-white border-2 border-blue-800 rounded-full text-center py-3 px-6 text-xl font-medium hover:bg-blue-800"
              target="_blank" rel="noopener noreferrer" href={`https://wa.me/2348108745769?text=${Message}`} onClick={clickHandler}>
              Send
            </a>
          </div>
        </div>
      </div>

    </section >
  );
};

export default ContactUs;
