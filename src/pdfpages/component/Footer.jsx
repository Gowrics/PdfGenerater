// Footer.js
import React from "react";

const Footer = ({ pageNumber }) => {
  return (
    <div
      style={{
        display:"flex",
        justifyContent:"end",
        alignItems:"center",
        position: "absolute",
        bottom: "-5mm",
        right:"60px",
        width: "100%",
      }}
    >
      <p>Page {pageNumber}</p>
    </div>
  );
};

export default Footer;
