
// funciones de flecha
const saludar = ( nombre ) => {
    return `Hola ${ nombre }`
}
const nombre = 'Tony' 
console.log(saludar(nombre))

// si tiene un único return puedo hacerlo de esta manera
const saludar2 = ( nombre ) => `Hola ${ nombre }`
console.log(saludar2(nombre))

// establecer un valor por defecto para el argumento en el caso de que no reciba nada
const saludar3 = ( nombres = 'Amaia' ) => `Hola ${ nombres }`
console.log(saludar3())

// 
const getUser = (  ) => {
    // Retorna un objeto
    return {
        uid: 'ABC123',
        username: 'Tony001'
    }
}
console.log(getUser())

// La nterior funcion tb se puede hacer de la siguiente forma
// como realmente solo retorna un objeto, el return se encuentra implicito, y puedo hacerlo en una sola línea, pero tiene que ponerse entre parentesis para que no haya error

const getUser2 =() => ({uid: 'ABS1234', username: 'Amaia'})
console.log(getUser2())

// Crear un array de objetos [] -> array, {} -> objeto
const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}]

// buscar si existe un heroe con el codigo 1 en heroes
//some retorna un valor boolean, si se cumple es true
const existe = heroes.some( ( hero ) => hero.id === 1 )

console.log(existe)

// La funcion 'find' busca en el array, si lo encuntra devuelve el dato , si no lo encuentra devuelve 'undefined'
const search = heroes.find( ( hero ) => hero.id === 1 )

console.log(search)






