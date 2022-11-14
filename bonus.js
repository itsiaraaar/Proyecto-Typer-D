//array con las palabras del juego
const words = [
  'californication',
  'plataforma5',
  'black',
  'summer',
  'flea',
  'aeroplane',
  'peppers',
  'unlimited',
  'arcadium',
  'love',
  'getaway',
  'stadium',
  'quixoticelixer',
  'quarter',
  'snow',
  'dylan',
  'zephyr',
  'funky',
  'chili'
];

//Función que toma una palabra aleatoria del array words.
function randomWords() {
  let random = Math.floor(Math.random() * words.length);
  return words[random];
}

//Iniciando variables
var palabraAleatoria = randomWords();
var time = 10;
var score = 0;

//Función para agregar palabra al html
function addToDOM() {
  palabraAleatoria = randomWords();
  h1 = document.getElementById("randomWord");
  h1.textContent = palabraAleatoria;
}

//Invocando la función para que se vea
addToDOM();

//Evento input 
var input = document.getElementById("text");
input.addEventListener("input", function (e) {
  var palabraIngresada = e.target.value;
  if (palabraIngresada === palabraAleatoria) {
    e.target.value = "";
    addToDOM();
    time += 3;
    updateScore()
  }
});


//Función del tiempo
timeInterval = setInterval(actualizarTiempo, 1000);
function actualizarTiempo() {
  t = document.getElementById("timeSpan");
  t.textContent = time + "s";
  time = time - 1;
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

//Función para actualizar el puntaje
function updateScore() {
  score = score + 1;
  document.getElementById("score").textContent = score;
}

//Función para terminar el juego
function gameOver() {
  let end = document.createElement("h1");
  end.textContent = "Te quedaste sin tiempo";
  document.getElementById("end-game-container").appendChild(end);

  let punt = document.createElement("p");
  punt.textContent = "Tu puntaje final es: " + score;
  document.getElementById("end-game-container").appendChild(punt);

  let bot = document.createElement("button");
  bot.textContent = "Volvé a empezar";
  bot.onclick = function () {
    location.reload()
  }
  document.getElementById("end-game-container").appendChild(bot);

}

