<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark navbar-expand-md">
      <a class="navbar-brand" href="#">
        <svg aria-hidden="true"
             focusable="false"
             data-prefix="far"
             data-icon="bookmark"
             role="img"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 384 512"
             class="d-block logo">
          <path fill="currentColor" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z" class=""></path>
        </svg>
      </a>
    </nav>
    <main>
      <div class="container">
        <IrregularVerbs/>
      </div>
    </main>
  </div>
</template>

<script>

import IrregularVerbs from "./components/irregular_verbs/IrregularVerbs";

export default {
  name: 'app',
  components: {
    IrregularVerbs
  }
}
</script>

<style lang="scss">
  @import "assets/styles";
</style>
