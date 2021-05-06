import React from "react";
import { title, text } from "../writing/story";

const Stories = () => {
  return (
    <div className="story-box">
      <div className="title">{title}</div>
      <div className="writing show-whitespace">{text}</div>
    </div>
);
};
  
export default Stories;