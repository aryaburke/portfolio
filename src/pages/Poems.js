import React from "react";
import { title, poem } from "../writing/poem";

const Poems = () => {
  return (
    <div className="poem-box">
      <div className="title">{title}</div>
      <div className="poem show-whitespace">{poem}</div>
    </div>
);
};
  
export default Poems;