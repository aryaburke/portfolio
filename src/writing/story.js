let title = 'Paw and the Mice';
let text = '\tReminds me of the way the mice used to come down from the eaves. In the barn. I was a kid. It’d happen after mom and dad conked out. I’d be sitting in the hay, reading from my battered copy of Novella Magicka, when a mouse would crawl down a rugged post. They always came down the supports at first, but then they’d just drop out of thin air. Mice and mice and mice and mice, y’know. Grey ones, black ones, spotted mottled ones. They’d pile up and writhe. I’d just sit there and watch. The first time was a little scary, but I was used to horrible things.\n\tThen they’d form into a mouth. This was the uncanny part, the part that always made me shake my head later, when I’d think back on it. The mice would make a mouth, complete with white mice for the teeth. They wouldn’t stop wriggling, gripping onto each other. I imagine a lotta mice suffocated to support the mouth. They’d speak to me, always.\n\t“Danish,” the mice-voice said. It was squealy.\n\t“Yuh,” I’d say.\n\t“Again you don’t bring us what we asked of you.”\n\t“I’d like ta,” I’d say, “I’d really like ta, mouth. It’s just that daddy keeps his closet locked. And his room locked. And this is from the last time I went in there,” I’d roll up my shirt to show the pockmarks. The mouth never wavered, though. I liked that about it.\n\t“It’s the only way,” the mice said, “you must endure. You don’t want to be like us, do you?”\n\t“No, it’s just… well… I want to live, y’know.”\n\t“It’s nothing, Danish. It’s just an orb. And it’s just a closet.”\n\t“You haven’t met my da,” I’d say. I think it went like that.\n\t“Why else would I be here?” the mouth said.\n\t“Fair ‘nuff.”\n\tAnd the mice would climb, back up in the eaves. You couldn’t hear them during the day, just the wind. And there were just cobwebs up there. But one time was different. One time I did hear them. I had climbed a tree to get a better view of the pasture. I heard them groaning low. And I knew it had to be done, that the mice didn’t lie.\n\t“Paw!” I screamed at the house, “An oak fell on the road! Way over the hill!”\n\t“Good work, Danish!” he yelled. He laced on his grimy boots, rubbed his cracking hands together, and set off. When he disappeared over Bill’s Hill I ran inside, through the kitchen with its moldy copper pans, the brooding room with its jagged mirrors, to his door. And I put my body, everything I had against that door, and it crumpled. I was bigger than anything I had thought. Then I turned the closet door to sawdust.\n\tI reached my hand beneath his pile of crumpled, bloodied work vests and grabbed the orb. It used to be a music box, but it had all its sides cut off, sheared so it didn’t play no more notes. Just its guts. I smashed it on the ground.\n\t“Danish,” my da said, looming over me. He was right there, “What have you done?”\n\tHis pupils shrunk to bullets as he looked at me. He cracked his neck, scowling, approaching.\n\tThen the mice came. They had chewed holes in the ceiling, and they poured through, filling the room faster than a flood. Together they undulated, crawling up the flesh of my screaming paw, devouring him. \n\tI didn’t know that would happen. I jumped out the window and didn’t stop running ‘til I reached the next town.';

let db = [
    {
        /*reminds me of the way...*/
        start: 1,
        end: 64,
        annotation: "dropping right in to the story with a strange moment in memory"
    },
    {
        /*novella magicka*/
        start: 194,
        end: 210,
        annotation: "subtle worldbuildingof the strange and magical"
    },
    {
        /*i imagine a lot of mice suffocated...*/
        start: 818,
        end: 900,
        annotation: "getting us into the narrator's head through their feelings and voice about the disturbing situation"
    },
    {
        /*it's the only way*/
        start: 1287,
        end: 1380,
        annotation: "the story revolves around this intensely strange logic, of horror made incarnate"
    },
    {
        /*it used to be a music box...*/
        start: 2544,
        end: 2645,
        annotation: "an ominous object, its purpose cut from it"
    },
    {
        /*i jumped out the window...*/
        start: 3105,
        end: 3182,
        annotation: "leaving space to continue, to imagine what may happen to danish"
    }
]

export {title, text, db};