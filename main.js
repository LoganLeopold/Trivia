// Establish the start button
var startButton = document.querySelector('.buttonStartGame');

//Clicking start button hides start view and displays game view
startButton.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('.startBox').style.display = 'none';
    gameBox.style.display = 'flex';
    tallyBox.style.display = 'inline';
    tally();
    presentQuestion();
    answerListen();
});

// Questions object storing questions and answers
const questions = [

    {
        questionNum: 1,
        questionAsk: "How old was Ol' Blue Eyes when he passed?",
        answer1: "62",
        answer2: "72",
        answer3: "82",
        rightAnswer: "82",
    },


    {
        questionNum: 2,
        questionAsk: "Who sings the hook on Kendrick Lamar's 'Alright?'",
        answer1: "Dr. Dre.",
        answer2: "Pharrell Williams",
        answer3: "The Weekend",
        rightAnswer: "Pharrell Williams",
    },

    {
        questionNum: 3,
        questionAsk: "Who is Gordon Matthew Thomas Sumner?",
        answer1: "Sting",
        answer2: "Nat King Cole",
        answer3: "Prince",
        rightAnswer: "Sting",
    },

    {
        questionNum: 4,
        questionAsk: "How old was Bono when U2 collectively agree they formed?",
        answer1: "24",
        answer2: "16",
        answer3: "20",
        rightAnswer: "16",
    },

    {
        questionNum: 5,
        questionAsk: "The Stradivarius is a make of which kind of instrument?",
        answer1: "Guitar",
        answer2: "Violin",
        answer3: "Piano",
        rightAnswer: "Violin",
    },

    {
        questionNum: 6,
        questionAsk: "How many keys are on the modern concert piano?",
        answer1: "62",
        answer2: "76",
        answer3: "88",
        rightAnswer: "88",
    },

    {
        questionNum: 7,
        questionAsk: "What health issue lead to the passing of Joey Ramone?",
        answer1: "Lymphoma",
        answer2: "Lung Cancer",
        answer3: "Heart Disease",
        rightAnswer: "Lymphoma",
    },

    {
        questionNum: 8,
        questionAsk: "How many guitars are a part of John Mayer's personal collection?",
        answer1: "755",
        answer2: "200",
        answer3: "50",
        rightAnswer: "200",
    },

    {
        questionNum: 9,
        questionAsk: "While made famous by Jimi Hendrix, 'All Along The Watchtower' was originally written by who?",
        answer1: "Bob Dylan",
        answer2: "Marvin Gaye",
        answer3: "The Everly Brothers",
        rightAnswer: "Bob Dylan",
    },

    {
        questionNum: 10,
        questionAsk: "Ben Gibbert of Death Cab For Cutie is famous for what other hit song released through another project?",
        answer1: "Transatlanticism",
        answer2: "Such Great Heights",
        answer3: "I Will Follow You Into The Dark",
        rightAnswer: "Such Great Heights",
    },

]

//Count of game
var count = 0;

//Right answer count
var right = 0;

//Wrong answer count
var wrong = 0;

//Establishing shorthand for DOM elements
var gameBox = document.querySelector('.gameBox');

var tallyBox = document.querySelector('.tallyBox')

var currentAnswers = document.querySelectorAll('.gameAnswer');

var nextQuestion = document.querySelector('.nextQuestion');

//Sending questions object info to the game view based on count variable
function presentQuestion() {

    document.querySelector('#gameQuestion').innerHTML = (questions[count].questionAsk)

    document.querySelector("#answer1").innerHTML = (questions[count].answer1)

    document.querySelector("#answer2").innerHTML = (questions[count].answer2)

    document.querySelector("#answer3").innerHTML = (questions[count].answer3)

}

//Core game logic listens to answers to move game forward
function answerListen() {

    currentAnswers.forEach(answer => answer.addEventListener('click',

        event => {
            event.preventDefault();
            currentAnswers.forEach(answer => {
                //Prevent keydown from taking action after answer submitted (clicked)
                answer.addEventListener('keydown', function (event) {
                    if (event.which === 13) {
                        event.preventDefault();
                        event.stopPropagation();
                        return false;
                    }
                })
            });
            // Win scenario: alert user + change correct answer styling + prevent further 
            // click action until next question + increment right var
            if (event.target.innerHTML === questions[count].rightAnswer) {
                alert('Way to go - you know you music! Move to the next question.');
                event.target.className = 'correctAnswer';
                answer.style["pointer-events"] = 'none';
                right++;
                tally();
            // Loss scenario: alert user + change correct answer styling + change wrong answer styling +
            // prevent further click action until next question + increment wrong variable
            } else {
                alert('Ouch - another one bites the dust. Try again on the next question.');
                currentAnswers.forEach(answer => {
                    if (questions[count].rightAnswer === answer.innerHTML) {
                      answer.className = "correctAnswer";
                    } else {
                      event.target.className = "wrongAnswer"  
                    }
                    answer.style["pointer-events"] = 'none';
                });
                wrong++;
                tally();
            }
            //Set nextquestion button style so it displays when it is presented next question
            nextQuestion.style.display = 'block';
        })
    )
};

//Tally box holds right and wrong variables as game score
function tally() {
    tallyBox.innerHTML = `Tally Box Wrong: ${wrong} Right: ${right}`;
}

//Next question event listener for near-game-end and game-end scenarios styling + logic. 
//Upon clicking this button, styles are changed for presentation on the "next question":
nextQuestion.addEventListener('click', () => {
    //Most of the game questions behave on this "norm"
    if (count <= 7) {
        //Set answer buttons back to unanswered behavior + styling
        currentAnswers.forEach(answer => { 
            answer.style["pointer-events"] = 'all'; 
            answer.className = "gameAnswer"
        });
        //Increment count so new question presents upon display
        count++;
        //Do not display next question so question can't be incremented without an answer
        nextQuestion.style.display = 'none';
        //Reset gameBox inner html based on new count for the next question.
        presentQuestion(); 
    }
    //The count is already next to last here so on this click styling is set for the last question
    //so all elements present accordingly.
    else if (count === 8 ) {
        {
            currentAnswers.forEach(answer => { 
                answer.style["pointer-events"] = 'all'; 
                answer.className = "gameAnswer"
            });
            //Insert "finish" text so when button displays next it indicates end of game
            nextQuestion.innerHTML = "Finish";
            //It should still not present upon game view before an answer is chosen
            nextQuestion.style.display = 'none';
            //Same functionality as norm
            count++;
            presentQuestion();            
        }
    }
    //Last question scenario styles elements for finish page and game reset
    else if (count === 9) {
        //Upon game reset these will be ready to display question object info
        currentAnswers.forEach(answer => { 
            answer.style["pointer-events"] = 'all'; 
            answer.className = "gameAnswer"
        });
        //Upon "finish" gamebox is removed so finish box is alone on page
        gameBox.style.display = 'none';
        //Upon "finish" display the finish box and insert the tally box into that DOM element
        document.querySelector('.finishBox').style.display = 'flex';
        document.querySelector('.finishBox').appendChild(tallyBox);
        //Upon "finish" this will push a message into the finish box to indicate
        //user's success or failure with further instructions
        finished();
        //This brings count to zero so upon "finish" if the user decides to try again
        //the gamebox will present with the first question (questions[0])
        count = 0;
    }
});

//Resets game and presents question 1 (questions[0]) on game view again.
document.querySelector('.finishButton').addEventListener('click', () => {
    //present the game box
    gameBox.style.display = 'flex';
    nextQuestion.innerHTML = 'Next Question';
    //hide finish view
    document.querySelector('.finishBox').style.display = 'none';
    //again do not display next question to avoid breaking game functionality
    nextQuestion.style.display = 'none';
    //present first question and new tally
    presentQuestion();
    tally();
    //reset tally
    right = 0;
    wrong = 0;
    //put tallyBox back into gamebox for display during new game view
    var body = document.querySelector("body");
    body.insertBefore((tallyBox), body.childNodes[4])
});

//Finished function sends message to user upon close of game. 
function finished() {
    if (right < 3) {
        document.querySelector('.finishAlert').innerHTML = "You've got some serious music learnin to do. Reset to try again.";
    }
    else if (right > 8) {
        document.querySelector('.finishAlert').innerHTML = "Right on - keep rollin' rock star.";
    }
    else {
        document.querySelector('.finishAlert').innerHTML = "Hmmm - keep tryin. There's still some groovin room. Reset for another play-through."
    }
}