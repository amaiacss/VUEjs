<template>
    <h1 v-if="!pokemon" >Espere por favor.....</h1>
    <div v-else>
        <h1>¿Quién es este pokémon</h1>
        <PokemonPicture 
            :pokemonId="pokemon.id" 
            :showPokemon="showPokemon"
        />
        <PokemonOptions 
                :pokemons="pokemonArr"
                @selection="checkAnswer($event)" 
        /> <!--Estar escuchando el evento click de PokemonOptions llamado selection, el event es el valor que está emitiendo el selection desde PokemonOptions. Si como es en este caso, sólo se recibe un argumento/parámetro, no es necesario escribirlo, estaría implícito, automaticamente la funcion lo recibe-->    
        <template v-if="showAnswer" >
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">Nuevo Juego</button>   
        </template>
    </div>
    
</template>

<script>
    import PokemonPicture from '../components/PokemonPicture.vue'
    import PokemonOptions from '@/components/PokemonOptions.vue'

    import getPokemonOptions from '@/helpers/getPokemonOptions'

    console.log( getPokemonOptions() )

    export default {
        components: { PokemonPicture, PokemonOptions },
        data() {
            return {
               pokemonArr: [],
               pokemon: null,
               showPokemon: false,
               showAnswer: false,
               message: '',
            }
        },
        methods: {
            async mixPokemonArray() {
                this.pokemonArr = await getPokemonOptions() // Esta funcion es una promesa hay que esperar que se resuelva
                // Generar un numero del 0 al 3 al azar, que son las posiciones del array de Pokemons
                const rndInt = Math.floor( Math.random() * 4 )
                this.pokemon = this.pokemonArr[ rndInt ]
            },
            checkAnswer( selectedId ) {
                this.showPokemon = true
                this.showAnswer = true
                if( selectedId === this.pokemon.id ) {
                    this.message = `Correcto, ${ this.pokemon.name }`
                } else {
                    this.message = `Ooops, era ${ this.pokemon.name }`
                }
            },
            newGame() {
                // reinicializar
                this.showPokemon = false
                this.showAnswer =false
                this.pokemonArr = []
                this.pokemon = null
                this.mixPokemonArray()
            }
        },
    // LIFECYCLE HOOKS, ciclo de vida del componente, con mount cuando el componente esté montado , ejecuta lo que está dentro de este
        mounted() {
            this.mixPokemonArray() // llamada al método, lo que se recibe aquí es realmente un objeto, una referencia reactiva del array, en este caso. Tiene los getters y setters......
        }
    }
</script>

