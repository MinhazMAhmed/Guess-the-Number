
    let lives = 10;
    var guessNumber = Math.round(Math.random() * 100);

    function findNumber(){
    let num = parseInt(document.getElementById("num").value);
    let message = document.getElementById("message");
    console.log(guessNumber);

    if(lives>=1){

    if(num < guessNumber){
        message.innerHTML = "OOPS! Your Guess is to low ";
        lives--;
    }

    else if(num > guessNumber){
        message.innerHTML = "OOPS! Your Guess is to high ";
        lives--;
    }

    else{
        message.innerHTML = "Your Guess is right";
    }
    document.getElementById("lives").innerHTML=lives;
}
else{
     lives.innerHTML="Game is Over";
}

}