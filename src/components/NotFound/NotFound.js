import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <img
        className="w-50"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTrmKbeKkgAGYkBiKCVO6nO6E_7U9VpG_G6Q&usqp=CAU"
        alt=""
      />
      <Link to="/home">
        <p className="fs-3 my-4"> Home</p>
      </Link>
    </div>
  );
};

export default NotFound;
