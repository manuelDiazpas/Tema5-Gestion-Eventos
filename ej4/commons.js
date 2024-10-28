/**4. Crear una página con dos botones: uno ‘Sumar’ y otro ‘Restar’.
 * Debajo hay un div que inicialmente muestra un 5. 
 * Al pulsar el botón Sumar, se sumará uno, 
 * y al pulsar el botón restar, se restará uno. 
 * El div tendrá que actualizarse en cada operación. 
 * Cuando se llegue al valor 3, el div debe mostrar además,
 * un mensaje que indique ‘Alcanzado valor 3’. 
 * Cuando vuelva a ser distinto de 3, el mensaje debe desaparecer.

 */

suma = (e) => {
  e.preventDefault();
  if (document.getElementById("numero").textContent == "Alcanzado valor 3") {
    $num = 3;
    $num++;
    document.getElementById("numero").innerHTML = $num;
  } else if (Number(document.getElementById("numero").innerHTML > 3)) {
    $num = Number(document.getElementById("numero").innerHTML);
    $num++;
    document.getElementById("numero").innerHTML = $num;
  }
};

resta = (e) => {
  e.preventDefault();
  $num = Number(document.getElementById("numero").innerHTML);
  $num--;
  if (Number(document.getElementById("numero").innerHTML) <= 3) {
    document.getElementById("numero").innerHTML = `Alcanzado valor 3`;
  } else if (Number(document.getElementById("numero").innerHTML) > 3) {
    document.getElementById("numero").innerHTML = $num;
  }
};

inicio = () => {
  document.getElementById("suma").addEventListener("click", suma);
  document.getElementById("resta").addEventListener("click", resta);
};

window.addEventListener("DOMContentLoaded", inicio);
