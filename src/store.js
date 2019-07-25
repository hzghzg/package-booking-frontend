import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: []
  },
  mutations: {
    updatedata (state, newPackage) {
      state.tableData.push(newPackage)
    },
    updatestatus (state, trackNumber) {
      if (state.tableData.map(i => i.trackNumber).indexOf(trackNumber) >= 0) {
        state.tableData[state.tableData.map(i => i.trackNumber).indexOf(trackNumber)].status = '已预约'
        state.tableData[state.tableData.map(i => i.trackNumber).indexOf(trackNumber)].reservationTime = '2019-7-26 19:00'
      }
    }
  }
})
