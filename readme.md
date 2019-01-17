Explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

# Logan's Trivia Build

## Technologies Used

For this project I simply employed HTML - CSS - Javascript relationships. I gave my index.html doc sources of both a main.css and main.js file so that vanilla Javascript gave the site dynamism that and it was styled with CSS.

## Build Approach

Upon the advice of some wise friends, I did begin this build with pseudo-code. While this didn't save an enormous amount of trouble, I do think it set me on a good path. This was a fairly simple build though, so I did see the value of the base pseduo-code would set for a project not even very much larger than this. 

After I pseudo-coded I did use a mix of pseudo-code and unified modeling language as baselines for establishing functions I knew I'd need to carry out and for defining elements in my html they would be carried out on. 

Concerning those elements, in my approach I was lazy with drying my code early. My querySelectors stayed long and drew out the visual distraction for me when looking through my own code. Had I taken more care to avoid unnecessary length, I may have more easily seen some more redunancies in my code body that only exponentiated the extent to which I felt the code was busy/long. Following wise advice though, my first goal was to get it *working*. 

This was a huge victory, for after basic HTML + CSS to be able to discern what Javascript was doing was written it did not take me long until I had a working application. After it "worked" I simply needed to add features, which I did piece-meal. 

As I sorted out scripting some of the features, I learned a great deal about considering scope, timing, and how elements are manipulated in the dom and rendered. 

## Installation

This project uses vanilla versions of all of these languages (HTML, CSS, JavaScript) so no installations are necessary for viewing or manipulating your own version of the DOM. 

**One caveat to this is the font** This can be found in the trivia_fonts directory but it is a great approximation of the font used by Rolling Stone Magazine in their iconic masthead. Huge thanks to Dennis Ludlow (http://www.sharkshock.net) for creating a great resource and distributing it freely. 

## Unsolved Prolems + Further Development

Thankfully, I was able to sort out everything that was reasonable to achieve that comees to mind. This project was really fun and satisfying, but I persist as part of a great tradition of devs who are not satisfied with the final deployed product. It is a work in progress. I would like to make the styling stronger by:

  -Using Javascript to carry out behavior of shading/highlighting wrong and correct answers.
  -Working in imagery. 
  -Taking time to find a more modern color pallete that more clearly plays on the Rolling Stone motif.

I would love to continue working on features or improvements to user experience including, but not limited to:

  -A timer for each question that would give the user "x" amount of seconds to make a decision before their answer is counted wrong.
  -A reset button that is always present and can start the game over.
  -Randomizing questions.
  -Simply coming up with more questions *or* - in the perfect world - finding a database of music trivia questions somewhere I can implement a server to query.
  **Update: totally does exist - shouldn've known better not to trust the internet for resource. Can start here: https://opentdb.com/api_config.php**
  -An overall more interactive website experience (this will also include CSS touches). 

Thank you for giving the project a look - feel free to fork and clone with finished product creditng my original repo. 