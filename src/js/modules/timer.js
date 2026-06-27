export default function timer() {
  const deadline = "2026-06-29";

  const getTimeRemain = (endTime) => {
    let days, hours, minutes, seconds;
    const t = Date.parse(endTime) - Date.parse(new Date());

    if (t < 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((t / 1000 / 60) % 60);
      seconds = Math.floor((t / 1000) % 60);
    }

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  const setClock = (time) => {
    const days = document.querySelector("#days"),
      hours = document.querySelector("#hours"),
      minutes = document.querySelector("#minutes"),
      seconds = document.querySelector("#seconds");

    const updateClock = () => {
      const t = getTimeRemain(time);

      days.textContent = t.days < 10 ? `0${t.days}` : t.days;
      hours.textContent = t.hours < 10 ? `0${t.hours}` : t.hours;
      minutes.textContent = t.minutes < 10 ? `0${t.minutes}` : t.minutes;
      seconds.textContent = t.seconds < 10 ? `0${t.seconds}` : t.seconds;

      if (t.total <= 0) {
        clearInterval(interval);
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
  };

  setClock(deadline);
}
