<template>
  <div id="app">
    <div id="menu">
      <Menu></Menu>
    </div>
    <div id="content">

      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Home from './views/Home'
  import Menu from './components/Menu'

  export default {
    name: 'app',
    computed:{...mapGetters(['gettersMsg'])},
    components:{Menu}
  }
</script>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  #menu{
    position: fixed;
    left: 0;
    top: 0;
  }
  #content{
    margin-left: 256px;
  }

</style>
