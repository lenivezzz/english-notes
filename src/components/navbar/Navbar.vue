<template>
    <ul class="navbar-nav">
        <li class="nav-item" v-for="(link, index) in links" v-bind:key="index">
            <router-link class="nav-link" v-bind:to="link.to" active-class="active">{{link.title}}</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Navbar",
        props: {
            links: Array
        }
    }
</script>
