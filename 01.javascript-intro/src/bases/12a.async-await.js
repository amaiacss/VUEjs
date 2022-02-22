
//  Async -- await
    // Una funcion asincrona retorna una promesa por defecto y el await solo puede ser utilizado dentro de una función asíncrona

    // El await me permite poder obtener el valor correcto de la promesa, la resolución, y trabajarlo como si fuera una función síncrona

const miPromesa = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            //resolve('Tenemos un valor en la promesa')
            reject('REJECT en miPromesa') // --> al ser un error lo gestiona catch
        }, 5000);
    })
}
// llamada de la funcion
//miPromesa().then( console.log )


// FUNCION ASÍNCRONA, escribir async(), es lo mismo que si hubiera puesto toda la promesa anterior( return new Promise.... )
const medirTiempoAsync = async() => {
    // La intencion de poner este Try Catch es que si el await tiene error, este error lo atrapa este mismo catch, y el return que devuelve este catch, es tomado como respuesta esperada y lo gestiona el .then y no el.catch
    // return es respuesta esperado, throw es error

    try{
        console.log('Inicio')

        // Await: Se puede usar con otras funciones asíncronas o con una función que retorne una promesa
            // Lo que sea que resuelva exitosamente esta promesa se almacenrá en respuesta
            // Básicamente lo que hace el await es esperar a que se resuelva la instruccion y despues continua
        const respuesta = await miPromesa()
        console.log(respuesta)

        console.log('Fin')
        // throw gestiona el error que se haya podido producir, y es el .catch el que los lanza, gestiona, ejecuta
        throw 'Error en medirTiempoAsync'
        // return devuelve la respuesta esperada y es el .then el que lo ejecuta
        return 'fin de medir tiempo async'
    } catch (error) {

        return 'catch en medirTiempoAsync'
        //throw 'Error en medirTiempoAsync'
    }
}


medirTiempoAsync()
    .then( valor => console.log( 'THEN exitoso: ', valor ) )
    .catch( err => console.log('Error: ', err) )

console.log('Inicios')

console.log('Fines')







