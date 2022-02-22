
// PETCION HTTP 
const apiKey = 'CzVq93PVtkqm4zDxZkw5eLBm3n6GT0gW'

// gifs obtenidos de : https://developers.giphy.com/docs/api/endpoint#random

// funcion de js ,permite hacer preticiones de http
fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` )
    // si todo sale bien se ejecuta then
    // en la consola(resp) observar que body: ReadableStream, esto hay que serializar para poder utilizar          
    .then( resp =>  resp.json() )
    // puedo tomar la data usando la desustructuracion de elementos
    .then(({ data }) => {
        console.log( data )
        // en consola se puede ver que dentro de images está url, eso es lo que quiero recuperar
        const { url } = data.images.original
        //console.log(url)
        // crea la etiqueta img
        const img = document.createElement('img')
        // en el atributo src inserta la url random
        img.src = url
        // insertamos la imagen para que se vea en el body
        document.body.append( img )
    })
    
    //.catch(e => console.log(e))
//const peticion

//console.log('Inicio')







