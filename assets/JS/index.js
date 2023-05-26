//Selects start button by id
var startQuiz = document.getElementById("start")
//Selects timer element by class
var timeEl = document.querySelector(".timer")

// Selects element by id
var mainEl = document.getElementById("seconds")

var secondsLeft = 75;

function setTime(){
    //Sets interval in variable
    var timeInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent= "Time left: " + secondsLeft + " Seconds"

        if(secondsLeft === 0){
        //Stops execution of action at set interval
        clearInterval(timeInterval);
        //Calls function to creat and append image
        sendMessage();
        }
    }, 1000);
}

//function to create and append quiz complete and time out
function sendMessage(){
    timeEl.textContent = " ";

}
