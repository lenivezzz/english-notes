<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark navbar-expand-md">
      <router-link to="/" class="navbar-brand">
        <img src="./assets/images/logo.svg" class="d-block logo"  alt="Logo"/>
      </router-link>
      <div class="" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/irregular-verbs">Irregular verbs</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/nonprogressive-verbs">Non progressive verbs</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <main>
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
  @import "assets/styles";
</style>
