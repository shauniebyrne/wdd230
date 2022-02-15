let temp = parseFloat(document.querySelector('#temp').textContent);
let speed = parseFloat(document.querySelector('#speed').textContent);
let windChill;

if (temp <= 50 && speed > 3) {
    windChill = calculation(temp, speed);
    windChill = `${windChill} &#176; F`;
} else {
    windChill = 'N/A';
};

document.querySelector('#wind-chill').innerHTML = windChill;

function calculation(t, s) {
    let number = 35.74 + (0.6215 * t) - ((35.75 * s) **  0.16) + ((0.4275 * t * s) ** 0.16);
    return Math.round(number);
};