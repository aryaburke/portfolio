let text = "\thi! welcome to my humble little portfolio, built using react.js. the idea here is to display a small amount of my work, and my thoughts as a programming student, complete with little annotations. try mousing over this sentence. there's a poem, a story, a piece of code from this site, and this section, where i'll talk about this site, and about teaching and learning programming.\n\tfirst of all, i'm really proud of this little site! it was a lot more challenging than i expected, which i'll get a bit more into later. that said, it's pretty simple. if i worked on it more, one of the biggest improvements is that i would make an entry system that wasn't hardcoding the text into a js file and hardcoding the annotations as a dictionary. one that searched the text and annotated the phrase you wanted would be a start. also simple robust protections for incorrectly placed annotations. i'd also love to have it pull from a .txt or .md file. i ran into a bunch of issues with file reading, so i decided to just hardcode.\n\tthis semester, i had the pleasure of being able to be the lab assistant for an intro web programming class. it was a really lovely full circle from the beginning of my sarah lawrence experience, in an intro programming class, to being a lab assistant at the end. i got to watch and support people in learning programming. the teacher, and my teacher for most of my time at sarah lawrence, teaches with the philosophy of building building blocks one at a time and learning through examining fundamental concepts. for instance, before students are allowed to use a substring operation, they are asked to create a substring function using loops.\n\tin my opinion, both in watching it and through personal experience, this is a really effective way to teach. it mirrors the fundamental creation loop of programming itself, which is to piece together building blocks to solve a problem, and empowers students to be intimately familiar with the tools they are using. i have learned quite a lot through getting my hands dirty plunging straight into a library or a repo, but over the course of this project i realized the ways in which that can be stressful. i learned react through fiddling with a forked repo, and when it came time to build a new react project, i realized i had no idea how, and also had little understanding of some of the fundamental concepts underlying react, like the lifecycle. this is part of what made it challenging.\n\tthis is where i leaned heavily on documentation, tutorials, and examples on the internet! this is also a very important thing for new students learning coding. almost always, pointing them towards a section in the example helped them see that what they were struggling with was right there in front of them. new programming students also have a tendency to overcomplicate their ideas about how something is done, so it's nice for them to have syntax and code that they can reference and realize the problem can be done using the tools they have.\n\toverall, i really enjoyed working with students, as the more that i have a chance to explain the fundamentals, the better my grasp of them gets! my javascript was quite rusty, and being a lab assistant and working on this project helped me solidify it a lot."


//things i would've done given more time: made the annotating more robust

let db = [
    {
        /*try mousing over this sentence.*/
        start: 197,
        end: 228,
        annotation: "my thoughts will appear here"
    },
    {
        /*if i worked on it more,*/
        start: 551,
        end: 574,
        annotation: "i also would've added more annotations"
    }
]

export {text, db};