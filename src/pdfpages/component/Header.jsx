// Header.js
import React from "react";

const Header = () => {
  return (
    <>
    <div style={{  display:"flex",flexDirection:"row" }}>

      <div><h1 style={{backgroundColor:"#636A76"}}>Yuva Swasthick - U16(M) </h1><h1 style={{backgroundColor:"#D9D9D9"}}>Player Monthly Report</h1></div>
      <img
        src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with actual profile image URL
        alt="Profile"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          marginBottom: "10px",
        }}
      />
      <div><h1 style={{backgroundColor:"#636A76"}}>Yuva Swasthick - U16(M) </h1><h1 style={{backgroundColor:"#D9D9D9"}}>Player Monthly Report</h1></div>
      
    </div>  
      <h2>Report Title</h2>
    
    </>
  );
};

export default Header;
