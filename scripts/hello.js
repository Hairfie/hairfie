$(document).ready(function() {
	setTimeout(function(){
		TweenMax.to('.landing header', 1, {opacity:1,ease:Power4.easeOut});
		TweenMax.to('.headline', 0.7, {opacity:1,top:0,ease:Power4.easeOut,delay:0.5});
		TweenMax.to('.searchbar', 0.7, {opacity:1,marginTop:'+=20',ease:Power4.easeOut,delay:0.65});
	},250);
});