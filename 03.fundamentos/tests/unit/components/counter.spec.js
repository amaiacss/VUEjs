// Este componente, para evaluarlo, hay que renderizarlo en un DOM virtual y para eso se importa lo siguiente, para realizar el procedimiento de reenderización y montado
import { shallowMount } from '@vue/test-utils' 

// importar el componente que se va a evaluar
import Counter from '@/components/Counter'

describe('Counter Component', () => {
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
    test( 'h2 debe tener el valor por defecto', () => {

        //sujeto de pruebas, se crea una instancia de ese componente montado
        const wrapper = shallowMount( Counter )

        // El primer h2 que encuentre lo devuelve
        const h2 = wrapper.find('h2')

        console.log(h2.text())

        //aserción
        // El texto del h2 debería de ser 'Counter', lo comparará y el test unit dirá si es así o no
        expect( h2.text() ).toBe('Counter')

    })
})