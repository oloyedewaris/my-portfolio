import React, { useState } from "react";
import { MailOutlined, MobileOutlined, HomeOutlined } from "@ant-design/icons";

const ContactUs = () => {
  const [Message, setMessage] = useState("");

  const contact = [
    {
      title: "Mail",
      description: "oloyedewaris@gmail.com",
      icon: <MailOutlined className="mr-2" />
    },
    {
      title: "Mobile",
      description: "+234 8108745769",
      icon: <MobileOutlined className="mr-2" />
    },
    {
      title: "Location",
      description: "Ikorodu, Lagos, Nigeria",
      icon: <HomeOutlined className="mr-2" />
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
      <div className="px-4 md:px-18 sm:px-12 lg:px-36 align-center inline-block">
        <div className="py-4 sm:py-2 m-auto">
          <div className="py-2 flex justify-center">
            <MailOutlined className="w-1/5 font-bold text-5xl xs:text-6xl sm:text-8xl my-auto py-2" />
            <p className="w-4/5 text-lg sm:text-xl md:text-2xl text-center m-auto font-medium">
              Feel free to contact me for any work or suggestion below
            </p>
          </div>
          <textarea
            className="w-4/5 sm:w-3/5 lg:2/5 outline-none bg-blue-100 border-2 border-blue-300 contact-input h-24 rounded text-left px-2 py-4 my-4"
            onChange={messageHandler}
            placeholder="Message me now"
          />{" "}
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://wa.me/2348108745769?text=${Message}`}
          >
            <button
              className="bg-blue-600 text-white border-2 border-blue-600 rounded-full my-2 text-center py-1 px-4 font-medium hover:bg-blue-900"
              onClick={clickHandler}
            >
              Send
            </button>
          </a>
        </div>
      </div>
      <div className="pr-4 sm:pr-12 py-4 lg:pr-24 font-bold mx-4 flex justify-end">
        <aside className="py-2 text-lg sm:text-xl md:text-2xl block">
          <div className="">
            {contact.map(({ title, description, icon }) =>
              <h4 key={Math.random()} className="flex items-center py-2">
                {icon}
                {`${title}: ${description}`}</h4>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ContactUs;
