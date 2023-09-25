function realizarOperaciones() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    var resultado = "";

    for (var i = 1; i <= 5; i++) {
        switch (i) {
            case 1:
                resultado +=  "Suma = " + (numero1 + numero2) + "<br><br>";
                break;
            case 2:
                resultado += "Resta = " + (numero1 - numero2) + "<br><br>";
                break;
            case 3:
                resultado += "Multiplicación = " + (numero1 * numero2) + "<br><br>";
                break;
            case 4:
                resultado += "División = " + (numero1 / numero2) + "<br><br>";
                break;
            case 5:
                resultado += "Módulo = " + (numero1 % numero2) + "<br><br>";
                break;
        }
    }

    document.getElementById("resultado").innerHTML = resultado;
}