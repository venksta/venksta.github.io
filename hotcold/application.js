$(document).ready(function(){

var computerAnswer = Math.floor(Math.random() *100);
var humanGuess = 0;
var restart = 0;
//Guesses by the user:



$('#Guess').click(function getAnswer(computerAnswer, humanGuess){

var difference=Math.abs(correctAnswer - humanGuess)

if(humanGuess === computerAnswer){
	$('#response').text("Wow, you actually guessed right!");
}

else if(difference > 0 && difference <=10){
	$('#response').text("Hot damn!");
}

else if(difference >=11 && difference <= 20){
	$('#response').text("Warming up!");
}
else if(difference >=21 && difference <= 30){
	$('#response').text("A little chilly");
}

else if(difference >=31){
	$('#response').text("Brrrr...It's getting cold!");
}

else{
	$('#response').text("Not even close!");
}

}

$('#Reset').click(function)(){
	computerAnswer = Math.floor(Math.random()*100);
	restart = 0;
	$('#main-area').css("background-color", "#FFFF73")

}

}


});