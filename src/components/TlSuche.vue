<template>
    <div>
        <h2 @click="toggle" :class="{ active: active, empty: !active }">
            Suche <span v-if="active">aktiv!</span>
            <span :class="{ showmore: !visible, showless: visible }"></span>
        </h2>
        <transition name="bounce">
            <div v-if="visible">
                <table>
                    <tbody>
                    <tr>
                        <td><label for="suche_name">Name Spieler</label></td>
                        <td><input id="suche_name" type="text" v-model="name" @keyup="update"></td>
                    </tr>
                    <tr>
                        <td><label for="suche_bezahlt">nicht Bezahlt</label></td>
                        <td><input id="suche_bezahlt" type="checkbox" v-model="nichtbezahlt" @change="update"></td>
                    </tr>
                    <tr v-for="i in runden">
                        <td><label :for="'suche_tisch_'+i">Tisch Runde {{ i }}</label></td>
                        <td><input id="'suche_tisch_'+i" type="text" v-model.number="tischrunde[i-1]" @keyup="update"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </transition>
    </div>

</template>

<script>
    export default {
        name: 'TlSuche',
        data() {
            return {
                name: this.$store.getters.filter.name,
                nichtbezahlt: this.$store.getters.filter.nichtbezahlt,
                tischrunde: this.$store.getters.filtertischrunden,
                visible: this.$store.getters.isFiltered
            }
        },
        computed: {
            active() {
                return this.$store.getters.isFiltered
            },
            runden() {
                return this.$store.getters.runden
            },
        },
        methods: {
            update() {
                this.$store.dispatch("sucheSetName", this.name)
                this.$store.dispatch("sucheSetNichtBezahlt", this.nichtbezahlt)
                this.$store.dispatch("sucheSetTischRunden", this.tischrunde)
            },
            toggle() {
                this.visible = !this.visible
            },
        },
    }
</script>

<style>
    .active {
        color: orangered;
    }
</style>