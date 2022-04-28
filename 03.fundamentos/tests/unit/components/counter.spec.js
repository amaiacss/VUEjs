// importar el componente que se va a evaluar
import Counter from '@/components/Counter'
// Este componente, para evaluarlo, hay que renderizarlo en un DOM virtual y para eso se importa lo siguiente, para realizar el procedimiento de reenderización y montado
import { shallowMount } from '@vue/test-utils' 

describe('Counter Component', () => {
    // el primer argumento debe ser una descripción de lo que hace esta prueba
    // segundo argumento , es una función que pueder ser o no async, y evalurá el correcto funcionamiento
    test('Debe hacer match con el snapshot', () => {
        
        // Cuando se ejecuta por primera esta prueba (npm run test:unit), se realiza y guarda una instantanea( __snapshots__ ), con la cual si se realiza algún cambio en el componente compará y pasará el test o no. Para actualizar la snapshot del componente se hace ( npm run test:unit -u ), actualizará los cambios 
        const wrapper = shallowMount( Counter )
        // función que  extrae el html que hace un match con el snapshot 
        expect( wrapper.html() ).toMatchSnapshot()
    })
})