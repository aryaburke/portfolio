import React from "react";

const AnnotatedText = ({text,db}) =>{
    let children = [];
    let lastPos = 0;

    let i = 0;
    while (i < db.length) {
        //creates a span for the text preceding the annotation, and the annotation itself, setting its onclick to display annotation

        //this relies on annotations being in the correct order. currently they are hand-coded, so they do not need to be sorted by length, or checked for overlaps, or checked for out of bounds. with more work this would have been made more robust.
        let entry = db[i]
        var precedingText = React.createElement(
            'span',
            {},
            text.substring(lastPos,entry.start)
        )
        children.push(precedingText);

        var annotated = React.createElement(
            'span',
            {
                className: 'annotated',
                onMouseOver: () => setAnnotation(entry.annotation),
                onMouseLeave: () => clearAnnotation()
            },
            text.substring(entry.start,entry.end)
        )
        children.push(annotated);

        lastPos = entry.end;
        i++;
    }
    //handle the final text
    if (lastPos < text.length) {
        var finalText = React.createElement(
            'span',
            {},
            text.substring(lastPos, text.length)
        )
        children.push(finalText);
    };

    //creates a final div with the array of children as its children
    let a = React.createElement(
        'div',
        { className: 'annotatedTextBox' },
        children
    )
    return(a);
}

function setAnnotation(a) {
    var info = document.getElementById('info');
    console.log(info);
    if (typeof info !== 'undefined' && info !== null) {
        info.innerHTML = a;
        info.removeAttribute('hidden');
    }
}

function clearAnnotation() {
    var info = document.getElementById('info');
    if (typeof info !== 'undefined' && info !== null) {
        info.setAttribute('hidden', 'true');
    }
}

export default AnnotatedText;