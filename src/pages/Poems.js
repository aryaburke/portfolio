import React from "react";
import { title, poem } from "../writing/test-poem";

const Poems = () => {
  return (
    <div className="poem-box">
      <div className="poem">{poem}</div>
    </div>
);
};
  
export default Poems;