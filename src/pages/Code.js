import React from "react"
import AnnotatedText from "../components/AnnotatedText";
import { text, db } from "../writing/code";

const Code = () => {
  return (
    <div>
      <div className="poem-box code">
        <div className="show-whitespace">
          <AnnotatedText text={text} db={db}/>
        </div>
      </div>
      <div id="info" hidden></div>
    </div>
);
};
  
export default Code;