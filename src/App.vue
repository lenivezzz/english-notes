<template>
    <div id="app">
        <nav class="navbar navbar-dark bg-dark navbar-expand-md">
            <router-link to="/" class="navbar-brand">
                <img src="./assets/images/logo.svg" class="d-block logo" alt="Logo"/>
            </router-link>
            <div class="" id="navbarNav">
                <Navbar v-bind:links="navbar_links"></Navbar>
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

    import Navbar from "./components/navbar/Navbar";
    export default {
        name: 'app',
        data: function () {
            return {
                navbar_links: [
                    {
                        title: "Irregular verbs",
                        to: "/irregular-verbs"
                    },
                    {
                        title: "Non progressive verbs",
                        to: "/nonprogressive-verbs"
                    }
                ]
            }
        },
        components: {Navbar}
    }
</script>

<style lang="scss">
    @import "assets/styles";
</style>
