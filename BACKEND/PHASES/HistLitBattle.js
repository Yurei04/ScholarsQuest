var temp = document.querySelector('.time');
var button = document.querySelector("#button-game");
var words = document.querySelector(".words");
var timerDiv = document.querySelector(".time");
var scoreDiv = document.querySelector(".score");
var points = 0;
var damage = 0;
var spans;
var typed;
var seconds = 30; // Set it to 30 initially
var spark = new Audio("http://k003.kiwi6.com/hotlink/qdpr7bioht/spark.mp3");

// Countdown timer
function countdown() {
  points = 0;
  var timer = setInterval(function() {
    button.disabled = true;
    seconds--;
    temp.innerHTML = seconds;
    if (seconds === 0) {
      alert("Game over! Your total damage dealt is " + points);
      scoreDiv.innerHTML = "0";
      words.innerHTML = "";
      button.disabled = false;
      clearInterval(timer);
      seconds = 30; // Reset to 30 instead of 60
      timerDiv.innerHTML = "30"; // Update to match the new time
      button.disabled = false;	
    }
  }, 1000);
}

// Generate random word and display as spans
function random() {
  words.innerHTML = "";
  var randomIndex = Math.floor(Math.random() * list.length); // Better naming
  var wordArray = list[randomIndex].split("");
  wordArray.forEach(function(letter) {
    var span = document.createElement("span");
    span.classList.add("span");
    span.innerHTML = letter;
    words.appendChild(span);
  });
  spans = document.querySelectorAll(".span");
}

const list = [
  'ACCOUNT', 'MATH', 'TECHNOLOGY', 'COMPUTER', 'SCIENCE', 'HISTORY', 'GEOGRAPHY',
  'CHEMISTRY', 'PHYSICS', 'BIOLOGY', 'LITERATURE', 'ART', 'MUSIC', 'ENGINEERING',
  'MEDICINE', 'PHILOSOPHY', 'PSYCHOLOGY', 'SOCIOLOGY', 'POLITICS', 'ECONOMICS',
  'STATISTICS', 'ALGEBRA', 'GEOMETRY', 'CALCULUS', 'TRIGONOMETRY', 'ASTRONOMY',
  'ENVIRONMENT', 'OCEANOGRAPHY', 'GENETICS', 'BOTANY', 'ZOOLOGY', 'ECOLOGY',
  'NEUROSCIENCE', 'ANATOMY', 'PHYSIOLOGY', 'MICROBIOLOGY', 'IMMUNOLOGY', 'VIROLOGY',
  'BACTERIOLOGY', 'BIOCHEMISTRY', 'MOLECULAR', 'CELLULAR', 'EVOLUTION', 'CLIMATOLOGY',
  'METEOROLOGY', 'GEOLOGY', 'MINERALOGY', 'PALEONTOLOGY', 'SEISMOLOGY', 'VOLCANOLOGY',
  'HYDROLOGY', 'ENGINEERING', 'MATERIALS', 'ELECTRICAL', 'MECHANICAL', 'CIVIL',
  'AEROSPACE', 'ROBOTICS', 'AUTOMATION', 'ARTIFICIAL', 'INTELLIGENCE', 'MACHINE',
  'LEARNING', 'DATA', 'ANALYTICS', 'CYBERSECURITY', 'NETWORKS', 'BLOCKCHAIN',
  'CRYPTOGRAPHY', 'PROGRAMMING', 'SOFTWARE', 'DEVELOPMENT', 'WEB', 'MOBILE',
  'APPLICATIONS', 'DATABASES', 'OPERATING', 'SYSTEMS', 'VIRTUALIZATION', 'CLOUD',
  'COMPUTING', 'DEVOPS', 'VERSION', 'CONTROL', 'INTERNET', 'OF', 'THINGS',
  'AUGMENTED', 'REALITY', 'VIRTUAL', 'MIXED', 'NANOTECHNOLOGY', 'BIOTECHNOLOGY',
  'PHOTONICS', 'QUANTUM', 'MATERIALS', 'TELECOMMUNICATIONS', 'ENERGY', 'RENEWABLE',
  'NUCLEAR', 'ENGINEERING'
];

// Start the game
button.addEventListener("click", function(e) {
  countdown();
  random();
  button.disabled = true;
});

// Typing logic
function typing(e) {
  typed = String.fromCharCode(e.which).toUpperCase();
  for (var i = 0; i < spans.length; i++) {
    if (spans[i].innerHTML === typed && !spans[i].classList.contains("bg") && 
        (spans[i - 1] === undefined || spans[i - 1].classList.contains("bg"))) {
      spans[i].classList.add("bg");
      damage++;
      break;
    }
  }

  var allTyped = Array.from(spans).every(span => span.classList.contains("bg"));

  // If all letters are typed correctly
  if (allTyped) {
    spark.pause();
    spark.currentTime = 0;
    spark.play();
    
    points += damage;
    scoreDiv.innerHTML = points;
    
    words.classList.add("fadeOut");
    
    // Wait before resetting for the next word
    setTimeout(function() {
      words.className = "words"; // Reset animation class
      damage = 0;
      random();
    }, 400);
  }
}

document.addEventListener("keydown", typing);
