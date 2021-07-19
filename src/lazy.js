
let  cargadas= 0 ;
let cuenta= 0;
let eliminadas = 0;
const container = document.querySelector('#images'); 


const load = (entry)=> { 
    const container1 = entry.target;
    const imagen = container1.firstChild;   
    const url = imagen.dataset.src 
    imagen.onload = ()=> {
        cargadas += 1;
        show()
    }
    imagen.src = url;
    observer.unobserve(container1)
}
 
const isIntersecting = (entry)=> {
    return entry.isIntersecting

}

const observer = new IntersectionObserver((entries)=> {
    entries
    .filter(isIntersecting)
    .forEach(load)

});


const registerImage = (imagen)=> {
    observer.observe(imagen)
    cuenta += 1;
    show()

}

const show = ()=> {
    console.log(`Imágenes creadas: ${cuenta}`)
}
const borremos = ()=> {
    if(container.childNodes.length > 1){
        container.lastElementChild.remove()
    eliminadas = eliminadas + 1;
    show()
    }else{
        console.log("No hay elementos para borrar")
    }
    
}
export {
    registerImage,
    borremos
 
}