<template>
    <td class="runde">
        <ul :class="{ full: detailsInErfassung, short: !detailsInErfassung }">
            <li>
                <label for="tisch">Tisch</label>
                <input id="tisch" type="text" v-model.number.prevent="data.tisch" @change="update">
            </li>
            <li>
                <label for="punkte">Punkte</label>
                <input id="punkte" type="text" v-model.number.prevent="data.punkte" @change="update">
            </li>
            <li>
                <label for="soli">Soli</label>
                <input id="soli" type="text" v-model.number.prevent="data.soli" @change="update">
            </li>
            <li v-if="detailsInErfassung">
                <label for="soligewonnen">Soli gewonen</label>
                <input id="soligewonnen" type="text" v-model.number.prevent="data.soligewonnen" @change="update">
            </li>
            <li v-if="detailsInErfassung">
                <label for="spielegewonnen">Spiele gewonnen</label>
                <input id="spielegewonnen" type="text" v-model.number.prevent="data.spielegewonnen" @change="update">
            </li>
        </ul>
    </td>
</template>

<script>
    export default {
        name: 'TlRundenerfassung',
        props: {
            spielerId: {
                type: Number,
                required: true,
            },
            rundeNummer: {
                type: Number,
                required: true,
            },
            rundeData: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                data: this.rundeData,
            }
        },
        computed: {
            detailsInErfassung() { return this.$store.getters.detailsInErfassung }
        },
        methods: {
            update() {
                this.$store.dispatch('setRundeForSpieler', {
                    spielerId: this.spielerId,
                    rundeNummer: this.rundeNummer,
                    runde: this.data,
                })
            },
        },
        mounted() {
            if (Object.keys(this.data).length === 0) {
                this.data = { tisch: '', punkte: '', soli: '', soligewonnen: '', spielegewonnen: '' }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    ul.short li {
        display: inline-block;
    }
    ul.full li {
        display: block;
    }
    input {
        width: 3em;
        border: none;
        text-align: center;
        font-size: inherit;
    }
</style>
