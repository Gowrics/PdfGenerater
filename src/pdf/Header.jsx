// Header.js
import React from "react";

const Header = () => {
  return (
    <div >
      <div style={{backgroundColor:"#636A76",display:"flex" ,flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"8px",height:"50px"}} >
      <div style={{textAlign:"start",margin:"0px 15px"}}><h1 >Yuva Swasthick - U16(M) </h1> </div>
      <div style={{textAlign:"end"}}><h1>XI Performer</h1></div>
      </div>
      <div style={{backgroundColor:"#D9D9D9",display:"flex" ,flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"8px",height:"25px"}} >
      <div style={{textAlign:"start"}}><h3 >Player Monthly Report </h3> </div>
      <div style={{textAlign:"end"}}><h3>100 m | 200 m | Long Jump</h3></div>
      </div>

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
      <h1>Report Title</h1>
    </div>
  );
};

export default Header;
