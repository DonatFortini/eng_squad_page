import React from "react";
import logo from "../assets/logo.png";

const Banner: React.FC = () => {
  return (
    <div className="banner bg-orange-500 text-white p-8 flex flex-col items-center w-full mx-auto relative">
      <div className="flex justify-between items-center w-full rounded-md">
        <img src={logo} alt="Logo" className="logo w-40 h-40 mb-4 mr-4" />
        <h1 className="text-5xl font-extrabold text-center flex-grow italic">
          Welcome to the M2DFS Squad Page
        </h1>
      </div>
    </div>
  );
};

export default Banner;
