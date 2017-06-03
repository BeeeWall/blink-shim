setInterval(function(){ 
	var blinkTags = document.getElementsByTagName('blink');
	for (var i = 0; i < blinkTags.length; i++) {
        blinkTags[i].style.visibility = "hidden";
    }
	setTimeout(function(){
		for (var i = 0; i < blinkTags.length; i++) {
        	blinkTags[i].style.visibility = "visible";
    	}  
    }, 250);
}, 750);
