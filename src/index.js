// створюємо клас
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
  }
  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;
      const timeSecs = this.getTimeComponents(time);
      this.updateClockface(timeSecs);
    }, 1000);
  }
  // оновлюємо числа на циферблату
  updateClockface({ days, hours, mins, secs }) {
    const timerId = document.querySelector(this.selector);
    const daysId = timerId.querySelector('span[data-value="days"]');
    const hoursId = timerId.querySelector('span[data-value="hours"]');
    const minsId = timerId.querySelector('span[data-value="mins"]');
    const secsId = timerId.querySelector('span[data-value="secs"]');

    daysId.textContent = `${days}`;
    hoursId.textContent = `${hours}`;
    minsId.textContent = `${mins}`;
    secsId.textContent = `${secs}`;
  }
  // математичний розрахунок днів годин хвилин секунд
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  //   Приймає число, проводить до рядку і добавляє в початок 0 якщо число менше 2-х зніків

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('December 17, 2020'),
});
