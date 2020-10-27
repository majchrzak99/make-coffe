<template>
  <v-app id="app">
    <Header />
    <Navbar />
    <v-container fluid class="main-container">
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    Navbar: () => import('~/components/Navbar.vue'),
    Header: () => import('~/components/Header.vue')
  },
  mounted () {
    this.$store.commit('RefreshWindowWidth')
    window.addEventListener('resize', () => this.$store.commit('RefreshWindowWidth'))
  }
}
</script>

<style lang="scss">
body{
  padding: 0px;
  margin:0px;
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F8F9DF;
  position: relative;
  height: 100%;
}
</style>
