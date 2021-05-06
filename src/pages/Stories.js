import React from "react"
import AnnotatedText from "../components/AnnotatedText";
import { title, text, db } from "../writing/story";

const Stories = () => {
  return (
    <div>
      <div className="story-box">
        <div className="title">{title}</div>
        <div className="writing show-whitespace">
          <AnnotatedText text={text} db={db}/>
        </div>
      </div>
      <div id="info" hidden></div>
    </div>
);
};
  
export default Stories;