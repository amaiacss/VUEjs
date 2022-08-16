import { shallowMount, mount} from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
// importar array para la prueba 3
import { mockPokemons } from '../mocks/pokemons.mock'

describe('Pokemon Page Component', () => {

    let wrapper
    beforeEach(() => {
        wrapper = shallowMount( PokemonPage )
    })

    test('Debe hacer math con el snapshot', () => {
        expect( wrapper.html()).toMatchSnapshot() 
    })

    // Evaluamos que cuando el componente se monta llamada a el método
    test('Debe llamar mixPokemonArray al montar', async () => {
        // espiamos los métodos del PokemonPage, el segundo argumento es el método que quiero que espie
        const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        // volvemos a montar el componente, porque en el before lo monta, y para cuando quiere construir el spy en este test, el mount ya se ha disparado y no lo llega a espiar, por lo que lo volvemos a montar el componente y así lo espía y lo puede testear
        shallowMount( PokemonPage )
        expect( mixPokemonArraySpy ).toHaveBeenCalled()
    })
    test('Debe hacer match con el snapshot cuando cargan los pokemons', () => {
        //montar el componente y mandarle la data con los datos como quiero hacer la prueba
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons ,
                    pokemon:mockPokemons[0],
                    showPokemon:false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect( wrapper.html() ).toMatchSnapshot()

    })

    test('Debe mostrar los componentes de PokemonPicture y PokemonOptions', () => {
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons ,
                    pokemon:mockPokemons[0],
                    showPokemon:false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect( wrapper.find('pokemon-picture-stub').exists() ).toBeTruthy()
        expect( wrapper.find('pokemon-options-stub').exists() ).toBeTruthy()

        expect( wrapper.find('pokemon-picture-stub').attributes('pokemonid') ).toBe('1')
        expect( wrapper.find('pokemon-options-stub').attributes('pokemons') ).toBeTruthy()
    })
})