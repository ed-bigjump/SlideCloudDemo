$(function(){
	$('.grid-cell .inner').click(function(){		
		$(this).children('.overlay').show();
	});
	
	$('.overlay').click(function(event){
		event.stopPropagation();
		$(this).hide();
	});
});