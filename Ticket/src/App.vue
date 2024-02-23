<template>
  <nav class="navEVERY">
    <router-link to="/" class="item">ГЛАВНАЯ</router-link>
    <router-link to="/profile" class="item">ПРОФИЛЬ</router-link>
    <router-link to="/login" class="item">ЛОГИН</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #a0a0a0;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #283593;
}

.navEVERY {
  width: 450px;
  display: flex;
  justify-content: space-between;
  /* box-shadow: 1px 1px 10px rgb(189, 189, 189); */
  height: 20px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;
  margin-left: 645px;
  margin-top: 10px;
}

.item{
  box-shadow: 1px 1px 10px rgb(189, 189, 189);
  height: 40px;
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: center;
}
</style>
