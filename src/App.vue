<template>
  <div id="app">
    <div id="nav">
      <router-link to="/todo">추가 페이지</router-link> |
      <router-link to="/list">목록 페이지</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  text-align: center;
  color: #2c3e50;
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
