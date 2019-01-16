
var startButton = document.querySelector('.buttonStartGame');

startButton.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('.startBox').style.display = 'none';
    gameBox.style.display = 'flex';
    tallyBox.style.display = 'inline';
    tally();
    trivia();
});


// The above is not going to be needed after the first page -until_reset-

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
        questionAsk: "How did Joey Ramone pass away?",
        answer1: "Lymphoma",
        answer2: "Lung Cancer",
        answer3: "Heart Disease",
        rightAnswer: "Lymphoma",
    },

    {
        questionNum: 8,
        questionAsk: "How many guitars are a part of John Mayer's collection?",
        answer1: "755",
        answer2: "200",
        answer3: "50",
        rightAnswer: "200",
    },

    {
        questionNum: 9,
        questionAsk: "While made famous by Jimi Hendrix, 'ALl Along The Watchtower' was originally written by who?",
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

var count = 0;

var right = 0;

var wrong = 0;

var gameBox = document.querySelector('.gameBox');

var tallyBox = document.querySelector('.tallyBox')

var currentAnswers = document.querySelectorAll('.gameAnswer');

var nextQuestion = document.querySelector('.nextQuestion');

function presentQuestion() {

    document.querySelector('#gameQuestion').innerHTML = (questions[count].questionAsk)

    document.querySelector("#answer1").innerHTML = (questions[count].answer1)

    document.querySelector("#answer2").innerHTML = (questions[count].answer2)

    document.querySelector("#answer3").innerHTML = (questions[count].answer3)

}

function answerListen() {

    currentAnswers.forEach(answer => answer.addEventListener('click',

        event => {
            event.preventDefault();
            currentAnswers.forEach(answer => {
                answer.addEventListener('keydown', function (event) {
                    if (event.which === 13) {
                        event.preventDefault();
                        event.stopPropagation();
                        return false;
                    }
                })
            });
            if (event.target.innerHTML === questions[count].rightAnswer) {
                alert('Way to go - you know you music! Move to the next question.');
                event.target.className = 'correctAnswer';
                answer.style["pointer-events"] = 'none';
                right++;
            } else {
                alert('Ouch - another one bites the dust. Try again on the next question.');
                currentAnswers.forEach(answer => {
                    if (questions[count].rightAnswer === answer.innerHTML) {
                        answer.className = "correctAnswer";
                    }
                   event.target.className = "wrongAnswer"
                    answer.style["pointer-events"] = 'none';
                });
                wrong++;
            }
            nextQuestion.style.display = 'block';
        })
    )
};


function trivia() {
    presentQuestion();
    answerListen();
}

function tally() {
    tallyBox.innerHTML = `Tally Box Wrong: ${wrong} Right: ${right}`;
}

function finished() {
    if (right < 3) {
        document.querySelector('.finishAlert').innerHTML = "You've got some serious music learnin to do. Reset to try again.";
    }
    else if (right > 8) {
        documemnt.querySelector('.finishAlert').innerHTML = "Right on - keep rollin' rock star.";
    }
    else {
        document.querySelector('.finishAlert').innerHTML = "Hmmm - keep tryin. There's still some groovin room. Reset for another play-through."
    }
}

nextQuestion.addEventListener('click', () => {
    if (count < 8) {
        currentAnswers.forEach(answer => { 
            answer.style["pointer-events"] = 'all'; 
            answer.className = "gameAnswer"
        });
        count++;
        nextQuestion.style.display = 'none';
        presentQuestion();
        tally();
    }
    else if (count === 8) {
        {
            currentAnswers.forEach(answer => { 
                answer.style["pointer-events"] = 'all'; 
                answer.className = "gameAnswer"
            });
            nextQuestion.innerHTML = "Finish";
            nextQuestion.style.display = 'none';
            presentQuestion();
            tally();
            count++;
        }
    }
    else if (count === 9) {
        currentAnswers.forEach(answer => { 
            answer.style["pointer-events"] = 'all'; 
            answer.className = "gameBox"
        });
        gameBox.style.display = 'none';
        document.querySelector('.finishBox').style.display = 'flex';
        document.querySelector('.finishBox').appendChild(tallyBox);
        tally();
        finished();
        count = 0;
    }
});

document.querySelector('.finishButton').addEventListener('click', () => {
    currentAnswers.forEach(answer => { 
        answer.style["pointer-events"] = 'all';    
        answer.className = "gameBox";
    });
    gameBox.style.display = 'flex';
    document.querySelector('.finishBox').style.display = 'none';
    nextQuestion.style.display = 'none';
    presentQuestion();
    tally();
    right = 0;
    wrong = 0;
    var body = document.querySelector("body");
    body.insertBefore((tallyBox), body.childNodes[4])
});

