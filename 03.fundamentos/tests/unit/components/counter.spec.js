// Este componente, para evaluarlo, hay que renderizarlo en un DOM virtual y para eso se importa lo siguiente, para realizar el procedimiento de reenderización y montado
import { shallowMount } from '@vue/test-utils' 

// importar el componente que se va a evaluar
import Counter from '@/components/Counter'

describe('Counter Component', () => {
    // Para no repetir el shallowMount en cada test podemos hacer los siguientes, por cada test inicializa el shallowMount, de esta forma lo eventos ocurridos en un test no afectan al siguiente test
    let wrapper
    // Counter es el nombre del component
    beforeEach(() => {
        wrapper = shallowMount( Counter)
    })


    // el primer argumento debe ser una descripción de lo que hace esta prueba
    // segundo argumento , es una función que pueder ser o no async, y evalurá el correcto funcionamiento

// PRUEBA 1    
   /* test('Debe hacer match con el snapshot', () => {
        
        // Cuando se ejecuta por primera esta prueba (npm run test:unit), se realiza y guarda una instantanea( __snapshots__ ), con la cual si se realiza algún cambio en el componente compará y pasará el test o no. Para actualizar la snapshot del componente se hace ( npm run test:unit -u ), actualizará los cambios 
        const wrapper = shallowMount( Counter )

        // función que  extrae el html que hace un match con el snapshot 
        expect( wrapper.html() ).toMatchSnapshot()
    })*/

// PRUEBA 2
    test( 'h2 debe tener el valor por defecto "Counter"', () => {

        // primero preguntamos si exsite el elemento, si es true( toBeTruthy() )
        expect( wrapper.find('h2').exists() ).toBeTruthy()

        // El primer h2 que encuentre lo devuelve
        const h2 = wrapper.find('h2')

        //mostrar el texto de esa etiqueta
        //console.log(h2.text())

        //aserción ( preguntar lo que se espera)
        // El texto del h2 debería de ser 'Counter', lo comparará y el test unit dirá si es así o no
        expect( h2.text() ).toBe('Counter')

    })
// PRUEBA 3
    test('el valor por defecto debe ser 100 en el parrafo', () => {        
        // pTags, recupero todos los <p> tags
        //const pTags = wrapper.findAll('p')

        //expect segundo p === 100, evaluo como un array sólo el 2º <p>
        //expect( pTags[1].text() ).toBe('100')

        //OTRA FORMA DE EVALUARLO
        // buscada por el data atributte
        const value = wrapper.find('[data-testid="counter"]').text()
        expect( value ).toBe('100')

    })
// PRUEBA 4
    // Esta prueba debe ser async, al hacer click , vue debe renderizar de nuevo para adoptar el nuevo valor, por lo que esta prueba debe esperar que tome el nuevo valor para poder evaluarlo (await)
    test('Debe incrementar y decrementar el contador', async () => {
        // Tomar la referencia al boton del evento , refactorizacion
        const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button')
        
        // simular el click, trigger es un disparador y en ese caso dispara un click sobre el botón al que hace referencia
        // incrementa 3 veces, decrementa 2 veces
        for(let i= 0; i < 3;i++) await increaseBtn.trigger('click')
        for(let i= 0; i < 2;i++) await decreaseBtn.trigger('click')
        
        const value = wrapper.find('[data-testid="counter"]').text()

        // lo que espero es
        expect( value ).toBe('101')
    })  
    
// PRUEBA 5 ------LEER / EVALUAR PROPS------------
    test('Debe establecer el valor por defecto', () => {
        
        // DOS FORMAS DE ACCEDER AL MISMO PROPS
        const { start } = wrapper.props()
        const valor = wrapper.props('start')
        
        // tipo de dato en ese momento
        console.log(typeof start)

        const value = wrapper.find('[data-testid="counter"]').text()
        
        //text() retorna un valor de tipo string , y start es de tipo number por lo que al hacer el test darña error, solución uno de los dos hay que hacerle un casting
        expect( Number(value) ).toBe(start)
    })
// PRUEBA 6 ----------EVALUAR PROPS
    test('Debe mostrar la prop title', () => {
        const title = 'Hola Mundo'
        //Definir el sujeto de pruebas, se puede mandar opcionalmente un parametro con las props para que el test no falle
        const wrapper = shallowMount( Counter, {
            props: {
                title,
                start: '5'
            }
        })
        console.log( wrapper.html())

        expect( wrapper.find( 'h2' ).text() ).toBe(title)

    })
})
