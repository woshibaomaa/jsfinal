<template>
  <div id="App">
    <headBar ref="headBar"/>
    <router-view/>
    <diaLog ref="diaLog"/>
  </div>

</template>

<script>
  import HeadBar from './components/HeadBar'
  import DiaLog from './components/DiaLog'
export default {
  name: 'App',
  components:{
    headBar:HeadBar,
    diaLog:DiaLog
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3px;
}
</style>
