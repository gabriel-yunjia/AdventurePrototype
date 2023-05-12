A simple adventure game by {who?} based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: unsatisfied (name at least 4 of the classes).
    -farmHouse
    -barn
    -field1
    -field2
    -field3
- **2+ scenes *not* based on `AdventureScene`**: unsatisfied (name the classes).
    -intro
    -badEnding
    -goodEnding
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: Changed showMessage's parameters (line58) to let the message stay on forever and not fade.
    - Enhancement 2: Changed the properties of message box(line29) for better UI and experience.

Experience requirements:
- **4+ locations in the game world**: unsatisfied (name at least 4 of the classes).
    -farmHouse
    -barn
    -field1
    -field2
    -field3
- **2+ interactive objects in most scenes**: 
    -in farmHouse, there are notes that the player that can glance over 
    -in field1 there are grass for the player to collect
- **Many objects have `pointerover` messages**:
    -Note in farmHouse has a long description of the objective of the game in its pointerover message
    -All objects has a description in its pointerover message
- **Many objects have `pointerdown` effects**: unsatisfied (describe two examples)
-   -when grass is clicked, it gets collected into the inventory
    -when the gate is clicked, if the player has the key then it will go to the next scene(field1)
- **Some objects are themselves animated**: unsatisfied (describe two examples)
    -sheeps are animated to try to eat the grass
    -the cows move randomly if the player wants to feed them. 
Asset sources:
- (For each image/audio/video asset used, describe how it was created. What tool did you use to create it? Was it based on another work? If so, how did you change it, and where can we learn more about the original work for comparison? Use [Markdown link syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).)
-no assets other than emojis (not sure if that counts)
Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.