function highScores(){
    var listOfHighscores = JSON.parse(localStorage.getItem("highscores"))
    console.log(listOfHighscores)
   for (let index = 0; index < listOfHighscores.length; index++) {
    const element = listOfHighscores[index];
    var listItem = document.createElement("li")
    listItem.textContent = element
    var ul = document.getElementById("highScores")
    ul.appendChild(listItem)
   }
}


highScores()

