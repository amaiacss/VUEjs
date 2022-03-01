<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- title es un atributo, el cual se usará únicamente en este component -->
  <Counter title="Entraron"/>

<!-- cada uno de estos elementos mantienen su propio estado e independiente -->
  <!-- <Counter /> -->

<!-- Se declara un atributo(en el componente Counter.vue no está declarado como props, esa es la diferencia entre property y atributtes) -->
  <Counter :start="100"/>


</template>

<script>
import Counter from './components/Counter.vue'

export default {
  components: { Counter },
  // Este name es para identificarlo en el vue developments tools
  name: 'App',
  components: {
    Counter
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
