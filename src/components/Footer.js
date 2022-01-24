import React from "react";
import { UpCircleOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer id="footer" className="bg-blue-800 text-white py-6">
      <p className="w-full mx-auto text-center my-2">
        <a className="font-bold text-5xl hover:text-blue-200" href="#">
          <UpCircleOutlined />
        </a>
      </p>
      <p className="text-center mx-4 text-xl">Proudly handcrafted by Me from scratch</p>
      <p className="text-center text-xl">&copy; Copyright 2021</p>
    </footer>
  );
};

export default Footer;
