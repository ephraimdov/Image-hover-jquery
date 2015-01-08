$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();
	$('.thum').hover(function() {
	$(this).find('.caption').animate({width:'toggle'},350);
	});    
 
    /*$('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(500); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(500); //.fadeOut(205)
        }); */
		
		
/*$( document ).click(function() {
$( "#toggle" ).animate({width:'toggle'},350); for slide left to right(assign in css left:0)
});*/
});