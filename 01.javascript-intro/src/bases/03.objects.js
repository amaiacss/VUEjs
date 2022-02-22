


// los objetos son pasados por referencia y no por valor

// objeto literal porque está entre llaves
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 523123,
        lat: 14.3232,
        lng: 34.456842
    }
}

// persona2 no es una copia, hace referencia a persona, cualquier modificacion en persona2 afecta a persona
const persona2 = persona

// Cambiar nombre del objeto persona2
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)

// si yo quiero que rompa esa referencia, es decir que se crean dos objetos independientes
// los tres puntos se conococe como operador spread, y éste esparce cada una de las propiedades que tiene persona, y esto rompe la referencia y crea un objeto nuevo e independiente
const persona3 = {...persona}
persona3.edad = 50

console.log(persona3)





