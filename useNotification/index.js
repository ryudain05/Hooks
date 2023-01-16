import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const triggerNotif = useNotification("Can I steal your Kimchi?", {
    body: "I love you",
  });
  return (
    <div>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
