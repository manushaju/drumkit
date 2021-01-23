var drums = {
	"w":"tom-1.mp3",
	"a":"tom-2.mp3",
	"s":"tom-3.mp3",
	"d":"tom-4.mp3",
	"j":"snare.mp3",
	"k":"crash.mp3",
	"l":"kick-bass.mp3"
};


var noOfDrums = document.querySelectorAll('.drum');

for (var i = 0; i<noOfDrums.length; i++){
	document.querySelectorAll('.drum')[i].addEventListener('click', function (){
		var key1 = this.innerHTML;
		playSound(key1);
	});
	
}

document.addEventListener("keydown", function () {
	playSound(event.key);
});

function playSound(key){
	animateButton(key,'y');
	var audioFile = audioFileSelector(key);
	var audio = new Audio('./sounds/'+audioFile);
	audio.play();	
	animateButton(key,'n');
}

function audioFileSelector(letter){
	var fileName = '';
	switch(letter) {
		case 'w':
			fileName = drums.w;
			break;
		case 'a':
			fileName = drums.a;
			break;
		case 's':
			fileName = drums.s;
			break;
		case 'd':
			fileName = drums.d;
			break;
		case 'j':
			fileName = drums.j;
			break;
		case 'k':
			fileName = drums.k;
			break;
		case 'l':
			fileName = drums.l;
			break;
	}
	return fileName;
}

function animateButton(element){
	var buttonToBeAnimated = document.querySelector("."+element);
	buttonToBeAnimated.classList.add("pressed");
	setTimeout(() => {
		buttonToBeAnimated.classList.remove("pressed");
	},200)

}



