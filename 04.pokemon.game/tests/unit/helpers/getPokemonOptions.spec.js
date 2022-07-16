// fuera de las llaves van las importaciones por defecto y dentro de las llaves van las importaciones no default
import getPokemonOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions'

describe('getPokemonOptions helpers', () => {
    test('debe regresar un array de 650 ', () => { 
        const pokemons = getPokemons()
        expect( pokemons.length ).toBe(650)
        expect( pokemons[0] ).toBe(1)
        expect( pokemons[500] ).toBe(501)
        expect( pokemons[649] ).toBe(650)
    })

    test('Debe retornar un arreglo de 4 elementos con nombres de pokemons', async () => {
        // Si solicitamos la informacion de estos 4 pokemons el resultado es el del expect
        const pokemons = await getPokemonNames([1,2,3,4])        
        console.log( pokemons)
        expect( pokemons ).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ])
    })

    test('getPokemonOptions Debe retornar un arreglo mezclado', async () => {
        const pokemons = await getPokemonOptions()
        console.log(pokemons);
        expect( pokemons.length ).toBe(4) 
        expect( pokemons ).toEqual([
            { 
                name: expect.any(String), // se espera un valor string
                id: expect.any(Number)// se espera un valor Number
            },
            { 
                name: expect.any(String),
                id: expect.any(Number)
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number)
            },
            { 
                name: expect.any(String),
                id: expect.any(Number)
            }
        ])
    })
})