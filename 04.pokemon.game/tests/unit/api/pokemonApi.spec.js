// importacion de la exportacion por defecto del api pokemonApi.js
import moduleName from '@/api/pokemonApi'
import pokemonApi from '../../../src/api/pokemonApi'

describe('pokemonApi', () => {
    test('Se espera que la configuacion de axios sea la siguiente', () => {

        expect( pokemonApi.defaults.baseURL )
            .toBe('https://pokeapi.co/api/v2/pokemon')
    })
})