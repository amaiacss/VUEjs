
//  Async -- await Ejemplo EJERCICIO
import giphyApi from './bases/11.axios'

const getImage = async() => {

    try {
        // guardo el resultado de la peticion
        // await espera a que se resuelva la petición para seguir ejecutando
        const { data } = (await giphyApi.get('/random')).data
        const { url } = data.images.original 

        const img = document.createElement('img')
        img.src = url
        document.body.append( img )
        console.log(url)  



    } catch (error) {
        console.log('Error en la peticion', error)
        throw error
    }
}

getImage()

console.log('Inicios')








