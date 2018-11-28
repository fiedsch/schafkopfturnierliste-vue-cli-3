<template>
    <div id="app">
        <top-menu></top-menu>
        <router-view/>
    </div>
</template>

<script>
    import TopMenu from '@/fragments/TopMenu'

    export default {
        name: 'app',
        components: {
            TopMenu
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    h1, h2 {
        font-weight: normal;
    }

</style>
