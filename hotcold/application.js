$(document).ready(function(){


var answer = Math.floor(Math.random() *100);

//Guesses by the user:

function getAnswer(computerAnswer, humanGuess){

var difference=Math.abs(computerAnswer - humanGuess)

if(humanGuess === computerAnswer){
	return "Wow, you actually guessed right!";
}

else if(difference > 0 && difference <=10){
	return "Hot damn!";
}

else if(difference >=11 && difference <= 20){
	return "Warming up!";
}
else if(difference >=21 && difference <= 30){
	return "A little chilly";
}

else if(difference >=31){
	return "It's getting cold!";
}

else{
	return "Not even close!";
}

}




});