var pics = [
	"one.jpg",			//0
	"two.jpg",			//1
	"three.jpg"			//2
						//3
];

var btn = document. querySelector("button");
var img = document.querySelector("img")
var	counter = 1;

btn. addEventListener("click",function(){
	if (counter === 3) {
		counter = 0;
	}
	img.src = pics[counter]
	counter = counter + 1;
});

