// Footer.js
import React from "react";

const Footer = ({ pageNumber }) => {
  return (
    <div
      style={{
        textAlign: "center",
        position: "absolute",
        bottom: "-10mm",
        width: "100%",
      }}
    >
      <p>Page {pageNumber}</p>
    </div>
  );
};

export default Footer;
