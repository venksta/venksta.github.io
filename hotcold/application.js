	$(document).ready(function(){

		var comp_choice = Math.floor(Math.random()*101);
		var count = 0;
		var new_guess = 0;
		var old_guess = 0;
		
		$('#rand_num').click(function(){
			comp_choice = Math.floor(Math.random()*101);
			count = 0;
			$('#main').css("background-color","white");
			$('#message').text("A new beginning!");
		});

		$('#submit').click(function(){
			//alert(comp_choice);
			//alert(count);
			if (count==0){
				count=1;
				new_guess = Number(document.getElementById("choice").value);
				if(new_guess==comp_choice){
					$('#message').text("You got the answer!");
				}else if(new_guess<comp_choice){
					$('#message').text("Hmmm You are Lower!");
				}else if(new_guess>comp_choice){
					$('#message').text("Hmmm You are Higher!");
				
			}
		}
			else if (count==1)
			{
				old_guess = new_guess;
				new_guess = Number(document.getElementById("choice").value);
				if(new_guess==comp_choice){
					$('#message').text("You got the answer!");
				}else if((Math.abs(new_guess-comp_choice))>(Math.abs(old_guess-comp_choice))){
					$('#message').text("Oops you are getting colder!");
					$('#main').css("background-color","#06406C");
				}else if((Math.abs(new_guess-comp_choice))<(Math.abs(old_guess-comp_choice))){
					$('#message').text("You are getting warmer!");
					$('#main').css("background-color","#CC4037");
				}
			}
			//alert(new_guess);
			//alert(old_guess);
		});
		});
