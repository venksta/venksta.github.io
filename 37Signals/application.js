$(document).ready(function(){


/* These are the three product boxes (basecamp, highrise, and campfire) 
that will be having the hovering effects with jQuery */

/* Basecamp */
	
		$(".basecamp").on("mouseenter", function(){
			event.preventDefault();
			$(".headliner").hide();
			$(this).find(".leftarrow .alt-basecamp").show();
			
	});	

		$(".basecamp").on("mouseleave", function(){
			event.preventDefault();
			$(this).find(".leftarrow .alt-basecamp").hide();
			$(".headliner").show();
	});	

/* Highrise */

		$(".highrise").on("mouseenter", function(){
			event.preventDefault();
			$(".headliner").hide();
			$(this).find(".leftarrow .alt-highrise").show();
			
	});	
	
		$(".highrise").on("mouseleave", function(){
			event.preventDefault();
			$(this).find(".leftarrow .alt-highrise").hide();
			$(".headliner").show();
	});	

/* Campfire */

		$(".campfire").on("mouseenter", function(){
			event.preventDefault();
			$(".headliner").hide();
			$(this).find(".rightarrow .alt-campfire").show();
			
	});	
	
		$(".campfire").on("mouseleave", function(){
			event.preventDefault();
			$(this).find(".rightarrow .alt-campfire").hide();
			$(".headliner").show();
	});	

});
