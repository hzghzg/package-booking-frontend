<template>
  <div id="app">
    <router-view/>
    <!-- <main-page></main-page>
    <save-package id="save"></save-package>
    <reservation id="res"></reservation> -->
  </div>
</template>
<script>
// import MainPage from './components/MainPage.vue'
// // import Home from './components/Home.vue'
// import SavePackage from './components/SavePackage.vue'
// import Reservation from './components/Reservation.vue'
export default {
  name: 'app',
  components: {
    // Reservation,
    // SavePackage,
    // MainPage
  }
}
</script>

<style lang="scss">
#save{
  margin-top:10px;
  margin-bottom:10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
