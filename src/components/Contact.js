import React, { useState } from "react";
import { MailOutlined } from "@ant-design/icons";

const ContactUs = (props) => {
  const [Message, setMessage] = useState("");

  const contact = [
    {
      title: "Mail",
      description: "oloyedewaris@gmail.com"
    },
    {
      title: "Phone",
      description: "+234 8108745769"
    },
    {
      title: "Address",
      description: "Ikorodu, Lagos state, Nigeria"
    }
  ]

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const clickHandler = () => {
    Message.replace(" ", "%20");
  };

  return (
    <section id="contact" className="bg-blue-700">
      <div className="px-4 md:px-18 sm:px-12 lg:px-36 align-center inline-block">
        <div className="py-4 sm:py-2 m-auto">
          <div className="py-2 flex w-full justify-center">
            <MailOutlined className="w-1/5 font-bold text-5xl xs:text-6xl sm:text-8xl my-auto py-2" />
            <p className="w-4/5 text-2xl text-center m-auto font-medium">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
          <textarea
            className="w-2/5 outline-0 bg-blue-600 text-black-100 h-24 rounded text-left px-2 py-4 my-4"
            onChange={messageHandler}
            placeholder="You can message me right now"
          />{" "}
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://wa.me/2348108745769?text=${Message}`}
          >
            <button
              className="bg-blue-900 rounded my-2 text-center py-2 px-4 font-medium hover:bg-blue-900"
              onClick={clickHandler}
            >
              Send
            </button>
          </a>
        </div>
      </div>
      <div className="pr-4 sm:pr-12 py-4 lg:pr-24 font-bold mx-4 flex justify-end">
        <aside className="py-2 text-2xl block">
          <div className="">
            {contact.map(({ title, description }) =>
              <h4 className="py-2">{`${title}: ${description}`}</h4>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ContactUs;
