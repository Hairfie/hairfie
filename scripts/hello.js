$(document).ready(function() {
	TweenMax.to('.landing header', 1, {opacity:1,ease:Power4.easeOut});
	TweenMax.to('.headline', 0.7, {opacity:1,top:0,ease:Power4.easeOut,delay:0.5});
	TweenMax.to('.searchbar', 0.7, {opacity:1,marginTop:'+=20',ease:Power4.easeOut,delay:0.65});

	TweenMax.to('#content.salon .main-content', 0.8, {top:0,opacity:1,ease:Power2.easeOut});
	// TweenMax.to('#content.salon .sidebar', 0.8, {marginTop:-90,opacity:1,ease:Power4.easeOut});
});