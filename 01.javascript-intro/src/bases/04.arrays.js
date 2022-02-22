
// crear un array de 50 posiciones es menos comun crearlo así
const arregloMenosComun = new Array(50)

console.log(arregloMenosComun)

// crear un array
const arreglo = [1,2,3,4]
console.log(arreglo)

// insertar un nuevo valor al final del array
arreglo.push( 5 )
console.log(arreglo)

// Los arrays , como los objetos, son pasados por referencia
// Construyo un array a partir del primero, tendrá los mismos valores
const arreglo2 = arreglo
console.log(arreglo2)

// si en el segundo arreglo añado un nuevo valor al final del array, este valor tambien se verá reflejado en  'arreglo'
arreglo2.push( 6 )
console.log(arreglo2)
console.log(arreglo)

// Para romper la referencia en la creacion de un nuevo array
// utilizamos el operador spread, se crea una nueva relacion en un nuevo espacio de memoria
const arreglo3 = [...arreglo]
arreglo3.push( 7 )
console.log(arreglo3)


// En vez de utilizar el operador spread , hay funciones que crean un nuevo array
// multiplicarlos x2
// el map es metodo que recibe un callback(una funcion) 
const arreglo4 = arreglo3.map( function ( n ){
    // lo que sea que yo ponga aqui es lo que contendrá este nuevo array con el numero de posiciones de arreglo3
    // n es el valor de cada una de las posiciones
    return n * 2
})
console.log(arreglo4)

arreglo4.push( 18 )
console.log(arreglo4)







