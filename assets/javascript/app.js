// PSEUDOCODE
// clicking the "start quiz" button will display the main page i.e heading, score, questions, answers and charge
// list questions in an object/array containing question, choices and correct answer
// record userchoice and tally if correct
// have a timer for each question ~ 15 seconds
// user must choose an option before time runs out
// if time runs out and user hasnt chosen, it will move to the next question and score is 0
// last question is chosen - results will appear as percentage

$('#start').on('click',function() {
    $('#start').remove();
})

var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var timer = document.getElementById("timer");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var progress = document.getElementById("progress");
var score = document.getElementById("score");
var correct = 0;
var incorrect = 0;
 


var questions = [
    {
        question: "What is name of the time travelling vehicle?",
        choiceA: "Time-Turner",
        choiceB: "Tardis",
        choiceC: "Delorean",
        choiceD: "Time Displacement Equipment",
        correct: "C",
    },
    {
        question: "Marty's band auditions for a Battle of the Bands by playing Power of Love. What is Marty's band's name?",
        choiceA: "The Pinheads",
        choiceB: "The Blockheads",
        choiceC: "The Zipheads",
        choiceD: "The Thickheads",
        correct: "A",
    },
    {
        question: "What is the name of Doc Brown's dog? ",
        choiceA: "Curie",
        choiceB: "Einstein",
        choiceC: "Jules",
        choiceD: "Verne",
        correct: "B",
    },
    {
        question: "The flux capacitor is, of course, what makes time travel possible. What warning is written across the bottom of it? ",
        choiceA: "Shield eyes from light",
        choiceB: "HOT - do not touch",
        choiceC: "WARNING: Strong current - power down before opening",
        choiceD: "WARNING: Hazardous material inside",
        correct: "A",
    },
    {
        question: "In 1955, Marty asks for a Pepsi Free at Lou's diner. What does he want it free of?", 
        choiceA: "Charge",
        choiceB: "Caffeine",
        choiceC: "Additives",
        choiceD: "Sugar",
        correct: "D",
    }
]

function displayQuestion() {
    var q = questions[currentQuestionindex];
    question.innerHTML = "<h3>" + q.question + "</h3>";
    choiceA.innerHTML = "<h5>" + q.choiceA + "</h5>";
    choiceB.innerHTML = "<h5>" + q.choiceB + "</h5>";
    choiceC.innerHTML = "<h5>" + q.choiceC + "</h5>";
    choiceD.innerHTML = "<h5>" + q.choiceD + "</h5>"; 
}

start.addEventListener("click",startQuiz)

function startQuiz() {
start.style.display = "none";
displayQuestion();
quiz.style.display = "block";
renderCounter();
TIMER = setInterval(renderCounter,1000)
}

var lastQuestionindex = questions.length - 1
var currentQuestionindex = 0;
let count =0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth/questionTime;
let TIMER;

function renderCounter() {
    if(count <= questionTime){
        counter.innerHTML = "<h1>" + count + "</h1>";
        timeGauge.style.width = count * gaugeUnit;
        count++;
    } else {
        count = 0;
        if(currentQuestionindex < lastQuestionindex) {
            currentQuestionindex++;
            displayQuestion(); 
        } else {
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

function checkAnswer(answer) {
    if(answer == questions[currentQuestionindex].correct) {
        score++;
        correct();
    } else {
        wrong();
    }
    count = 0; 
    if(currentQuestionindex < lastQuestionindex) {
        currentQuestionindex++;
        displayQuestion(); 
    } else {
        clearInterval(TIMER);
        scoreRender();
    }
}

function correct() {
    //change font to green
    correct++;
}

function wrong() {
    //change font to red
    wrong++;
}

function scoreRender() {
    // render the score as a percentage of what was right and wrong
}