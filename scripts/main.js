TweenMax.set('.headline', {opacity:0,top:30});
TweenMax.set('.searchbar.hidden-xs', {opacity:0,marginTop:'-=20'});
TweenMax.set('.landing header.hidden-xs', {opacity:0});

TweenMax.set('#content.salon .main-content', {top:20,opacity:0});
TweenMax.set('.hairfie-singleView .single-view', {marginTop:60,opacity:0});
TweenMax.set('.hairfie-singleView .related-hairfies', {marginTop:20,opacity:0});

function setMobileSize() {

    var winW = $(window).width() + 'px';
    TweenMax.set('body, body > div, body > section, body > footer', {width:winW,maxWidth:winW,overflowX:'hidden'});	
    // TweenMax.set('body, body > #content, body > .mobile-nav, body > header, body > section, body > footer, body > .container', {width:winW,maxWidth:winW,overflowX:'hidden'});	

    $(window).resize(function(){
    	TweenMax.set('body, body > div, body > section, body > footer', {width:winW,maxWidth:winW,overflowX:'hidden'});	
    	// TweenMax.set('body, body > #content, body > .mobile-nav, body > header, body > section, body > footer, body > .container', {width:winW,maxWidth:winW,overflowX:'hidden'});	
    });

}