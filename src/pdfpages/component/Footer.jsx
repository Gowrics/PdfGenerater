// Footer.js
import React from "react";

const Footer = ({ pageNumber }) => {
  return (
    <div
      style={{
        display:"flex",
        justifyContent:"end",
        alignItems:"center",
        marginRight:'10px',
        marginTop:'-7px'

      }}
    >
      <p>Page {pageNumber}</p>
    </div>
  );
};

export default Footer;
