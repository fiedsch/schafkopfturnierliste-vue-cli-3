<template>
    <div class="settings">
        <h1>Einstellungen</h1>
        <table>
            <tbody>
            <tr>
                <td><label for="runden">Runden:</label></td>
                <td class="value"><input id="runden" type="text" v-model.number="runden"> </td>
            </tr>
            <tr>
                <td><label for="detailsinerfassung">Gewonnenen Soli und Spiele etc.<br>bei der Erfassung anzeigen:</label></td>
                <td class="value"><input id="detailsinerfassung" type="checkbox" v-model="detailsInErfassung"></td>
            </tr>
            <tr>
                <td><label for="debug">Debug-Modus:</label></td>
                <td class="value"><input id="debug" type="checkbox" v-model="debug"></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Settings',
        computed: {
            runden: {
                get() {
                    return this.$store.getters.runden
                },
                set(value) {
                    this.$store.dispatch('setRunden', value)
                }
            },
            debug: {
                get() {
                    return this.$store.getters.debug
                },
                set(value) {
                    this.$store.dispatch('setDebug', value)
                }
            },
            detailsInErfassung: {
                get() {
                    return this.$store.getters.detailsInErfassung
                },
                set(value) {
                    this.$store.dispatch('setDetaisInErfassung', value)
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    input {
        width: 5em;
        border: none;
        text-align: left;
        font-size: inherit;
    }
td.value {
    vertical-align: bottom;
    text-align: right;
}
</style>
