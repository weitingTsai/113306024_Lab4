let buttonList = document.querySelectorAll("button.drum");

for (var i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener("click", function () {
    var button = this.innerHTML;
    sound(button);
    buttonChange(button);
  });
}

document.addEventListener("keypress", function (letter){
  sound(letter.key);
  buttonChange(letter.key);
});

function sound (alphabet){
	switch(alphabet){
	case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(buttonInnterHtml);
      
  }
}

function buttonChange (letter) {
  var pressedButton = document.querySelector("."+letter);
  pressedButton.classList.add("pressed");
  setTimeout(function (){
    pressedButton.classList.remove("pressed");
  },100);
}