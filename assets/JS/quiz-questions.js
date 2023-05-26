var startBtn = document.querySelector("#start")
var submitBtn = document.querySelector("#submit")
// These are the different sections. Depending on the part of the quiz, we may hide or show
// these sections using .style.display = 'none' or .style.display = 'block' to show
var quizStartSection = document.querySelector("#quiz-start")
var quizQuestionsSection = document.querySelector("#quiz-questions")
var inputInitialsSection = document.querySelector('#inputInitials')
var submitedSection = document.querySelector("#submitedHighscores")

// Get all button objects
var button1 = document.querySelector("#option0")
var button2 = document.querySelector("#option1")
var button3 = document.querySelector("#option2")
var button4 = document.querySelector("#option3")

// Initialize this section to not show until quiz is started
quizQuestionsSection.style.display = "none"

// Initialize this section to not show until quiz is done 
inputInitialsSection.style.display = "none"

///// Initialize this section to not show until submit the score
submitedSection.style.display = "none"

// Global variable for current question.
var currentQuestion = 0;


// This is the function that is run when you click the "Start Quiz" button
function startQuiz(){
    console.log("Start the quiz!")
    // Hide the start section and show the quiz question section
    quizStartSection.style.display = "none";
    quizQuestionsSection.style.display = "block"

    // Begin countdown
    setTime()
    // Set first question
    setQuestion()
}




var questions = [

    {
        question: "Commonly used data types DO NOT include.",
        options: ['Strings', 'Booleans','Alerts', 'integers'],
        answer: 'Alerts',
        
    },

    {
        question: "The condition in an if/else statement is enclosed within_____.",
        options: ['Quots', 'Curly bracket','Parenthesis', 'Square bracket'],
        answer: 'Curly bracket',
    },

    {
        question: "Arrays in javaScripts can be used to store______.",
        options: ['Numbers and strings', 'Other Arrays','Booleans', 'All of the above'],
        answer: 'All of the above',
    },
    {
        question: "String values must be enclosed within______ when being assigned to variables.",
        options: ['Commas', 'Curly brackets','Quots', 'Parenthesis'],
        answer: 'Quots',
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:.",
        options: ['JavaScriptes', 'Terminal/Bash','for loop', 'Console.log'],
        answer: 'Console.log',
    },

]


function setQuestion(){
    // Get the question from questions array by index. The currentQuestion variable is a global variable
    // that keeps track of which question we are on.
    var thisQuestion = questions[currentQuestion];

    // Set the question in the HTML
    var questionTitle = document.getElementById("question-title")
    questionTitle.innerHTML = thisQuestion.question

    // Get and set the options in the HTML. We set the ids in the HTML strategically so we
    // could dynamically loop the options array in the question and set it based on the index.
    var options = thisQuestion.options
    for (var i=0;i<options.length;i++){
        var option = document.getElementById("option" + i)
        option.innerHTML = options[i]
    }
}

function saveAnswer(){
    // "this" is a keyword in javascript. Try logging it in this function to see what it equals. Use
    // console.log(this) to see the value of this.
    var answer = this.innerHTML;
    
    // Subtract time if wrong answer
    if (answer !== questions[currentQuestion].answer){
        // subtract time here
        secondsLeft = secondsLeft - 10
    }

    // Set next question
    currentQuestion++

    // Only proceed to next question if the current question we are on is less than the length of the
    // questions array. We dont want to continue if we are on the last question. Instead, we want to hide
    // this section and display the final score and show the enter initials section.
    if (currentQuestion < questions.length){
        setQuestion()
    }
    else{
        // Hide quiz section, show initials section
        quizQuestionsSection.style.display = "none"
        inputInitialsSection.style.display = "block"
        
        // the secondsLeft variable is on the other javascript page. It is still available though.
        var scoreElement = document.getElementById("finalScore")
        scoreElement.innerHTML = 'Your final score is: ' + secondsLeft
        
        // Stop quiz (hide the time) 
        document.getElementById('timer').style.display = 'none'

    }
    
}

function submitedScores(){
    console.log("Inside the function!")
    var initials = document.getElementById("initials").value
    console.log(initials)
    var highscores = JSON.parse(localStorage.getItem("highscores"))
    if (!highscores){
        highscores=[]
    }
    var userScores = {
        initials : initials, 
        score : secondsLeft 
    }

    highscores.push(userScores)
    localStorage.setItem("highscores", JSON.stringify(highscores));
    


    ///// hide initials section, show submited highscores
    // inputInitialsSection.style.display = "none"
    // submitedSection.style.display = "block"
    window.location.href= "highScores.html"    
    
}



///// Add event listener to generate submit highscores button
submitBtn.addEventListener("click", submitedScores);

// Add event listener to generate button
startBtn.addEventListener("click", startQuiz);

// Add event listener to all buttons to listen to User answer of question
button1.addEventListener("click", saveAnswer);
button2.addEventListener("click", saveAnswer);
button3.addEventListener("click", saveAnswer);
button4.addEventListener("click", saveAnswer);

