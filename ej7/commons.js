/**7. Sobre el ejercicio anterior, modificar lo necesario
 * para que una vez que se pulsa el botón, si se cumplen
 * las dos validaciones, el formulario debe redirigir a
 * la página de: https://ceu.es. En caso contrario,
 * el comportamiento debe ser igual al ejercicio anterior
 */

primeraMayuscula = (e) => {
  const nombre = e.target.value.charAt(0).toUpperCase();
  if (e.target.value.charAt(0) !== nombre) {
    document.getElementById("mensajeErrorNombre").innerHTML =
      "Tiene que tener la primera en mayúscula";
    return false;
  } else {
    document.getElementById("mensajeErrorNombre").innerHTML = "";
    return true;
  }
};

masDeDosPalabras = (e) => {
  if (e.target.value.split(" ").length > 2) {
    document.getElementById("mensajeErrorApellidos").innerHTML =
      "No puede haber más de dos apellidos";
    return false;
  } else {
    document.getElementById("mensajeErrorApellidos").innerHTML = "";
    return true;
  }
};

validacionFinal = (e) => {
  e.preventDefault();
  const nombreValido = primeraMayuscula({
    target: document.getElementById("nombre"),
  });
  const apellidosValidos = masDeDosPalabras({
    target: document.getElementById("apellidos"),
  });

  if (nombreValido && apellidosValidos) {
    window.location.href = "https://ceu.es";
  }
};

inicio = () => {
  document.getElementById("nombre").addEventListener("blur", primeraMayuscula);
  document
    .getElementById("apellidos")
    .addEventListener("blur", masDeDosPalabras);
  document
    .getElementById("formulario")
    .addEventListener("submit", validacionFinal);
};

window.addEventListener("DOMContentLoaded", inicio);
