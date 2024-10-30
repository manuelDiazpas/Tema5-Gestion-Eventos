/**10. Dada la página index.html con un temporizador de cuenta regresiva
 * que inicia en 30 segundos. El usuario tendrá tres botones:
 * Iniciar, Pausar y Reiniciar. El temporizador se mostrará en pantalla
 * y disminuirá de 1 en 1 segundo. Cuando el temporizador llegue a 0,
 * mostrará "¡Tiempo agotado!".
 */

mostrarDatos = (e) => {
  e.preventDefault();
  $nombre = document.getElementById("nombre").value;
  $apellidos = document.getElementById("apellidos").value;
  $fecha = ventana.getElementById("fecha").value;
  $fechaArray = fecha.split("-");
  $fechaFinal = new Date($fechaArray[0], $fechaArray[1] - 1, $fechaArray[2]);
  $fechaHoy = new Date();

  window.opener.document.getElementById(
    "resultado"
  ).innerHTML = `<p>Nombre: ${$nombre}</p>
  <p>Apellidos: ${$apellidos}</p>
  <p>Fecha: ${$fechaFinal}</p>`;

  window.opener.document.getElementById("resultado").innerHTML +=
    "Bisisestos: <br>";

  for (
    let index = $fechaFinal.getYear();
    index < $fechaHoy.getYear();
    index++
  ) {
    if (index % 4 === 0 && index % 100 !== 0) {
      window.opener.document.getElementById(
        "resultado"
      ).innerHTML += `${index} <br>`;
    }
  }

  window.close();
};

inicio = () => {
  document.getElementById("enviar").addEventListener("click", mostrarDatos);
};

window.addEventListener("DOMContentLoaded", inicio);
