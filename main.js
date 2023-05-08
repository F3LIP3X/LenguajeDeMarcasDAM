/*
@author Felipe Toledano Escudero
*/

function controladorNumerosPares(numero) {
    if (numero % 2 === 0) {
        return numero;
    } else {
        return numero + 1;
    }
}

var numbers = parseInt(prompt("INTRODUCE UNA CIFRA"))
numberCheck = controladorNumerosPares(numbers);

for (let nums = 1; nums < numberCheck; nums = nums + 2) {
    document.write(
        "<tr id='numbers'>",
        "<td id='", nums, "'>", nums, "</td>",
        "<td id='", nums + 1, "'>", nums + 1, "</td>",
        "</tr>",
    )
}

function reset() {
    for (let y = 1; y <= numberCheck; y++) {
        var estilo = document.getElementById(String(y))
        estilo.style.backgroundColor = "rgb(162, 179, 193)"
        estilo.style.color = "black"
        estilo.style.fontWeight = "normal"
        estilo.style.transition = "0"
        estilo.style.transform = "scale(1)";
        estilo.style.boxShadow = "0px 0px 0px ";
        estilo.style.color = "black";
        estilo.style.transition = "0s";
        estilo.style.transform = "rotate(0deg) scale(1)";

    }
    document.getElementById("panel").innerHTML = "<pre class='panel'>Original</pre>";
}
function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function esCompuesto(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return true;
        }
    }
    return false;
}

function esMultiploDe5(numero) {
    if (numero % 5 == 0) {
        return true
    } else {
        return false
    }
}

function esPerfecto(numero) {
    if (numero < 2) {
        return false;
    }

    let sumaDivisores = 1;

    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
            if (i * i !== numero) {
                sumaDivisores += numero / i;
            }
        }
    }

    return sumaDivisores === numero;
}



function Primo() {
    reset();
    for (let i = 1; i <= numberCheck; i++) {
        if (esPrimo(i)) {
            var estilo = document.getElementById(String(i))
            estilo.style.backgroundColor = "rgb(80, 110, 200)"
            estilo.style.color = "White";
            estilo.style.fontWeight = "bold";
            estilo.style.transition = "1s";
            estilo.style.transform = "scale(0.9)";
            estilo.style.boxShadow = "2px 2px 2px black";
        }

    }
    document.getElementById("panel").innerHTML = "<pre class='panel'>Mostrando los números Primos</pre>";
}
function Compuesto() {
    reset();
    for (let i = 1; i <= numberCheck; i++) {
        if (esCompuesto(i)) {
            var estilo = document.getElementById(String(i))
            estilo.style.backgroundColor = "rgb(80, 110, 200)"
            estilo.style.color = "White";
            estilo.style.fontWeight = "bold";
            estilo.style.transition = "1s";
            estilo.style.transform = "scale(0.9)";
            estilo.style.transform = "rotate(360deg) scale(0.9)";
        }

    }
    document.getElementById("panel").innerHTML = "<pre class='panel'>Mostrando los números Compuestos</pre>";
}
function MultiploDe5() {
    reset();
    for (let i = 1; i <= numberCheck; i++) {
        if (esMultiploDe5(i)) {
            var estilo = document.getElementById(String(i))
            estilo.style.backgroundColor = "rgb(186, 247, 72)"
            estilo.style.color = "black";
            estilo.style.fontWeight = "bold";
            estilo.style.animation = "examble"
            estilo.style.transition = "1s";
        }

    }
    document.getElementById("panel").innerHTML = "<pre class='panel'>Mostrando los Multipos de 5</pre>";
}
function Perfecto() {
    reset();
    for (let i = 1; i <= numberCheck; i++) {
        if (esPerfecto(i)) {
            document.getElementById(String(i)).style.backgroundColor = "rgb(247, 118, 247)"
            var estilo = document.getElementById(String(i))
            estilo.style.backgroundColor = "rgb(97, 8, 8)"
            estilo.style.color = "white";
            estilo.style.fontWeight = "bold";
            estilo.style.animation = "examble"
            estilo.style.transition = "2s";
            estilo.style.transform = "rotate(2deg) scale(0.8)";
        }

    }
    document.getElementById("panel").innerHTML = "<pre class='panel'>Mostrando los números Perfectos</pre>";
}


