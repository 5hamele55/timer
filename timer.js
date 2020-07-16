let counter = 0;
let interval = 0;
function calculateTimer(t) {
    const h = Math.floor(t / 60 / 60) % 60;
    const m = Math.floor(t / 60) % 60;
    const s = t % 60;
    count.innerHTML = `${h}:${m}:${s}`;
}

// document.getElementById('start')
// .addEventListener('click', () => {
//     reset();
//     resume();
// });
function start() {
    reset();
    resume();
}
function resume() {
    clearInterval(interval);
    interval = setInterval(() => {
        counter++;
        calculateTimer(counter);
    },1000);
}
function stop() {
    clearInterval(interval);
}
function reset() {
    clearInterval(interval);
    counter = 0;
    calculateTimer(counter);
}

