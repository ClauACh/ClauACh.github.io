var string = "Biologist and Front-end Web developer"; /* type your text here */
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("intro").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',100); /* change 70 for speed */

}
frameLooper();