function boton1() {
    alert("Hola profe");
}

function boton2() {
    alert("Hola Mundo Mundistico");
}

function boton3() {
    alert("Hola a quien sea");
}

function boton4() {
    alert("Hola compañero de aula");
}

function boton5() {
    alert("Hola Universidad de Holguin");
}


    document.getElementById("miBoton").addEventListener("click", function() {
      document.getElementById("miTexto").style.display = "block";
    });
