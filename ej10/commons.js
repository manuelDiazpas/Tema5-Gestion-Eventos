/**10. Dada la página index.html con un temporizador de cuenta regresiva
 * que inicia en 30 segundos. El usuario tendrá tres botones:
 * Iniciar, Pausar y Reiniciar. El temporizador se mostrará en pantalla
 * y disminuirá de 1 en 1 segundo. Cuando el temporizador llegue a 0,
 * mostrará "¡Tiempo agotado!".
 */
var tiempo = 0;
tiempo = Number(document.getElementById("temporizador").textContent);

var temporizador;

iniciarTemporizador = (e) => {
  e.preventDefault();
  temporizador = setInterval(function () {
    if (tiempo <= -1) {
      clearInterval(temporizador);
      alert("Tiempo agotado!");
    } else {
      document.getElementById("temporizador").innerHTML = tiempo;
      tiempo--;
    }
  }, 1000);

  if (tiempo == 0) {
    clearInterval(temporizador);
    alert("Tiempo agotado!");
  }
};

parar = () => {
  clearInterval(temporizador);
};

reiniciar = () => {
  clearInterval(temporizador);
  tiempo = 30;
  temporizador = setInterval(function () {
    document.getElementById("temporizador").innerHTML = tiempo;
    tiempo--;
  }, 1000);
};

inicio = (e) => {
  document
    .getElementById("iniciar")
    .addEventListener("click", iniciarTemporizador);
  document.getElementById("pausar").addEventListener("click", parar);
  document.getElementById("reiniciar").addEventListener("click", reiniciar);
};

window.addEventListener("DOMContentLoaded", inicio);
