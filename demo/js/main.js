$(function(){
	
	
	$('.down').click(function(){
		
		$('.slide').betterSlideDown(800);
	})
	
	$('.up').click(function(){
		
		$('.slide').betterSlideUp(800);
	})
	
	
	
	//Reg Demo
	$('.regdown').click(function(){
		
		$('.regslide').slideDown(speed);
	})
	
	$('.regup').click(function(){
		
		$('.regslide').slideUp(speed);
	})
	
})
