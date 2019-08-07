<template>
    <tr>
        <td><input :tabindex="spieler.id" type="text" :id="'name_'+spieler.id" v-model="name" @blur="update" placeholder="Namen eingeben"></td>
        <td><input type="checkbox" id="bezahlt" v-model="bezahlt" @change   ="update"></td>
        <template v-for="i in runden">
            <tl-rundenerfassung
                    :key="spieler.id+'_runde'+i"
                    :spielerId="spieler.id"
                    :rundeNummer="i-1"
                    :rundeData="runde(i-1)"></tl-rundenerfassung>
        </template>
        <td class="opaque delete-button">
            <button @click.prevent="loeschen">&times;</button>
        </td>
    </tr>
</template>

<script>
    import TlRundenerfassung from '@/components/TlRundenerfassung'

    export default {
        name: 'TlSpielereingabe',
        components: {
            TlRundenerfassung,
        },
        props: {
            spieler: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                name: this.spieler.name,
                bezahlt: this.spieler.bezahlt
            }
        },
        watch: {
            spieler: function () {
                this.name = this.spieler.name
                this.bezahlt = this.spieler.bezahlt
            },
        },
        computed: {
            runden() {
                return this.$store.getters.runden
            },
        },
        methods: {
            runde(i) {
                let runden = this.spieler.runden
                return runden[i] ? runden[i] : {}
            },
            update() {
                if (this.name !== this.spieler.name) {
                    this.$store.dispatch('setSpielerName', {
                        spielerId: this.spieler.id,
                        name: this.name,
                    })
                }
                if (this.bezahlt !== this.spieler.bezahlt) {
                    this.$store.dispatch('setSpielerBezahlt', {
                        spielerId: this.spieler.id,
                        bezahlt: this.bezahlt,
                    })
                }
            },
            loeschen() {
                if (window.confirm("wirklich löschen?")) {
                    this.$store.dispatch('deleteSpieler', {
                        spielerId: this.spieler.id,
                    })
                }
            },
        },
    }
</script>

<style scoped>
    td {
        border-top: 1px solid #999;
        border-bottom: 1px solid #999;
        border-left: 1px solid #999;
        border-right: 1px solid #999;
        padding: 3px;
    }

    td.delete-button {
        border: none;
    }

    button {
        padding: 0 .3em;
        border-radius: .25em;
        font-size: 1.2em;
        color: white;
        background-color: orangered;
    }

    #name {
        width: 15em;
        border: none;
        text-align: left;
        font-size: inherit;
    }

    .opaque {
        opacity: .5;
    }

    .opaque:hover {
        opacity: 1;
    }
</style>