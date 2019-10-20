// We declare variables pertaining to quiz results in an object 
let quiz = {
    correctAnswers: 0,
    wrongAnswers: 0,
    noAnswers: 0,
    time: 60,       
};


//create one variable to call that we will later add to the page

let questions = [{
    question: "How many planets are in the solar system?",
    choices: ["9, 15, 8, 5"],
    correctAnswer: "8",
},  {

    question: "What is the closest star to Earth?",
    choices: ["Alpha Centauri, Polaris, Sirius, The Sun"],
    correctAnswer: "The Sun",
},  {

    question: "What is the largest planet in the solar system?",
    choices: ["Earth, Saturn, Jupiter, Neptune"],
    correctAnswer: "Jupiter",
},  {

    question: "What is the closest planet to Earth?",
    choices: ["Jupiter, Venus, Mars, Pluto"],
    correctAnswer:"Venus",
}];
        console.log(questions[1].correctAnswer)



$(document).ready(function(event){
    $(".startButton").click(function(event){
    });
    

});


