setInterval(function () {
    var i, s, tags = document.getElementsByTagName('blink');

    for (i = 0; i < tags.length; ++i) {
        s = tags[i].style;
        s.visibility = s.visibility == 'hidden' ? 'visible' : 'hidden';
    }
}, 1000);
