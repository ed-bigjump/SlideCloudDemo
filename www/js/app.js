$(function(){
	$('.grid-cell').click(function(){		
		$(this).children('.overlay').show();
	});
	
	$('.overlay').click(function(event){
		event.stopPropagation();
		$(this).hide();
	});
});