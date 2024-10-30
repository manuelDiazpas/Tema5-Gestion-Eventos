/**8. Validar el formulario antes de enviarlo. Para ello
 * se debe comprobar que el nombre, apellidos y edad tienen
 * valor (no se dejan en blanco). La edad además debe ser
 * un número y sus valores deben estar comprendidos entre 0 y 105.
 * También se debe validar que se ha seleccionado alguna provincia.
 * Si se cumplen todas las validaciones, debe preguntarse
 * al usuario con un mensaje si deseas enviar el formulario.
 *
 * En caso afirmativo, se enviará. En caso negativo no hará nada.
 * No se mostraran todos los errores.
 * Sólo el primero que no cumpla la validación.
 *
 * Cuando no se cumpla alguna validación debe aparecer el mensaje
 * correspondiente en la etiqueta div (id=”resultado”)
 * del final en color rojo.
 */

rellenoNombre = () => {
  $element = document.getElementById("nombre").value;
  document.getElementById("resultado").innerHTML = "";
  if ($element.trim() == "") {
    document.getElementById("resultado").innerHTML =
      "Todos los campos deben de estar rellenos campo";
    return false;
  } else if ($element.trim() != "") {
    document.getElementById("resultado").innerHTML = "";
    return true;
  }
};

rellenoApellido = () => {
  $element = document.getElementById("nombre").value;
  document.getElementById("resultado").innerHTML = "";
  if ($element.trim() == "") {
    document.getElementById("resultado").innerHTML =
      "Todos los campos deben de estar rellenos campo";
    return false;
  } else if ($element.trim() != "") {
    document.getElementById("resultado").innerHTML = "";
    return true;
  }
};

comprobacionEdad = () => {
  $edad = document.getElementById("edad").value;
  document.getElementById("resultado").innerHTML = "";
  if ($edad.trim() == "") {
    document.getElementById("resultado").innerHTML =
      "El campo edad de estar relleno";
    return false;
  } else if ($edad.trim() != "") {
    if (isNaN(Number($edad))) {
      document.getElementById("resultado").innerHTML =
        "Edad debe de ser un número";
      return false;
    } else if (!isNaN(Number($edad))) {
      if (Number($edad) < 0 || Number($edad) > 105) {
        document.getElementById("resultado").innerHTML =
          "Edad debe de ser un número entre 0 y 105";
        return false;
      } else {
        document.getElementById("resultado").innerHTML = "";
        return true;
      }
    }
  }
};

comprobacionProvincia = () => {
  $provincia = document.getElementById("provincia").value;
  document.getElementById("resultado").innerHTML = "";
  if ($provincia == "0") {
    document.getElementById("resultado").innerHTML =
      "Debe de haber una provincia seleccionada";
    return false;
  } else {
    document.getElementById("resultado").innerHTML = "";
    return true;
  }
};

validacionFinal = (e) => {
  if (
    rellenoNombre() &&
    rellenoApellido() &&
    comprobacionEdad() &&
    comprobacionProvincia()
  ) {
    if (confirm("¿Quiere enviar el formulario?")) {
      document.getElementById("resultado").style.color = "green";
      document.getElementById("resultado").innerHTML = "Enviado";
    }
  } else {
    e.preventDefault();
    alert("Todos los campos deben de estar correctos");
  }
};

inicio = () => {
  document.getElementById("resultado").style.color = "red";
  document.getElementById("nombre").addEventListener("blur", rellenoNombre);
  document
    .getElementById("apellidos")
    .addEventListener("blur", rellenoApellido);
  document.getElementById("edad").addEventListener("blur", comprobacionEdad);
  document.getElementById("enviar").addEventListener("click", validacionFinal);
};

window.addEventListener("DOMContentLoaded", inicio);
