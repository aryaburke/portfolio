import React from "react";

const AnnotatedText = ({text,db}) =>{
    var a = document.createElement('div');
    let lastPos = 0;
    
    var entry;
    for (entry in db) {
        //creates a span for the text preceding the annotation, and the annotation itself, setting its onclick to display annotation

        //this relies on annotations being in the correct order. currently they are hand-coded, so they do not need to be sorted by length, or checked for overlaps, or checked for out of bounds. with more work this would have been made more robust.

        var precedingText = document.createElement('span');
        precedingText.innerHTML = text.substring(lastPos,entry.start);
        a.appendChild(precedingText);

        var annotated = document.createElement('span');
        annotated.innerHTML = text.substring(entry.start,entry.end);
        annotated.className = 'annotated';
        annotated.onmouseover = setAnnotation(entry.annotation);
        annotated.onmouseleave = clearAnnotation();
        a.appendChild(annotated);

        lastPos = entry.end;
    }
    //handle the final text
    if (lastPos < text.length) {
        var finalText = document.createElement('span');
        finalText.innerHTML = text.substring(lastPos, text.length);
        a.appendChild(finalText);
    };
    return(a);
}

function setAnnotation(a) {
    document.getElementById('info').innerHTML = a;
    document.getElementById('info').removeAttribute('hidden');
}

function clearAnnotation() {
    document.getElementById('info').addAttribute('hidden');
}

export default AnnotatedText;