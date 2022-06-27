//importaciones por defecto
import axios from 'axios'

// configuracion de axios 
const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'

}) 

export default pokemonApi   
