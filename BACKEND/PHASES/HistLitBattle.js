var temp = document.querySelector('.time');
var button = document.querySelector("button");
var words = document.querySelector(".words");
var timerDiv = document.querySelector(".time");
var scoreDiv = document.querySelector(".score");
var points = 0;
var damage = 0;
var spans;
var typed;
var seconds = 30;
var spark = new Audio("http://k003.kiwi6.com/hotlink/qdpr7bioht/spark.mp3");

function countdown() {
  points = 0;
  var timer = setInterval(function(){
    button.disabled = true;
    seconds--;
    temp.innerHTML = seconds;
    if (seconds === 0) {
      alert("Game over! Your total damage dealt is " + points);
      scoreDiv.innerHTML = "0";
      words.innerHTML = "";
      button.disabled = false;
      clearInterval(timer);
      seconds = 60;
      timerDiv.innerHTML = "60";
      button.disabled = false;	
    }
  }, 1000);
}

function random() {
  words.innerHTML = "";
  var random = Math.floor(Math.random() * (list.length));
  var wordArray = list[random].split("");
  for (var i = 0; i < wordArray.length; i++) { 
    var span = document.createElement("span");
    span.classList.add("span");
    span.innerHTML = wordArray[i];
    words.appendChild(span);
  }
  spans = document.querySelectorAll(".span");
}

const list = ['ACCOUNT', 'MATH', 'TECHNOLOGY'];

button.addEventListener("click", function(e){
  countdown();
  random();
  button.disabled = true;
});

function typing(e) {
  typed = String.fromCharCode(e.which).toUpperCase();
  for (var i = 0; i < spans.length; i++) {
    if (spans[i].innerHTML === typed) {
      if (spans[i].classList.contains("bg")) { 
        continue;
      } else if (spans[i].classList.contains("bg") === false && (spans[i-1] === undefined || spans[i-1].classList.contains("bg"))) {
        spans[i].classList.add("bg");
        damage++;
        break;
      }
    }
  }
  
  var checker = 0;
  for (var j = 0; j < spans.length; j++) {
    if (spans[j].className === "span bg") {
      checker++;
    }
  }
  
  if (checker === spans.length) {
    spark.pause();
    spark.currentTime = 0;
    spark.play();
    words.classList.add("animated", "fadeOut");
    
    points += damage;
    scoreDiv.innerHTML = points;
    
    document.removeEventListener("keydown", typing, false);
    
    setTimeout(function(){
      damage = 0;
      words.className = "words";
      random();
      document.addEventListener("keydown", typing, false);
    }, 400);
  }
}

document.addEventListener("keydown", typing, false);
