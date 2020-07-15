const startingCount = 25;
let timeInSeconds = startingCount * 60;
let intervalCount;


const audioFiles = []

const countStart = document.querySelector(".count-down");
const buttonStart = document.querySelector(".start");
const buttonReset = document.querySelector(".reset");

const body = document.querySelector("body")
const buttonMode = document.querySelector(".mode");
const container = document.querySelector(".container")

buttonMode.addEventListener("click", function(){
    body.classList.toggle("dark")
    container.classList.toggle("dark")
    buttonMode.classList.toggle("btn-dark")
    buttonMode.classList.toggle("btn-light")
    buttonStart.classList.toggle("btn-light")
    buttonStart.classList.toggle("btn-dark")
    buttonReset.classList.toggle("btn-light")
    buttonReset.classList.toggle("btn-dark")
})

buttonStart.addEventListener("click", start);

function start() {
  intervalCount = setInterval(updateCountDown, 1000);

  function updateCountDown() {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    //If there is still time left, decrement timeInSeconds.

    if (timeInSeconds > 0) {
      timeInSeconds--;
    } else {
      //When there is no time left, stop timer.
      clearInterval(intervalCount);
    }

    if (seconds < 10) {
      countStart.innerHTML = minutes + ":0" + seconds;
    } else {
      countStart.innerHTML = minutes + ":" + seconds;
    }
    //Show time on browser Tab
    document.title = "Motivational Timer " + countStart.innerHTML;

    if (seconds === 0 && minutes === 0) {
      let audio = new Audio("https://raw.githubusercontent.com/fchung7/motivational-timer/master/audio/shia-dont.mp3");
      audio.play();
    }
    
  }
  console.log("start");
  buttonStart.removeEventListener("click", start);
  buttonStart.innerHTML = "Pause";
  buttonStart.addEventListener("click", pause);
  let audio = new Audio("https://raw.githubusercontent.com/fchung7/motivational-timer/master/audio/shia-stop.mp3")
  audio.play()
}

function pause() {
  console.log("pause");
  buttonStart.removeEventListener("click", pause);
  clearInterval(intervalCount);
  buttonStart.innerHTML = "Start";
  buttonStart.addEventListener("click", start);
}

buttonReset.addEventListener("click", function () {
  timeInSeconds = startingCount * 60;
  clearInterval(intervalCount);
  buttonStart.innerHTML = "Start";
  buttonStart.addEventListener("click", start);
  countStart.innerHTML = "25:00";
  document.title = "Motivational Timer " + countStart.innerHTML;
});
