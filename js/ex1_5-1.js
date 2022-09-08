function calcularDistancia()
{
    const gps = 
    {
        disTotal: "1492.56",
        disPercorrido: "1000.0"
    }

    document.getElementById("disTotal").innerHTML = gps.disTotal;
    document.getElementById("disPercorrido").innerHTML = gps.disPercorrido;
    document.getElementById("disRestante").innerHTML = gps.disTotal - gps.disPercorrido;
}