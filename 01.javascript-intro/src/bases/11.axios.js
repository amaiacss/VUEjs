
// AXIOS
    //trabaja como fetch, con la ventaja de que en axios con una llamada se pueden hacer varias peticiones
import axios from 'axios'
// https://api.giphy.com/v1/gifs/random?api_key=CzVq93PVtkqm4zDxZkw5eLBm3n6GT0gW

const apiKey = 'CzVq93PVtkqm4zDxZkw5eLBm3n6GT0gW'
// crear una nueva instancia de axios
const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

// exportamos para el ejercicio 12b
export default giphyApi

// obtener, peticion get
// giphyApi.get('/random')
//     .then( resp => {

//         // dessutructurar lo que viene de resp.data, haremos en dos pasos para facilitar la lectura
//         const { data } = resp.data
//         const { url } = data.images.original
        
//         const img = document.createElement('img')
//         img.src = url

//         document.body.append( img )


//     })








