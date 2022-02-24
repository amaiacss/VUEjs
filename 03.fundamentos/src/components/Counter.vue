<template>
  <h2>Counter!!!</h2>
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
  data() {
    // retorno un objeto
    return {
      //todo elemento que se declare aquí va a ser reactivo
      counter: 5

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
        // si me fijo en la consola a pesar de en el template repetirse 5 veces la misma línea ,el cálculo sólo lo hace una vezy lo muestra las veces que sea llamado
        // Sólo recalculará si el counter internamente cambiara, detecta si una de sus dependencias cambia
        console.log('computed squareCounter')
        return this.counter * this.counter
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