<template>
    <div class="hello">
        <h1>{{ title }}</h1>
        <tl-suche></tl-suche>
        <tl-spielerhinzufuegen></tl-spielerhinzufuegen>
        <tl-eingabe></tl-eingabe>
    </div>
</template>

<script>
    import TlSuche from '@/components/TlSuche'
    import TlSpielerhinzufuegen from '@/components/TlSpielerhinzufuegen'
    import TlEingabe from '@/components/TlEingabe'
    export default {
        name: 'MainContent',
        components: {
            TlSuche,
            TlEingabe,
            TlSpielerhinzufuegen
        },
        data() {
            return {
                title: 'Schafkopfturnierliste',
            }
        },
    }
</script>

<style>
    table {
        border-collapse: collapse;
    }
    th {
        text-align: left;
    }

    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

    .showmore:after {
        content: '\25bc';
        font-size: 0.6em;
        color: #666;
    }
    .showless:after {
        content: '\25b2';
        font-size: 0.6em;
        color: #666;
    }
</style>