
// DESUSTRUCTURACION DE OBJETOS

const person = {
    name: 'Tony',
    age: 45,
    codName: 'Ironman'
}

// vamos a crear varias constantes que van a estar definidas entre los corchetes y esas constantes van a ser extraidas del objeto(person)
// Las constantes pueden tener el mismo nombre que el objeto, pero se pueden cambiar
// el orden de las constantes no importan
// A esto se le llama desestructuracion
// Se puede asigar un valor por defecto a una de las propiedades
const {  age,name, codName, power='No tiene poder' } = person

// y ahora para acceder a los valores no es necesario person.name, solo se pone
console.log(name)
console.log(age)
console.log(codName)
console.log(power)

//Desustructuracion en los argumentos de una funcion
const createHero = ( person ) => {
    // Desustructurar a partir del objeto person para no tener que poner person.loquesea
    const { name, age, codName, power = 'Dinero' } = person

    return {
        id: 12315484, 
        name: name, // person.name
        age: age,  // person.age
        codName: codName,  // person.codName
        power: power, // person.power
    }
}

console.log( createHero( person ) )

// Evolucion de la anterior función:
// En la desustructuracion de un objeto en vez de poner el objeto como parametro y sacar sus propiedades, se pueden poner sus propiedades directamenente como parametros
// Al tener un solo return se puede simplificar y envolver los datos con ()
const createHero2 = ({ name, age, codName, power = 'Dinero' }) => ({
// Cuando el nombre de la propiedad tiene el mismo nombre que una constante o variable no es necesario poner name: name    
        id: 123, 
        name, 
        age,  
        codName,  
        power, 
    
})

console.log( createHero2( person ) )


