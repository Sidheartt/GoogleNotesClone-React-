import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <div>{Note()}</div>
      <p>{Footer()}</p>
    </div>
  );
}

export default App;
