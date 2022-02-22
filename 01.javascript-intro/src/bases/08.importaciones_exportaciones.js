
// IMPORTACIONES Y EXPORTACIONES
// El primer paso para importar algo, es exportarlo desde el archico origen
// Dentro de las llaves se pone lo que en en archivo heroes se haya exportado 
import { owners } from '../data/heroes'
// Es muy común usar la exporatción por defecto como está en heroes.js
// En una exportacion por defecto puedo nombrarlo como yo quiera y es importante poner la ruta
import superHeroes from '../data/heroes'


console.log(owners)

// Gracias a la importacion puedo hacer una desustructuracion
// como conozco el orden en el que vienen, las guardo en constantes de esta forma
const [dc, marvel]= owners

console.log(dc)
console.log(marvel)

// uso la exportacion por defecto, lo trae todo
console.log(superHeroes)

// 
//const getHeroById = superHeroes.find( ( hero )  =>  hero.id ===)
export const getHeroById = ( id )  => superHeroes.find(heroes => heroes.id === id)

//console.log(getHeroById(3))

export const getHeroesByOwner = ( owner ) => superHeroes.filter(heroes => heroes.owner === owner)

//console.log(getHeroesByOwner('DC'))



// Este ejemplo siguiente se encontraba en otro archivo, en el cual se importaba las funciones de este archivo y se utilizan, se exportan directamente cada una de las funciones y al importar se las llama por su nombre

    // import { getHeroById,getHeroesByOwner } from './bases/08.importaciones_exportaciones'

    // console.log(getHeroById(2))

    // console.log(getHeroesByOwner('DC'))
