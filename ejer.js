class numero {
    constructor(valor) {
        this.valor = valor;
    }
    esPrimo() {
        if (this.valor <= 1) {
            return false;
        }
        for (i = 2; i < this.valor; i++) {
            if (this.valor % i == 0) return false;
        }
    }

    esNumeroPerfecto() {
        for (i = 1; i < this.valor; i++) {
            if (this.valor % i == 0) {
                suma = suma + i;   // si es divisor se suma
            }
        }
        if (suma == this.valor) return true;
        else return false;
    }
    
    esDivisiblex5() {
        if ((this.valor % 5) == 0) return true;
        else return false;
    }
    
    esNumeroCompuesto() {
        if (!esPrimo() && this.valor != 1) return true;
        else return false;
    }
}

let tablaNumeros = [];
for (i = 1; i <= 50; i = i + 2) {
    tablaNumeros[i] = new numero(i)
    document.write(
        "<tr id='numbers'>",
        "<td id='", i, "'>", i, "</td>",
        "<td id='", i + 1, "'>", i + 1, "</td>",
        "</tr>",
    )
}


function Primo() {
    for (let i = 1; i <= 50; i++) {
        if (tablaNumeros[i].esPrimo()) {
            document.getElementById(String(i)).style.backgroundColor = "red"
        }
    }
}

function Primo() {
    for (let i = 1; i <= 50; i++) {
        if (tablaNumeros[i].esPrimo()) {
            document.getElementById(String(i)).style.backgroundColor = "red"
        }
    }
}

function Primo() {
    for (let i = 1; i <= 50; i++) {
        if (tablaNumeros[i].esPrimo()) {
            document.getElementById(String(i)).style.backgroundColor = "red"
        }
    }
}

function Primo() {
    for (let i = 1; i <= 50; i++) {
        if (tablaNumeros[i].esPrimo()) {
            document.getElementById(String(i)).style.backgroundColor = "red"
        }
    }
}

function Primo() {
    for (let i = 1; i <= 50; i++) {
        if (tablaNumeros[i].esPrimo()) {
            document.getElementById(String(i)).style.backgroundColor = "red"
        }
    }
}

