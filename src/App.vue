<template>
  <div id="app">
    <b-navbar variant="faded" type="light" id="nav">
        <b-navbar-brand to="/"><router-link to="/">Home</router-link></b-navbar-brand>
        <b-navbar-brand ><router-link to="/add-book">Add Book</router-link></b-navbar-brand>
        <b-navbar-brand to="/about"><router-link to="/about">About</router-link></b-navbar-brand>
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/addbook">Add Book</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link :to="{name: 'user'}">User</router-link> -->
    </b-navbar>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #758184;
  font-size: 1.5em;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #758184;
}

#nav a.router-link-exact-active {
  color: #004445;
}
</style>
