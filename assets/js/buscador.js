const buscador = {
    tipo: '',
    color: '',
    cuerpo: '',
    precio: '',
}


function mostrarMuebles(muebles){

    muebles.forEach(mueble => {
        console.log(mueble.tipo + " " + mueble.color + " " + mueble.cuerpo + " " + mueble.precio)
        document.write("<p>" + mueble.tipo + " de color  " + mueble.color + " tiene " + mueble.cuerpo + " y el precio es: $ " + mueble.precio + "</p>")
    }
    )
}

function noRusultados(){
    console.log("No hay Resultados")
    document.write("<p style='color:red'>No hay Resultados</p>")
}



function tipoMuebles(mueble){
    if(buscador.tipo){
        return mueble.tipo === buscador.tipo;
    }
    return mueble;
}

function colorMuebles(mueble){
    if(buscador.color){
        return mueble.color === buscador.color;
    }
    return mueble;
}

function cuerpoMuebles(mueble){
    if(buscador.cuerpo){
        return mueble.cuerpo == buscador.cuerpo;
    }
    return mueble;
}

function precioMuebles(mueble){
    if(buscador.precio){
        return mueble.precio === buscador.precio;
    }
    return mueble;
}



function filtrarMuebles(){
    let resultado = muebles.filter(tipoMuebles).filter(colorMuebles).filter(cuerpoMuebles).filter(precioMuebles);

    if(resultado.length){
        mostrarMuebles(resultado)
    }else {
        noRusultados()
    }
}

filtrarMuebles();

