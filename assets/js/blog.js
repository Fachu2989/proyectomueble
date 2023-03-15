
const formulario= document.getElementById("formulario")
//  console.log(formulario)
const mensaje= document.getElementById("mensaje")
// console.dir(mensaje)
const fecha= document.getElementById("fecha")
// console.dir(fecha)
const blog=document.getElementById("blog")
// console.dir(blog)

// blog.innerHTML="<articles><h2>"+texto+"</h2><div class='entrada-meta'><p>"+fecha.value+"</p><p>"+creador.value+"</p></div><div class='entrada-blog'><p>"+texto+"</p></div></articles>"






let mensajes= [];

document.addEventListener('DOMContentLoaded', ()=>{
    if(JSON.parse(localStorage.getItem('mensajes')) !=null){
    mensajes = JSON.parse(localStorage.getItem('mensajes'))
    }
    lectura()
})

const limpieza = () => {
    while(blog.firstChild){
            blog.removeChild(blog.firstChild)
    }
}

const sincronizarStorage = ()=>{
    localStorage.setItem('mensajes', JSON.stringify(mensajes))
}

const lectura= ()=>{
    limpieza()
    if(mensajes.length > 0){
        mensajes.forEach( mensaje=> {
           const btnBorrar = document.createElement('a')
           btnBorrar.classList = 'btn max-widht-30'
           btnBorrar.textContent = " Borrar "
           
           blog.innerHTML="<articles><h2>"+nombre.value+"</h2><div class='entrada-meta'><p><span>"+fecha.value+"</span></p><p><span>"+creador.value+"</span></p></div><div class='entrada-blog'><p>"+mensaje.texto+"</p></div><p class='btn max-widht-30' >"+btnBorrar.textContent;"borrar</p></articles>"

        //    const p = document.createElement('p');
        //    p.textContent = "El nombre de este articulo es:  "+nombre.value +" "+"con fecha de creacion" + fecha.value +" "+ mensaje.texto;
        //    p.id = document.getElementById("nombre").value,
        //    p.className = "  blog"
        //    p.appendChild(btnBorrar)
        //    blog.appendChild(p)
        });
    }
    sincronizarStorage()
}

const agregarMensaje = (evt) =>{
    evt.preventDefault()
    const mensaje = document.querySelector('#mensaje').value;
    const mensajeObj = {
        id: document.getElementById("nombre").value,
        fecha:document.getElementById("fecha").value,
        creador:document.getElementById("creador").value,
        texto: mensaje
    }
    // console.log(mensajeObj)
    mensajes.push(mensajeObj)
    // console.log(mensajes)
    lectura();
    formulario.reset()
}

const borrar= (evt)=>{
    console.log(evt)
    let id = evt.target.parentElement.blog
    mensajes = mensajes.filter( mensaje => mensaje.id != id)
    lectura();
}

formulario.addEventListener('submit', agregarMensaje);
blog.addEventListener('click', borrar);