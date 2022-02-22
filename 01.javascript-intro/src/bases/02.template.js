





console.log('Hola Mundo!!')

const nombre = 'Amaia'
const apellido = 'Casas'

// las comillas `` se llaman back tick, permite visualizar el formato de como lo escribo, en este cado respetando el espacio
const nombreCompleto = `${ nombre } ${ apellido }`

console.log(nombreCompleto)

// Realizar calculos
console.log(`Resultado: ${ 1+1 }`)

function getSaludo( nombre ) {
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`)


