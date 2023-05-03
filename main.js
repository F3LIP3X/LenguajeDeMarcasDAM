for (let x = 1; x < 50; x = x + 2) {
    document.write(
        "<tr id='numbers'>",
        "<td id='", x, "'>", x, "</td>",
        "<td id='", x + 1, "'>", x + 1, "</td>",
        "</tr>",
    )
}

function reset(){
    for (let y = 1; y <=50; y++) {
        document.getElementById(String(y)).style.backgroundColor = "rgb(162, 179, 193)"
    }
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



function Primo(){
    reset();
    for (let i = 1; i <= 50; i++) {
        if(esPrimo(i)){
            document.getElementById(String(i)).style.backgroundColor = "purple"

        }
        
    }
}
function Compuesto(){
    reset();
    for (let i = 1; i <= 50; i++) {
        if(esCompuesto(i)){
            document.getElementById(String(i)).style.backgroundColor = "purple"
        }
        
    }
}
function MultiploDe5(){
    reset();
    for (let i = 1; i <= 50; i++) {
        if(esMultiploDe5(i)){
            document.getElementById(String(i)).style.backgroundColor = "purple"
        }
        
    }
}
function Perfecto(){
    reset();
    for (let i = 1; i <= 50; i++) {
        if(esPerfecto(i)){
            document.getElementById(String(i)).style.backgroundColor = "purple"
        }
        
    }
}


