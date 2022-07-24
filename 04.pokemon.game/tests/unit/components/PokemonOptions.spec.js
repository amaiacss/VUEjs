import { shallowMount } from '@vue/test-utils'
// importamos el sujeto de pruebas
import PokemonOptions from '@/components/PokemonOptions'

//importar el array de un archivo mock 
import { mockPokemons } from '../mocks/pokemons.mock'



describe('PokemonOptions component', () => {
    
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount( PokemonOptions, {
            props: {
                pokemons: mockPokemons // esto es el array para poder reutilizar en cualquier prueba

            }
        }) 
    })

    test('Debe hacer match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
        
    })        
    
    test('Debe mostrar las 4 opciones correctamente', () => {
        // que existan 4 li y cada li debe tener su nombre del pokemon
        const liTags = wrapper.findAll( 'li' )
        // primero preguntamos si exsite el elemento, y si son 4
        expect( liTags.length ).toBe(4)
        // Evaluar cada uno de esos li y ver que tiene su respectivo valor
        expect( liTags[0].text() ).toBe('bulbasaur')
        expect( liTags[1].text() ).toBe('ivysaur')
        expect( liTags[2].text() ).toBe('venusaur')
        expect( liTags[3].text() ).toBe('charmander')           
    })       
    
    test('Debe emitir "selection" con sus respectivos parámetros al hacer click', () => {
        const [ li1, li2, li3, li4  ] = wrapper.findAll('li')
        //hacer click sobre el elemento
        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')
        console.log( wrapper.emitted('selection') )
        // Se espera que por lo menos se tiene que haber emitido una vez
        expect( wrapper.emitted('selection').length ).toBe(4)
        // emitido con el valor esperado
        expect( wrapper.emitted('selection')[0] ).toEqual([1])
        expect( wrapper.emitted('selection')[1] ).toEqual([2])
        expect( wrapper.emitted('selection')[2] ).toEqual([3])
        expect( wrapper.emitted('selection')[3] ).toEqual([4])

           
    })
    
})