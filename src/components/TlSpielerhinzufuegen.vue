<template>
    <div>
        <h2 @click="toggle">
            Spieler hinzufügen
            <span :class="{ showmore: !visible, showless: visible }"></span>
        </h2>
        <transition name="bounce">
            <div v-if="visible">
                <button v-if="!sucheaktiv" @click.prevent="addSpieler" accesskey="s">neuen Spieler hinzufügen</button>
                <div v-else>Bitte Suchfilter leeren</div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'TlSpielerhinzufuegen',
        data() {
            return {
                visible: true
            }
        },
        computed: {
            sucheaktiv() {
                return this.$store.getters.isFiltered
            }
        },
        methods: {
            addSpieler() {
                this.$store.dispatch('addSpieler')
                setTimeout(() => {
                    let el = document.getElementById('name_'+this.$store.state.maxSpielerId); // .focus()
                    el.focus()
                }, 50)
            },
            toggle() {
                this.visible = !this.visible
            }
        }
    }
</script>

<style scoped>
    button {
        padding: 1em;
        border-radius: .5em;
    }

    button:hover {
        background-color: mediumseagreen;
    }
</style>