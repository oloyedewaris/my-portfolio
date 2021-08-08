import React from "react";
import { UpCircleOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer id="footer" className="bg-blue-800">
      <div className="flex flex-col justify-center py-8 p-4">
        <div className="block text-center text-xl sm:text:2xl lg:3xl ">
          <p style={{ marginTop: "20px" }}>Handcrafted by Me &copy; Copyright 2020</p>
        </div>
        <div className="inline-block my-2 text-center">
          <a className="font-bold text-4xl colors-white " href="#">
            <UpCircleOutlined />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
