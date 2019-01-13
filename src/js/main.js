
var startButton = document.querySelector('.buttonStartGame');

startButton.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('.startBox').style.display = 'none';
    document.querySelector('.gameBox').style.display = 'flex';
    document.querySelector('.tallyBox').style.display = 'inline';
    // document.querySelector('.nextQuestion').style.display = 'none';
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

var currentAnswers = document.querySelectorAll('.gameAnswer');

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
            console.log(event.target)
            if (event.target.innerHTML === questions[count].rightAnswer) {
                alert('Way to go - you know you music! Move to the next question.');
                currentAnswers.forEach(answer => { 
                    if (questions[count].rightAnswer === answer.innerHTML) {
                        answer.style.background = 'black';
                    }
                    answer.style["pointer-events"] = 'none';
                    document.querySelector('.nextQuestion').style.display = 'visible';
                });
            } else {  
                alert('Ouch - another one bites the dust. Try again on the next question.');
                currentAnswers.forEach(answer => { 
                    if (questions[count].rightAnswer === answer.innerHTML) {
                        answer.style.background = 'black';   
                    }
                    answer.style["pointer-events"] = 'none';
                    document.querySelector('.nextQuestion').style.display = 'visible';
                     });
            }
            if (answer = event.target) {
                console.log(event.target)
                event.target.background = 'white';
                event.target.color = 'black';  
            } 
        }) 
    )}

    // currentAnswers.forEach( answer => {
    //     if (questions[count].rightAnswer === answer.innerHTML) {
    //         answer.style.background = 'black;';
    //         console.log(answer);
    //         console.log(questions[count].rightAnswer);
    //     console.log(answer.innerHTML);
    //     }
    // }) 

function tally() {
    document.querySelector('.tallyBox').innerHTML = `Tally Box Wrong: ${wrong} Right: ${right}`;
}

function trivia() {
    presentQuestion();
    answerListen();
}

function tally() {
    document.querySelector('.tallyBox').innerHTML = `Tally Box Wrong: ${wrong} Right: ${right}`;
}

document.querySelector('.nextQuestion').addEventListener('click', () => {
    currentAnswers.forEach(answer => { answer.style["pointer-events"] = 'all'; });
    wrong++;
    count++;
    currentAnswers.forEach(answer => { 
        answer.style.background = 'red';
        answer.style.color = 'white';     
    })
    document.querySelector('.nextQuestion').style.display = 'none';
    presentQuestion();
    // tally();
})