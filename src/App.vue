<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'
import AddItem from '@/components/AddItem'

export default {
  name: 'app',
  components: { 
    Header
  },
}
</script>

<style>
  body {
    margin: 0; 
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
