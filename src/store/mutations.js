let mutations = {
  setBasket (state, payload) {
    state.basket = payload
  },
  changeCount (state, payload) {
    let count = payload.count
    const i = payload.i
    state.basket[i].count = count
  },
  deleteItems (state, payload) {
    payload.forEach(id => {
      state.basket.filter((item, i) => {
        if (item.id === id) {
          state.basket.splice(i, 1)
        }
      })
    })
  }
}

export default mutations
