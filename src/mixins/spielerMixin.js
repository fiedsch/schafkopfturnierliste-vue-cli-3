/*
 * TODO: wenn bereits Ergebnisse erfasst wurden und dann in den Einstellungen die
 * Anzahl der Runden verringert wird löschen wir die Daten nicht.
 * Das fürhrt dazu, daß in der Ergebnisanzeige "falsche" Ergebnisse angezeigt werden.
 * Ausgewiesen werden nur die ersten "Anzahl Runden" Runden. Für die Berechnung der
 * Gesamtergebnisse werden aber alle Daten herangezogen!
 */

export default {
    methods: {
        getPunkte(spieler, runde) {
            if (undefined !== runde) {
                return spieler.runden[runde-1].punkte
            }
            return spieler.runden.reduce(function(acc, val) {
                return acc + (Number.isInteger(val.punkte) ? val.punkte : 0)
            }, 0)
        },
        getSoli(spieler, runde) {
            if (undefined !== runde) {
                return spieler.runden[runde-1].soli
            }

            return spieler.runden.reduce(function(acc, val) {
                if (null === val) { return acc }
                return acc + (Number.isInteger(val.soli) ? val.soli : 0)
            }, 0)
        },
        getSoliGewonnen(spieler, runde) {
            if (undefined !== runde) {
                return spieler.runden[runde-1].soligewonnen
            }
            return spieler.runden.reduce(function(acc, val) {
                if (null === val) { return acc }
                return acc + (Number.isInteger(val.soligewonnen) ? val.soligewonnen : 0)
            }, 0)
        },
        getSpieleGewonnen(spieler, runde) {
            if (undefined !== runde) {
                return spieler.runden[runde-1].spielegewonnen
            }
            return spieler.runden.reduce(function(acc, val) {
                if (null === val) { return acc }
                return acc + (Number.isInteger(val.spielegewonnen) ? val.spielegewonnen : 0)
            }, 0)
        },
        compareSpieler(a, b) {
            // Vergleichswerte für die Sortierung
            let cmp_a = a.gesamtpunkte
            let cmp_b = b.gesamtpunkte
            // Bei Punktgleichheit nach Anzahl der gespielten Soli
            if (cmp_a == cmp_b) {
                cmp_a += this.getSoli(a)
                cmp_b += this.getSoli(b)
            }
            // TODO weitere Vergleichsregeln!
            // Bei Punktgleichheit nach "Soli gewonnen"
            if (cmp_a == cmp_b) {
                cmp_a += this.getSoliGewonnen(a)
                cmp_b += this.getSoliGewonnen(b)

            }
            // Bei Punktgleichheit nach "Anzahl Spiele gewonnen"
            if (cmp_a == cmp_b) {
                cmp_a += this.getSpieleGewonnen(a)
                cmp_b += this.getSpieleGewonnen(b)
            }
            return cmp_b - cmp_a
        }
    }
}