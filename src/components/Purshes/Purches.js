import React from "react";
import { Link } from "react-router-dom";
import img from "./giphy.gif";

const Purches = () => {
  return (
    <div className="text-center py-5 ">
      <img src={img} alt="" className="w-50" />
      <br />
      <Link to="/home">
        <p className="fs-3 my-4 mb-2  primary"> Home</p>
      </Link>
    </div>
  );
};

export default Purches;
