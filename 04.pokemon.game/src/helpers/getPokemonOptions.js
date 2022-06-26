//LÓGICA PARA EL EJERCICIO
const getPokemons = () => {
    // Crear un array con 650 posiciones vacías, que tendrá los nombres
    const pokemonsArr = Array.from( Array(650) )
    // map modifica el array, en este caso la primera posicion no interesa, por eso se pone esto(_), y el segundo es el index, que lo retornará con + 1
    return pokemonsArr.map( ( _ , index ) => index + 1 )
}

// Esta es la funcion que se va a exportar
const getPokemonOptions = () => {
    // hacerle un mix, coger el array y mezclarlo de forma aleatoria usando sort() y Math
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )

    // se modifica el array, manteniendo las posiciones 0 a 4 , el resto se eliminan
    getPokemonNames( mixedPokemons.splice(0, 4) )
}
// recibir un array de 4 posiciones con la finalidad de tener los nombres
const getPokemonNames = ( [a,b,c,d] = []) => {

    console.log(a,b,c,d);
}


export default getPokemonOptions