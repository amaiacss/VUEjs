import { shallowMount } from '@vue/test-utils'
// importamos el sujeto de pruebas
import PokemonPicture from '@/components/PokemonPicture'


describe('PokemonPicture component', () => {
    test('Debe hacer match con snapshot', () => {
        // Para este test ,es requerido las props propias del componente
        const wrapper = shallowMount( PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        })
        // función que  extrae el html que hace un match con el snapshot 
        expect( wrapper.html() ).toMatchSnapshot()
    })
    
    test('Debe mostrar la imagen oculta y el pokemon 100', () => {
        const wrapper = shallowMount( PokemonPicture, { 
            props: { 
                pokemonId: 100,
                showPokemon: false 
            }
        })
        // Busca todas las imagenes, en este caso sé que existen 2 imagenes por lo que desestructuro
        const [img1, img2] = wrapper.findAll('img')
        expect( img1.exists() ).toBe(true)  
        // se espera que la imagen dos sea undefined cuando showPokemon es false
        expect( img2 ).toBe(undefined)
        // ES IMPORTANTE asegurarse que la img1 tenga la class hidden-pokemon, en esta aplicación esa clase tiene que estar
        expect( img1.classes('hidden-pokemon') ).toBe(true) 

        //debería devolver el src de la img con el id 100
        expect( img1.attributes( 'src' ) ).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg') 


    })

    test('Debe mostrar el pokemon si showPokemon:true', () => {
        const wrapper = shallowMount( PokemonPicture, { 
            props: { 
                pokemonId: 100,
                showPokemon: true 
            }
        })
        // Estando showPokemon en true sólo se renderizará una imagen, por lo que tendremos que buscar una sóla img
        const img = wrapper.find('img')
        expect( img.exists() ).toBe(true)  

        // ES IMPORTANTE asegurarse que la img NO tenga la class hidden-pokemon
        expect( img.classes('hidden-pokemon') ).toBe(false) 
        // Debería tener la class fade-in
        expect( img.classes('fade-in') ).toBe(true) 
    })
})