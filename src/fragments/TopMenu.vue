<template>
    <ul class="menu">
        <li><router-link to="/">Startseite</router-link></li>
        <li><router-link to="/results">Ergebnisse</router-link></li>
        <li><router-link to="/settings">Einstellungen</router-link></li>
        <li><router-link to="/about">Über</router-link></li>
    </ul>
</template>

<script>
    export default {
        name: 'TopMenu'
    }
</script>

<style scoped>
    @media print {
        .menu {
            display: none;
        }
    }
    ul.menu {
        list-style-type: none;
        padding: 0;
        border: 1px solid #42b983;
        background-color: #42b983;
        margin: -8px;
    }

    li {
        display: inline-block;
        margin: 5px;
        padding-left: 10px;
    }

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
    }
</style>