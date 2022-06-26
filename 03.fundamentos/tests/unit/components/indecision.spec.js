import { shallowMount } from '@vue/test-utils'

// importar el componente que se va a evaluar
import Indecision from '@/components/Indecision'

describe('Indecision Component', () => {
    let wrapper
// Spy son como espías que están pendientes de cualquier evento que yo indique( métodos, librerias, eventos....)
    let clgSpy 

    // Hay que hacer un mock del fetch API( esto es para test 2.Prueba ), el fetch no existe en el node, por eso da un warning, el fetch se encuentra en el global de node, con la siguiente línea creamos un nuevo jest que soluciona el warning
    // promise.resolve(), crea una promesa y la resuelve de manera instantanea (con esto se resuelve el warning de .then), lo que se encuentra dentro de sus parentesis resuelve el warning del objeto json

    global.fetch = jest.fn( () => Promise.resolve({
        //En este caso el json es un método y retorna una promesa resuelta
        json: () => Promise.resolve({
            // esto es lo que devuelve la API de yesno.wtf
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount( Indecision )
        // console es el objeto y log es el método, esto es lo que quiero 'espiar'
        clgSpy = jest.spyOn( console, 'log' )
        // el mock (simulación) mantiene su estado test tras test, por lo que es conveniencte limpiar/reestablecer su estado inicial
        jest.clearAllMocks()
    })

    test('Debe hacer match con el snapshot', () => {
         // función que  extrae el html que hace un match con el snapshot 
         expect( wrapper.html() ).toMatchSnapshot()
    })

    // 1.Prueba: En el momento de escribir en el input no debe disparar nada
    test('Al escribir en el input no debe disparar nada, excepto el (console.log)', async () => {
        // wrapper en sí es un cojunto de métodos ( un objeto ), pero no es una función por lo que no se puede hacer un mock, por lo que con el '.vm' lo que hace es apuntar a la instancia de vue propiamente
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )
        const input = wrapper.find('input')
        // Establecer un valor en el input, cuando se hace un cambio que afecta al DOM hay que esperar que se vuelva a renderizar por lo que es necesario que sea asíncrono
        await input.setValue('Hola Mundo')
        // esperamos que el console.log haya sido llamado al menos una vez
        expect( clgSpy ).toHaveBeenCalled()
        // esperamos que no haya sido llamado/ejecutado getAnswer()
        expect( getAnswerSpy ).not.toHaveBeenCalled()

    })

    // 2.Prueba: Cuando ponga el signo de interrogación si debe disparar el evento, este test es para asegurarse que se dispara el getAnswer
    test('Al escribir "?" debe dispara el getAnswer', async() => {
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )
        const input = wrapper.find('input')
        await input.setValue('hola?')

        expect( getAnswerSpy ).toHaveBeenCalled()

    })

    // 3.Prueba: evaluar método getAnswer
    test('Pruebas en getAnswer', async() => {
        await wrapper.vm.getAnswer()
        
        const img= wrapper.find('img')

        // espero que la imagen exista
        expect( img.exists() ).toBeTruthy()
        // img sea la url del json
        expect( wrapper.vm.img ).toBe('https://yesno.wtf/assets/yes/2.gif')
        // answer sea...
        expect( wrapper.vm.answer ).toBe('Si!')
    })

    // 4.Prueba: evaluar como responde con un fallo el API
    test('Pruebas en getAnswer - Fallo en la Api', async() => {
        //Simular el fallo, físicamente no estamos accediendo a la API, lo estamos simulando 
        fetch.mockImplementationOnce( () => Promise.reject('API is down'))

        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')
        expect( img.exists() ).toBeFalsy()
        expect( wrapper.vm.answer ).toBe('No se pudo cargar del API')

    })
})