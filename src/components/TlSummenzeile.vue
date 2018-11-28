<template>
    <tr>
        <td colspan="2"></td>
        <td v-for="i in runden">
            ∑ Punkte:
            <span :class="{ ok: punkte(i-1)==='0', notok: punkte(i-1)!=='0' }">
                {{ punkte(i - 1) }}
            </span>
        </td>
        <td class="">&nbsp;</td>
    </tr>
</template>

<script>
    export default {
        name: 'TlSummenzeile',
        props: {
            spieler: {
                type: Array,
                required: true,
            },
        },
        computed: {
            runden() {
                return this.$store.getters.runden
            },
        },
        methods: {
            punkte(runde) {
                let result = this.spieler.reduce(function (acc, val) {
                    if (!val.runden[runde] || !val.runden[runde].punkte) {
                        return acc
                    }
                    return acc + val.runden[runde].punkte
                }, 0)
                return (result > 0 ? "+" : '') + result
            },
        },
    }
</script>

<style scoped>
    td {
        padding: 3px 3px 3px 6px;
    }

    .ok, .notok  {
        display: inline-block;
        padding: 3px 10px 3px 10px;
    }
    .ok {
        background-color: yellowgreen;
    }

    .notok {
        background-color: orangered;
    }
</style>