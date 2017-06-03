# What is it?
A compatibility shim for the long-dead blink tag. I wouldn't recommend actually using this, except for some sort of prank or something.
It blinks text in the `<blink>` tag. It shows for 3/4 of a second, and disapears for 1/4, because that is what Wikiepedia says Firefox did.
## Usage
The syntax is similar to any other text tag in HTML, but this one blinks!
```html
...

<blink>This text blinks!</blink>
...
```
There are two ways, not sure about performance.:
JavaScript:
```html
<script type="text/javascript" src="https://cdn.rawgit.com/PorygonZRocks/blink-shim/82cf663c/blink-shim.js"></script>
```
  <details>
    <summary>Click to show code.</summary><p>
<!-- alternative placement of p shown above -->

```javascript
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
```

  </p></details>

CSS3:
```html
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/PorygonZRocks/blink-shim/5486ca43/blink-shim.css" />
```
  <details>
    <summary>Click to show code.</summary><p>
<!-- alternative placement of p shown above -->

```css
blink {
	animation-duration: 1s;
	animation-name: blinking;
	animation-iteration-count: infinite;
	animation-timing-function: steps(2, start);
}
@keyframes blinking {
75% {
		visibility: hidden;
	}
}
```

  </p></details>

Demo: https://porygonzrocks.github.io/blink-shim


  <details>
    <summary>Click to show code.</summary><p>

```javascript
// including code
```

  </p></details>

