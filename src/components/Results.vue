<template>
    <div class="settings">
        <h1>Ergebnisse</h1>
        <table>
            <thead>
            <tr>
                <th></th>
                <th></th>
                <th :colspan="2 + (detailsInErfassung ? 2 : 0)">Gesamt</th>
                <th :key="'runde'+i" v-for="i in runden" :colspan="2 + (detailsInErfassung ? 2 : 0)">Runde {{ i }}</th>
            </tr>
            <tr>
                <th>Platz</th>
                <th>Spieler</th>
                <th>Punkte</th>
                <th>Soli</th>
                <th v-if="detailsInErfassung">Soli<br> gew.</th>
                <th v-if="detailsInErfassung">Spiele<br> gew.</th>
                <template v-for="i in runden">
                    <th>Punkte</th>
                    <th>Soli</th>
                    <th v-if="detailsInErfassung">Soli<br> gew.</th>
                    <th v-if="detailsInErfassung">Spiele<br> gew.</th>
                </template>
                <th v-if="debug"><code>Debug</code></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="s in spieler">
                <td>{{ s.rang }}</td>
                <td>{{ s.name }}</td>
                <td class="rundestart">{{ getPunkte(s) }}</td>
                <td>{{ getSoli(s) }}</td>
                <td v-if="detailsInErfassung">{{ getSoliGewonnen(s) }}</td>
                <td v-if="detailsInErfassung">{{ getSpieleGewonnen(s) }}</td>
                <template v-for="i in runden">
                    <td class="rundestart">{{ getPunkte(s,i) }}</td>
                    <td>{{ getSoli(s,i) }}</td>
                    <td v-if="detailsInErfassung">{{ getSoliGewonnen(s,i) }} </td>
                    <td v-if="detailsInErfassung">{{ getSpieleGewonnen(s,i) }} </td>
                </template>
                <td v-if="debug"><pre style="font-size: .8em">{{ s }}</pre></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import spielerMixin from '@/mixins/spielerMixin.js'

    export default {
        name: 'Results',
        mixins: [spielerMixin],
        computed: {
            detailsInErfassung() {
                return this.$store.getters.detailsInErfassung
            },
            debug() {
                return this.$store.getters.debug
            },
            spieler() {
                // (clone array und) Gesamtpunkteberechnung
                let result = this.$store.getters.spieler.map(function (el) {
                    el.gesamtpunkte = this.getPunkte(el)
                    return el
                }, this)
                // Sortieren
                result = result.sort(this.compareSpieler)
                // Rang berechnen
                let runningRang = 1
                result[0].rang = runningRang
                for (let i=1; i<result.length; i++) {
                    if (this.compareSpieler(result[i-1], result[i]) < 0) {
                        result[i].rang = ++runningRang
                    } else {
                        result[i].rang = runningRang
                    }
                }
                return result
            },
            runden() {
                return this.$store.getters.runden
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    table {
        border-collapse: collapse;
    }
    th {
        text-align: center;
        vertical-align: top;
        font-weight: normal;
        font-size: .7em;
    }

    td {
        border-top: 1px solid #999;
        border-bottom: 1px solid #999;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        text-align: center;
    }
    td.rundestart {
        border-left: 1px solid #999;
    }

    th:nth-child(2) {
        text-align: left;
        padding-left: 20px;
    }
    td:nth-child(2) {
        text-align: left;
    }

</style>
