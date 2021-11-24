import './assets/css/style.css';

const relogio = document.querySelector(".contador");
const botaoIniciar = document.querySelector(".iniciar");
const botaoPausar = document.querySelector(".pausar");
const botaoZerar = document.querySelector(".zerar");

let horas = 0;
let minutos = 0;
let segundos = 0;

let contarSegundos;
let contarMinutos;
let contarHoras;

function contador() {
  contarSegundos = setInterval(() => {
    relogio.innerHTML = `${("00" + horas).slice(-2)}:${("00" + minutos).slice(
      -2
    )}:${("00" + segundos++).slice(-2)}`;
  }, 1000);

  contarMinutos = setInterval(() => {
    segundos = 0;
    minutos++;
  }, 60000);
  contarHoras = setInterval(() => {
    segundos = 0;
    minutos = 0;
    horas++;
  }, 3600000);
}

function pausar() {
  clearInterval(contarSegundos);
  clearInterval(contarMinutos);
  clearInterval(contarHoras);
}

botaoIniciar.addEventListener("click", function () {
  clearInterval(contarSegundos);
  clearInterval(contarMinutos);
  clearInterval(contarHoras);
  contador();
  relogio.style.color = "rgb(56, 105, 157)";
});

botaoPausar.addEventListener("click", function () {
  pausar();
  relogio.style.color = "red";
});

botaoZerar.addEventListener("click", function () {
  pausar();
  horas = 0;
  minutos = 0;
  segundos = 0;
  relogio.innerHTML = `00:00:00`;
  relogio.style.color = "rgb(17, 51, 108)";
});
