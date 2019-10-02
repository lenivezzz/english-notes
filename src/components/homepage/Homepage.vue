<template>
    <div>
        <div class="row mb-3">
            <div class="col-sm-2 offset-5">
                <img v-bind:src="logo_src" class="d-block" alt="Logo"/>
            </div>
        </div>
        <ul class="list-group list-group-horizontal justify-content-center">
           <li class="list-group-item">
              <router-link to="/irregular-verbs">Irregular verbs</router-link>
           </li>
            <li class="list-group-item">
                <router-link to="/nonprogressive-verbs">Non progressive verbs</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Homepage",
        props: {
            logo_src: String
        }
    }
</script>

<style scoped lang="scss">
    ul {
        &.fast-links {
            list-style: none;

            li {
                display: inline;
            }
        }
    }
</style>
