let text = "const AnnotatedText = ({text,db}) =>{\n\tlet children = [];\n\tlet lastPos = 0;\n\tlet i = 0;\n\twhile (i < db.length) {\n\t\tlet entry = db[i]\n\t\tvar precedingText = React.createElement(\n\t\t\t'span',\n\t\t\t{},\n\t\t\ttext.substring(lastPos,entry.start)\n\t\t)\n\t\tchildren.push(precedingText);\n\n\t\tvar annotated = React.createElement(\n\t\t\t'span',\n\t\t\t{\n\t\t\t\tclassName: 'annotated',\n\t\t\t\tonMouseOver: () => setAnnotation(entry.annotation),\n\t\t\t\tonMouseLeave: () => clearAnnotation()\n\t\t\t},\n\t\t\ttext.substring(entry.start,entry.end)\n\t\t)\n\t\tchildren.push(annotated);\n\t\tlastPos = entry.end;\n\t\ti++;\n\t}\n\n\tif (lastPos < text.length) {\n\t\tvar finalText = React.createElement(\n\t\t\t'span',\n\t\t\t{},\n\t\t\ttext.substring(lastPos, text.length)\n\t\t)\n\t\tchildren.push(finalText);\n\t};\n\n\tlet a = React.createElement(\n\t\t'div',\n\t\t{ className: 'annotatedTextBox' },\n\t\tchildren\n\t)\n\treturn(a);\n}";

let db = [
    {
        start: 1,
        end: 25,
        annotation: "here i did this thing"
    }
]

export { text, db };