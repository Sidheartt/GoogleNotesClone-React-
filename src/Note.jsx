import React from "react";

var custStyle = {
  background: "#fff",
  borderRadius: "7px",
  boxShadow: "0 2px 5px #ccc",
  padding: "10px",
  width: "240px",
  margin: "16px",
  float: "left"
};

var styleH = {
  fontSize: "1.1em",
  marginBottom: "6px"
};

var styleP = {
  fontSize: "1.1em",
  marginBottom: "10px",
  whiteSpace: "pre-wrap",
  wordWrap: "break-word"
};

function Note() {
  return (
    <div style={custStyle}>
      <h1 style={styleH}>Why i Don't sleep right !</h1>
      <p style={styleP}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
}

export default Note;
