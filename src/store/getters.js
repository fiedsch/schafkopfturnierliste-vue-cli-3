export default {
    runden: state => {
        return Number.parseInt(state.runden)
    },
    debug: state => {
        return state.debug
    },
    detailsInErfassung: state => {
      return state.detailsInErfassung
    },
    spieler: state => {
        return state.spieler
    },
    filter: state => {
        return state.filter
    },
    filtertischrunden: state => {
        let result = []
        for (let i=0; i<state.runden; i++) {
            if (state.filter.tischrunden[i]) {
                result.push(state.filter.tischrunden[i])
            } else {
                result.push(null)
            }
        }
        return result
    },
    isFiltered: state => {
        let tischrundenfilter = state.filter.tischrunden.filter(function(el) { return el > 0 })
        return state.filter.name !== '' || state.filter.nichtbezahlt || tischrundenfilter.length > 0
    },
    anzahlSpielerGesamt: state => {
        return state.spieler.length
    }
}