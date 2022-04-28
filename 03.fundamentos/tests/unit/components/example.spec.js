// nombre del componente, dentro de la función es donde se van a ejecutar todas las pruebas que están relacionadas con 'Example Component' (nombre de ejemplo, no existe)

// Jest viene con susu propios metñdos para realizar pruebas

describe( 'Example Component', () => {
  // el primer argumento debe ser una descripción de lo que hace esta prueba
  // segundo argumento , es una función que pueder ser o no async, evaluará si
  
  test( 'Debe ser mayor a 10', () => {
    
//PRUEBA 1
    // Arreglar ( preparación )
   /* let value = 5;

    //Estimulo
    value = value + 2

    // Aserción ( observar el resultado )
    if( value > 10 ) {
      // TODO: todo bien!

    } else {
      // Esto es loq ue lanza si hay un error
      throw `${ value } no es mayor a 10`
    }*/

 //PRUEBA 2
    // Arreglar
   // let value = 5 //<-- fallará
    let value = 11 // <-- correcto

    // Estímulo
    value = value + 2

    // Observar el resultado
    // metodo que comprueba si value es mayor que 10
    expect( value ).toBeGreaterThan( 10 )
  })

} )
