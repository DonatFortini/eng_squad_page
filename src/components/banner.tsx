import React from "react";
import logo from "/assets/logo.png";
import { Link } from "react-router-dom";

const Banner: React.FC = () => {
  return (
    <div className="banner bg-orange-800 text-white p-4 flex flex-col items-center w-full mx-auto relative">
      <div className="flex justify-between items-center w-full rounded-md">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo w-24 h-24 mb-2 mr-4" />
        </Link>
        <h1 className="text-4xl font-extrabold text-center flex-grow italic">
          Welcome to the M2DFS Squad Page
        </h1>
      </div>
    </div>
  );
};

export default Banner;
