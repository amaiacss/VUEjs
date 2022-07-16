import pokemonApi from "../api/pokemonApi"

//LÓGICA PARA EL EJERCICIO
export const getPokemons = () => {
    // Crear un array con 650 posiciones vacías, que tendrá los nombres
    const pokemonsArr = Array.from( Array(650) )
    // map modifica el array, en este caso la primera posicion no interesa, por eso se pone esto(_), y el segundo es el index, que lo retornará con + 1
    return pokemonsArr.map( ( _ , index ) => index + 1 )
}

// Esta es la funcion que se va a exportar
const getPokemonOptions = async() => {
    // hacerle un mix, coger el array y mezclarlo de forma aleatoria usando sort() y Math
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )

    // se modifica el array, manteniendo las posiciones 0 a 4 , el resto se eliminan
    // la funcion getPokemonNames al ser async, hay que esperar que realice la peticón para resolverla por lo que hay que poner el await y a su vez la función 'padre' entonces también debe ser async
    const pokemons = await getPokemonNames( mixedPokemons.splice(0, 4) )

    console.table(pokemons)

    return pokemons
}

// recibir un array de 4 posiciones con la finalidad de tener los nombres
export const getPokemonNames = async ( [a,b,c,d] = []) => {
    // Definición del array que se mandará a la promise, definición de peticiones
    const promiseArr = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`)
    ]

    // Dispira varias promesas de manera simultanéa, el dato que se recibe es un array, por lo que se puede desestructurar
    const [p1, p2, p3, p4] = await Promise.all( promiseArr )

    // Devuelvo el mismo array pero con los nombres de los pokemons
    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id}
    ]
}

// exportación por defecto, las otras funciones tienen la directiva export, en este caso paro poder hacer las pruebas unitarias
export default getPokemonOptions