let text = "const AnnotatedText = ({text,db}) =>{\n\tlet children = [];\n\tlet lastPos = 0;\n\tlet i = 0;\n\twhile (i < db.length) {\n\t\tlet entry = db[i]\n\t\tvar precedingText = React.createElement(\n\t\t\t'span',\n\t\t\t{},\n\t\t\ttext.substring(lastPos,entry.start)\n\t\t)\n\t\tchildren.push(precedingText);\n\n\t\tvar annotated = React.createElement(\n\t\t\t'span',\n\t\t\t{\n\t\t\t\tclassName: 'annotated',\n\t\t\t\tonMouseOver: () => setAnnotation(entry.annotation),\n\t\t\t\tonMouseLeave: () => clearAnnotation()\n\t\t\t},\n\t\t\ttext.substring(entry.start,entry.end)\n\t\t)\n\t\tchildren.push(annotated);\n\t\tlastPos = entry.end;\n\t\ti++;\n\t}\n\n\tif (lastPos < text.length) {\n\t\tvar finalText = React.createElement(\n\t\t\t'span',\n\t\t\t{},\n\t\t\ttext.substring(lastPos, text.length)\n\t\t)\n\t\tchildren.push(finalText);\n\t};\n\n\tlet a = React.createElement(\n\t\t'div',\n\t\t{ className: 'annotatedTextBox' },\n\t\tchildren\n\t)\n\treturn(a);\n}";

let db = [
    {
        /*AnnotatedText*/
        start: 6,
        end: 33,
        annotation: "AnnotatedText is the function that takes a string and a database of annotations and returns a React component corresponding to the annotated text! it's the actual code used to annotate this right now. it's great because it functions on any text that has accompany annotations"
    },
    {
        /*precedingText*/
        start: 139,
        end: 152,
        annotation: 'precedingText is the text before an annotation'
    },

    {
        /*annotated*/
        start: 276,
        end: 285,
        annotation: 'annotated is the annotated text element. annotations are denoted by their start and end character indexes.'
    },
    {
        /*setAnnotation*/
        start: 376,
        end: 389,
        annotation: 'setAnnotation and clearAnnotation (below) are functions to change the box that this info appears in'
    },
    {
        /*finalText*/
        start: 600,
        end: 609,
        annotation: 'finalText handles the text between the last annotation and the end' 
    },
    {
        /*children*/
        start:806,
        end:814,
        annotation: 'the array of child spans we created is being passed to a parent span as children, creating a single React element to return. i chose to do it this way because that way we can move through the whole text, separating it using the annotations as a guide, before compiling it together.'
    }
]

export { text, db };