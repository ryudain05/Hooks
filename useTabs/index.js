import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index2) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
