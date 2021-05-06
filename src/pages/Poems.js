import React from "react";
import { title, text } from "../writing/poem";

const Poems = () => {
  return (
    <div className="poem-box">
      <div className="title">{title}</div>
      <div className="writing show-whitespace">{text}</div>
    </div>
);
};
  
export default Poems;