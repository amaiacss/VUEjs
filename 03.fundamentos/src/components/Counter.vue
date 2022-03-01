<!--ESTO ES LA DEFINICIÓN DE UN COMPONENTE QUE SE IMPORTARÁ DESDE App.vue -->
<template>
<!-- Si title es undefined se muestra la opción -->
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup>= {{ counter * counter }}</p>
  
  <!-- Estos párrafos se han usando para conocer el comportamiento de computed 
  <p>{{ counter }} <sup>2</sup>= {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup>= {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup>= {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup>= {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup>= {{ squareCounter }}</p> -->

  <div>
    <button @click="increase">+1</button>
    <button @click="decrease" >-1</button>
  </div>

</template>

<script>
export default {
// Estas son las propiedades de entrada de este componente. Hay 3 formas comunes de definir una property( atributo ):
// 1. Definirlo como un array de Strings con el nombre del atributo
  props: {
    title: String,// Declaracion tipo de props
    start: {
      type: Number,
      default: 100, // valor por defecto
      //required: true
      // VALIDACIONES DE ESTA PROPIEDAD
      // Recibe como argumento el value que se recibe en App.vue( :start="10", el 10 es el value )
      validator( value ) {
        return value > 100
      }
    }
  },
  data() {
    // retorno un objeto
    return {
      //todo elemento que se declare aquí va a ser reactivo
      // este start es una props y el valor lo recibe en App.vue, si no tiene valor , no mostrará nada
      counter: this.start

    }
  },
  methods: {
    // Mantener en caché el calculo 
    getSquareValue() {      
      return this.counter * this.counter
    },
    increase() {
      this.counter++
    },
    decrease() {
      this.counter--
    }
  },
  // Es un objeto parecido a los métodos, las propiedades computadas se guardan en el caché para que sea mas eficiente el proceso
  computed: {
      squareCounter() {
        // si me fijo en la consola a pesar de en el template repetirse 5 veces la misma línea ,el cálculo sólo lo hace una vez y lo muestra las veces que sea llamado

        // Sólo recalculará si el counter internamente cambiara, detecta si una de sus dependencias cambia
        console.log('computed squareCounter')
        return this.counter * this.counter
      },
      // Este método mostrará la propiedad 'title' que se creó en el template del elemento, si no tiene tittle muestra 'Counter'
      customTitle() {
        return this.title || 'Counter'
      }
  }

}
</script>

<style>
  button{
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px;
    color: white;
    cursor: pointer;
    margin:0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
  }

  button:hover {
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
  }

</style>