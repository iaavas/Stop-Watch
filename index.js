let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let lapBtn = document.getElementById("lap");
let sc = 1;
let hr = 00;
let min = 00;
let sec = 00;
let count = 00;

var arr = [];

startBtn.addEventListener("click", () => {
  startBtn.classList.toggle("active_btn");
});

function getTimer() {
  console.log(hrString, minString, secString);
  lap = document.createElement("p");
  lap.innerHTML = `${hrString}:${minString}:${secString}`;
  var elem = document.getElementsByClassName("laps")[0];
  elem.appendChild(lap);
}

resetBtn.addEventListener("click", () => {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("innerLap").innerHTML = "";
  arr = [];
});

function startTimer() {
  if (startBtn.classList.contains("active_btn")) {
    timer = true;
  } else {
    timer = false;
  }

  if (timer == true) {
    count++;

    if (count == 100) {
      sec++;
      count = 0;
    }

    if (sec == 60) {
      min++;
      sec = 0;
    }

    if (min == 60) {
      hr++;
      min = 0;
      sec = 0;
    }

    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;

    if (hr < 10) {
      hrString = "0" + hrString;
    }

    if (min < 10) {
      minString = "0" + minString;
    }

    if (sec < 10) {
      secString = "0" + secString;
    }

    if (count < 10) {
      countString = "0" + countString;
    }

    document.getElementById("hr").innerText = hrString;
    document.getElementById("min").innerText = minString;
    document.getElementById("sec").innerText = secString;

    setTimeout(startTimer, 10);
    arr = [hrString, minString, secString];
  }
}

lapBtn.addEventListener("click", showLap);

function showLap() {
  let timeArr = arr;

  let tag = document.createElement("li");
  tag.className = "list_lap";

  if (
    document.getElementById("innerLap").getElementsByClassName("list_lap")
      .length == 4
  ) {
    document.getElementById("innerLap").innerHTML = "";
  }

  tag.innerHTML = `${timeArr[0] ?? 00}:${timeArr[1] ?? 00}:${timeArr[2] ?? 00}`;

  document.getElementById("innerLap").append(tag);
}
startBtn.addEventListener("click", () => {
  timer = true;
  startTimer();
});
