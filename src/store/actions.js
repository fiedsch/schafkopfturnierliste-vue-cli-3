export default {
    setRunden(context, data) {
        if (data === '') { return }
        context.commit('setRunden', data)
    },
    setDebug(context, data) {
        if (data === '') { return }
        context.commit('setDebug', data)
    },
    setDetaisInErfassung(context, data) {
      context.commit('setDetaisInErfassung', data)
    },
    addSpieler(context) {
        context.commit('addSpieler')
    },
    deleteSpieler(context, data) {
        context.commit('deleteSpieler', data)
    },
    setRundeForSpieler(context, data) {
        context.commit('setRundeForSpieler', data)
    },
    setSpielerName(context, data) {
        context.commit('setSpielerName', data)
    },
    setSpielerBezahlt(context, data) {
        context.commit('setSpielerBezahlt', data)
    },
    sucheSetName(context, data) {
        context.commit('sucheSetName', data)
    },
    sucheSetNichtBezahlt(context, data) {
        context.commit('sucheSetNichtBezahlt', data)
    },
    sucheSetTischRunden(context, data) {
        context.commit('sucheSetTischRunden', data)
    }
}