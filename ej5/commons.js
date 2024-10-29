/**5. Crear un estilo llamado boton que tenga 
 * una altura y anchura de 50px.
 * El formulario tendrá 10 botones con ese estilo creado 
 * y con values del 0 al 9 respectivamente.
 * Crear para todos ellos un evento tal que al pulsarlo 
 * muestre en una etiqueta div el valor del boton pulsado.
 * 
 * NOTA: Para crear estilos: .boton {…..}
 * 
 * Pista: crear los eventos con un bucle for

 */

numero = (e) => {
  e.preventDefault();
  $num = e.target.value;
  document.getElementById("numero").innerHTML = $num;
};

inicio = () => {
  botones = document.querySelectorAll(".boton");

  botones.forEach((element) => {
    element.addEventListener("click", numero);
  });
};

window.addEventListener("DOMContentLoaded", inicio);
