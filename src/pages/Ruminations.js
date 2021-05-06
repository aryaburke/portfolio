import React from "react"
import AnnotatedText from "../components/AnnotatedText";
import { text, db } from "../writing/ruminations";

const Ruminations = () => {
  return (
    <div>
      <div className="story-box">
        <div className="writing show-whitespace">
          <AnnotatedText text={text} db={db}/>
        </div>
      </div>
      <div id="info" hidden></div>
    </div>
);
};
  
export default Ruminations;