import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-semibold mb-2">Find Us On</h1>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
            <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start">
            <FaTwitter></FaTwitter> Twitter
        </button>
        <button className="btn join-item justify-start">
            <FaInstagram></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
