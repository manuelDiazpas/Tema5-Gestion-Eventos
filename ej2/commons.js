/**2. Crear una página html con dos input de tipo text.
 * Cuando se escriba en ambos, el color del texto debe ser rojo
 * y cuando pierda el foco, el color del texto será negro.
 * Después, añadir un botón ‘Púlsame’ (button), con un evento,
 * tal que al hacer click ponga el color del texto del botón en azul.
 * Añadir otro botón ‘Cambia’, de forma que al pasar por encima
 * ponga el borde del botón de color verde y cuando salga del botón,
 * lo ponga de color naranja.
 */

colorNegro = () => {
  document.getElementById("nombre").style.color = "black";
};
colorNegro2 = () => {
  document.getElementById("nombre2").style.color = "black";
};

colorRojo = () => {
  document.getElementById("nombre").style.color = "red";
};

colorRojo2 = () => {
  document.getElementById("nombre2").style.color = "red";
};

alerta = (e) => {
  e.preventDefault();
  alert(e.type);
  alert(e.target);
  e.target.style.color = "blue";
};

cambiar = (e) => {
  if (e.type == "mouseover") e.target.style.border = "1px solid green";
  else if (e.type == "mouseout") e.target.style.border = "1px solid orange";
};

inicio = () => {
  document.getElementById("nombre").addEventListener("blur", colorNegro);
  document.getElementById("nombre").addEventListener("focus", colorRojo);

  document.getElementById("nombre2").addEventListener("blur", colorNegro2);
  document.getElementById("nombre2").addEventListener("focus", colorRojo2);

  document.getElementById("boton").addEventListener("click", alerta);

  document.getElementById("boton2").addEventListener("mouseover", cambiar);
  document.getElementById("boton2").addEventListener("mouseout", cambiar);
};

window.addEventListener("DOMContentLoaded", inicio);
