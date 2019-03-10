<template>
  <div id="app">

    <router-view />
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Comfortaa');

  #app {
    font-family: 'Comfortaa', cursive, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    background-color: rgb(223, 223, 223);
    background-attachment: fixed;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>