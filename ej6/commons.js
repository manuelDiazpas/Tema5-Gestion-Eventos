/**6. Crear un formulario con 2 input de tipo de texto: 
 * Nombre y Apellidos. Y un botón validar.
 * Se tiene que cumplir que:
 * 1. El nombre comienza por vocal.
 * 2. Si los apellidos tienen 2 o más de dos palabras.
 * 
 * Poner debajo de cada input un mensaje en caso 
 * de no cumplir su validación.
 * Una vez hecho, añadir que el mensaje aparezca con letra 
 * de color rojo.


 */

primeraVocal = (e) => {
  trueFalse = false;
  $vocal = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

  for (let index = 0; index < $vocal.length; index++) {
    const element = $vocal[index];
    if (e.target.value.charAt(0) == element) {
      trueFalse = true;
      break;
    } else if (e.target.value.charAt(0) != element) {
      trueFalse = false;
    }
  }

  if (!trueFalse) {
    document.getElementById("mensajeErrorNombre").innerHTML =
      "Tiene que tener la primera en vocal";
  } else if (trueFalse) {
    document.getElementById("mensajeErrorNombre").innerHTML = "";
  }
};

masDeDosPalabras = (e) => {
  if (e.target.value.split(" ").length > 2) {
    document.getElementById("mensajeErrorApellidos").innerHTML =
      "No puede haber más de dos apellidos";
  } else if (e.target.value.split(" ").length <= 2) {
    document.getElementById("mensajeErrorApellidos").innerHTML = "";
  }
};

inicio = () => {
  document.getElementById("nombre").addEventListener("blur", primeraVocal);
  document
    .getElementById("apellidos")
    .addEventListener("blur", masDeDosPalabras);
};

window.addEventListener("DOMContentLoaded", inicio);
