import React from "react";
import { UpCircleOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer id="footer" className="bg-blue-700 py-6">
      <p className="w-full mx-auto text-center my-2">
        <a className="font-bold text-5xl hover:text-blue-700 text-white" href="#">
          <UpCircleOutlined />
        </a>
      </p>
      <p className="text-center text-xl">Proudly handcrafted by Me &copy; Copyright 2020</p>
    </footer>
  );
};

export default Footer;
