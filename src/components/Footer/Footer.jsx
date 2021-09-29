import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div
      // bg="dark"
      style={{
        // position: "fixed",

        backgroundColor: "wheat",
        bottom: 0,
        display: "block",
        width: "100vw",
        color: "#4D7186",
        borderTop: "3px solid #4D7186",
      }}
      className="footer-copyright text-center py-3"
    >
      {" "}
      © 2021 Copyright:
      <a style={{ color: "#4D7186" }} href="/">
        {" "}
        inCity
      </a>
    </div>
  );
};

export default Footer;
