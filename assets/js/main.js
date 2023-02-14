let monto= prompt("ingrese Monto a Pagar")
document.write("El monto que ingreso es: $"+monto+"<br>")


function zonas (lugar){
    switch(lugar){
        case "zona sur":
            return 1.5
        case "zona norte":
            return 1.8
        case "zona oeste":
            return 2.0
        case "caba":
            return 1.2
        default:
            return "ingrese zona correcta"
    }
}

let lugar=prompt("ingrese su zona de la ciudad")
document.write("La zona de su ciudad es: " + lugar+"<br>")

let total=Number(zonas(lugar)) * Number(monto)

document.write("El TOTAL del envio es: $"+Number(total) +"<br>")
