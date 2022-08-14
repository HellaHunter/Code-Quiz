var countdown = document.querySelector("#timer")
var start_quiz =  document.querySelector("#start-quiz-btn")
var resultText = document.querySelectorAll(".result")
var correctChoice = document.querySelectorAll(".correct-answers")
var wrongChoice = document.querySelectorAll(".answers")

var subtracted = 5000
var time_left = 60;

var display_none1 = document.querySelector("#questions_block1")
var display_none2 = document.querySelector("#questions_block2")
var display_none3 = document.querySelector("#questions_block3")
var display_none4 = document.querySelector("#questions_block4")
var display_none5 = document.querySelector("#questions_block5")
var display_none6 = document.querySelector("#questions_block6")
var display_none7 = document.querySelector("#questions_block7")
var display_none8 = document.querySelector("#questions_block8")
var display_none9 = document.querySelector("#questions_block9")
var display_none10 = document.querySelector("#questions_block10")

function start_countdown() {

    var timer = setInterval(function (){

        if(time_left > 0) {
            countdown.textContent = " " + time_left + " seconds left";
            time_left--;
            } else {
            countdown.textContent = " Out of time"
            }
        }, 1000)
}

function change_display(){

    var display_block = document.querySelector("#start_quiz_block")
    

    if (display_block.style.display = 'block') {
        display_block.style.display = 'none';
    } 

    
    if (display_none1.style.display = 'none') {
        display_none1.style.display = 'block'
    }
}

function correctSelection() {
    
    for (let i = 0; i < correctChoice.length; i++) {

    correctChoice[i].addEventListener("click", function() {
        
    })
}}

function incorrectSelection() {
    
    for (let i = 0; i < wrongChoice.length; i++) {

    wrongChoice[i].addEventListener("click", function(){
        
    }) 
}}

start_quiz.addEventListener("click", function(){

    start_countdown()
    change_display()
    correctSelection()
    incorrectSelection()

})