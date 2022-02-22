
// PROMESAS, es una tarea asíncrono, nos permite ejecutar un código es diferentes momentos del tiempo

// Definir una nueva promesa, dentro se va a ejecutar una función que será el cuerpo de la promesa
    // resolve , sirve para cuando se recibe una respuesta satisfactoria de la ejecución
    // reject, sirve para cuando no se resuelve la función, no hay respuesta, no se ejecuta...para gestionar el error
console.log('Inicio')

new Promise( (resolve, reject) => {
    console.log('Cuerpo de la promesa')
    // llamar el resolve, se puede regresar lo que quiera, un objeto, un booleano, etc.... y puede devolver mas de un argumento, se ejecuta cuando es correcto
    resolve('Promesa resuelta')
    // se ejecuta cuando es incorrecto
    reject('Promesa resuelta con error')      
})
//Cuando se resuelve correctamente la promesa se ejecuta 'then'
//Como solo hay un argumento la siguiente linea se puede resumir asi, se toma como implicito el argumento que recibe(msg):
// .then( console.log )
.then( msg => console.log( msg ) )

// Cuanso regresa con algun error ejecuta catch
.catch( err => console.log( err ) )

console.log('Fin')


// PROMESA EJEMPLO 2
import { getHeroById } from './bases/08.importaciones_exportaciones'

const getHeroByIdAsync = ( id ) => {

   return new Promise( ( resolve, reject ) => {
       // Retrasa la ejecucion en milisegundos
       setTimeout( () => {
           // esta funcion es importada de otro archivo
           const hero = getHeroById( id )
           if( hero ) {
                resolve( hero )
           } else {
               reject('Heroe no existe')
           }    
       }, 1000);       
   });
}

// llamda de la funcion
getHeroByIdAsync( 2 )
    // lo que se ejecuta si devuelve algo
    .then( h => {
        console.log( `El heroe es : ${ h.name }` )
    })
    // lo que se ejecuta si no devuelve nada 
    .catch( console.log )





