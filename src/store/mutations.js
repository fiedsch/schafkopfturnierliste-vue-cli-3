const rundentemplate = {
        punkte: 0,
        soli: 0,
        soligewonnen: 0,
        spielegewonnen: 0,
    }

export default {
    setRunden(state, data) {
        state.runden = data
        // runden für alle spieler patchen. Dabei nur zusätzliche Daten anlegen -- keine Daten löschen!
        state.spieler.forEach(function(s) {
            for (let i = s.runden.length; i < state.runden; i++) {
                s.runden[i] = { }
                Object.assign(s.runden[i], rundentemplate)
            }
        })
    },
    setDebug(state, data) {
        state.debug = data
    },
    setDetaisInErfassung(state, data) {
      state.detailsInErfassung = data
    },
    addSpieler(state) {
        state.maxSpielerId++
        let spieler = { id: state.maxSpielerId, name: '', bezahlt: false, runden:[] }
        for (let i=0; i< state.runden; i++) {
            spieler.runden[i] = { }
            Object.assign(spieler.runden[i], rundentemplate)
        }
        state.spieler.unshift(spieler)
    },
    deleteSpieler(state, data) {
        let sp = state.spieler.find(function(s) { return s.id === data.spielerId })
        let i = state.spieler.indexOf(sp)
        state.spieler.splice(i, 1)
    },
    setRundeForSpieler(state, data) {
        let sp = state.spieler.find(function(s) { return s.id === data.spielerId })
        let i = state.spieler.indexOf(sp)
        sp.runden[data.rundeNummer] = data.runde;
        Object.keys(rundentemplate).forEach(function(key) {
            if (sp.runden[data.rundeNummer][key] === '') { sp.runden[data.rundeNummer][key] = 0 }
        })
        state.spieler.splice(i, 1, sp)
    },
    setSpielerName(state, data) {
        if (state.spieler.find(function(s) { return s.name === data.name })) {
            alert("Der Spieler mit Namen \""+data.name+"\" existiert bereits!");
        }
        let sp = state.spieler.find(function(s) { return s.id === data.spielerId })
        let i = state.spieler.indexOf(sp)
        sp.name = data.name
        state.spieler.splice(i, 1, sp)
    },
    setSpielerBezahlt(state, data) {
        let sp = state.spieler.find(function(s) { return s.id === data.spielerId })
        let i = state.spieler.indexOf(sp)
        sp.bezahlt = data.bezahlt
        state.spieler.splice(i, 1, sp)
    },
    sucheSetName(state, data) {
        state.filter.name = data
    },
    sucheSetNichtBezahlt(state, data) {
        state.filter.nichtbezahlt = data
    },
    sucheSetTischRunden(state, data) {
        state.filter.tischrunden = data
    }
}