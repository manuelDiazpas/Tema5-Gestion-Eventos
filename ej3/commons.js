/**3. Crear un formulario con 6 checkbox y un botón ‘validar’.
 * Cuando pulsemos el botón, validará que hay 3 o más checkbox marcados.
 * Mostrar por alert un mensaje que indique
 * si hay o no 3 o más de 3 checkbox marcados.
 */

contarMarcados = (e) => {
  e.preventDefault();
  const checkboxs = document.querySelectorAll(
    'input[name="alergenos[]"]:checked'
  ); //querySelectorAll -> Devuelve todo lo que sea exactamente igual a lo escrito

  if (checkboxs.length >= 3) {
    alert("Hay 3 checkboxs marcados");
  } else if (checkboxs.length < 3) {
    alert("No hay 3 checkboxs marcados");
  }
};

inicio = () => {
  document.getElementById("validar").addEventListener("click", contarMarcados);
};

window.addEventListener("DOMContentLoaded", inicio);
