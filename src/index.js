import {borremos,  registerImage} from "./lazy"
const urlBase = 'https://randomfox.ca/floof/';
const container = document.querySelector('#images'); 
const crear = document.querySelector('#crear');
const borrar = document.querySelector('#borrar');


const fetchUrl = async ()=> {
    try{
        
        //Hacemos fetch de la api
        const data = await fetch(urlBase);
        //Convertimos en Json la dara
        const dataJson = await data.json();
        //Creamos un div que nos sirve de container y le añadimos una clase
        const containerImage = document.createElement('div');
        containerImage.className = 'p-4 containerImage'
        //creamos una img para nuestras imágenes- le asignamos el atributo src, width y clase
        const image = document.createElement('img');
        image.dataset.src = dataJson.image
        image.className ='mx-auto';
        image.width = '200';
    

        
        //le agregamos el container de la imágen al container principal que está en el html y previamente habíamos seleccioando con un query selector
        container.append(containerImage)
 
        //agregamos la imágen al container
        containerImage.append(image)
           
        //Instanciamos la api de intersection oberver

        setTimeout(function(){registerImage(containerImage)}, 500)
   
    }
    catch{
    
    };
    
};
crear.addEventListener('click', fetchUrl)
borrar.addEventListener('click', borremos)
