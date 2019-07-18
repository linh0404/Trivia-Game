// PSEUDOCODE
// clicking the "start quiz" button will display the main page i.e heading, score, questions, answers and charge
// list questions in an object/array containing question, choices and correct answer
// record userchoice and tally if correct
// have a timer for each question ~ 30 seconds
// user must choose an option before time runs out
// if time runs out and user hasnt chosen, it will move to the next question and score is 0
// last question is chosen - results will appear as percentage

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


let questions = [
    {
        question: "What is name of the time travelling vehicle?" 
        choiceA: "Time-Turner",
        choiceB: "Tardis",
        choiceC: "Delorean",
        choiceD: "Time Displacement Equipment"
        correct: "C"
    },
    {
        question: "Question" 
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correct: "A"
    },
    {
        question: "Question" 
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correct: "D"
    },
    {
        question: "Question" 
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correct: "B"
    }
]

var lastQuestionindex = questions.length - 1
var currentQuestionindex = 0;

function displayQuestion() {
    var q = questions[currentQuestionindex];
    question.innerHTML = 
}