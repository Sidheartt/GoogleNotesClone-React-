import React from "react";

var cusStyle = {
  position: "absolute",
  textAlign: "center",
  bottom: "0",
  width: "100%",
  height: "2.5rem",
  color: "#ccc"
};

var d = new Date();
var date = d.getFullYear();

function Footer() {
  return <p style={cusStyle}> copyright Siddharth Desai {date} </p>;
}

export default Footer;
