import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const titleUpdate = useTitle("Loading,,,");
  setTimeout(() => titleUpdate("HOME"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
