
// DESUSTRUCTURACION DE ARRAYS

// La posicion es importante
// Para desustructurar un array en vez de las llaves, se usa corchetes

const characters = ['Goku','Vegeta','Trunks']

// El orden aqui es importante
const [g, v, t, goten ='No tiene valor'] = characters 


console.log(g, v, t, goten)

//
const returnArray = () => {
    return ['ABC', 123]
}

const [letras, num] = returnArray()

console.log(letras, num)


