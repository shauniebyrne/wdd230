let temperature = parsFloat(document.querySelector('#temp').textContent);
let speed = parsFloat(document.querySelector('#speed').textContent);
let windChill = '';

if (temperature <= 50 && speed > 3) {
    windChill = formula(temperature, speed);
    windChill = `${windChill} &#176; F`
} else {
    windChill = 'N/A';
}

document.querySelector('#wind-chill').innerHTML = windChill;

function formula (t, s) {
    return Math.pow(35.74 + (0.6215 * t) - ((35.75 * s) **  0.16) + ((0.4275 * t * s) ** 0.16));
}