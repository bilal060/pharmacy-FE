import React from "react";
import logo from "../assets/logo/pharmacy-sm.png";

const Loader = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
      <img
        src={logo}
        alt="logo"
        className="w-100"
        style={{ maxWidth: "200px" }}
      />
    </div>
  );
};

export default Loader;
