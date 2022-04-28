// nombre del componente, dentro de la función es donde se van a ejecutar todas las pruebas que están relacionadas con 'Example Component' (nombre de ejemplo, no existe)

describe( 'Example Component', () => {
  // el primer argumento debe ser una descripción de lo que hace esta prueba
  // segundo argumento , es una función que pueder ser o no async, evaluará si
  test( 'Debe ser mayor a 10', () => {
    
    // Arreglar ( preparación )
    let value = 5;

    //Estimulo
    value = value + 2

    // Aserción ( observar el resultado )
    if( value > 10 ) {
      // TODO: todo bien!

    } else {
      // Esto es loq ue lanza si hay un error
      throw `${ value } no es mayor a 10`
    }
  })

} )
