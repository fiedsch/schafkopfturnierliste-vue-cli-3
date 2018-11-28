<template>
    <div>
        <h2>Eingabe Ergebnisse
            (<span v-if="isFiltered">{{ spieler.length }} / </span>{{ anzahlSpielerGesamt }} Spieler)</h2>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Bezahlt</th>
                <th v-for="runde in runden" :key="runde">Runde {{ runde }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="spieler.length==0">
                <td :colspan="runden+1">Keine Spiele gefunden</td>
            </tr>
            <tl-spielereingabe v-for="s in spieler" :spieler="s" :key="spieler.id"></tl-spielereingabe>
            <tl-summenzeile :spieler="spieler"></tl-summenzeile>
            </tbody>
        </table>
        <!--<pre>{{ spieler }}</pre>-->
    </div>
</template>

<script>
    import TlSpielereingabe from '@/components/TlSpielereingabe.vue'
    import TlSummenzeile from '@/components/TlSummenzeile.vue'

    export default {
        name: 'TlEingabe',
        components: {
            TlSpielereingabe,
            TlSummenzeile
        },
        computed: {
            spieler() {
                if (!this.$store.getters.isFiltered) {
                    return this.$store.getters.spieler
                }
                let filter = this.$store.getters.filter
                let filteredSpieler = this.$store.getters.spieler
                if (filter.name) {
                    filteredSpieler = filteredSpieler.filter(function (el) {
                        return el.name.match(new RegExp(filter.name, "i"))
                    })
                }
                if (filter.nichtbezahlt) {
                    filteredSpieler = filteredSpieler.filter(function (el) {
                        return !el.bezahlt
                    })
                }
                for (let i = 0; i < filter.tischrunden.length; i++) {
                    if (filter.tischrunden[i]) {
                        filteredSpieler = filteredSpieler.filter(function (el) {
                            return el.runden[i] && (el.runden[i].tisch === filter.tischrunden[i])
                        })
                    }
                }

                return filteredSpieler
            },
            anzahlSpielerGesamt() {
              return this.$store.getters.anzahlSpielerGesamt
            },
            isFiltered() {
              return this.$store.getters.isFiltered
            },
            runden() {
                return this.$store.getters.runden
            },
        },
    }
</script>
