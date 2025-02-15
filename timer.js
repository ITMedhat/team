let countDownDate = new Date("Feb 15, 2025 18:40:0").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;

  if (dateDiff >= 0) {
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
  } else {
    clearInterval(counter);
    document.querySelector(".days").innerHTML = 0;
    document.querySelector(".hours").innerHTML = 0;
    document.querySelector(".minutes").innerHTML = 0;
    document.querySelector(".seconds").innerHTML = 0;
  }
}, 1000);
