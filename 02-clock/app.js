const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  // grab date
  const now = new Date();
  // get current second
  const seconds = now.getSeconds();
  // convert seconds into degrees for clock hand rotation - add 90 to off set transform rotate in css
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  // add style for css rotation of second hands
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((minutes / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Second hand timing interval
setInterval(setDate, 1000);

setDate();
