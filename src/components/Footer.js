import React from "react";
import { UpCircleOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer id="footer" className="bg-purple-800 text-white py-6">
      <p className="w-full mx-auto text-center my-2">
        <a className="font-bold text-6xl hover:text-purple-400" href="#">
          <UpCircleOutlined />
        </a>
      </p>
      <p className="text-center text-lg">Proudly handcrafted by Me</p>
      <p className="text-center text-xs">&copy; Copyright {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
