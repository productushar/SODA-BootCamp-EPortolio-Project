/* This is the Javascript file responsible for the blinking exclamation marks on both the projects.html as well as index.html files */

var showCursor = false
var speed = 500

setInterval(() => {

    if (!showCursor) {
        document.getElementById("cursor").style.opacity = 1
        showCursor = true
    }

    else {
        document.getElementById("cursor").style.opacity = 0
        showCursor = false
    }

}, speed)