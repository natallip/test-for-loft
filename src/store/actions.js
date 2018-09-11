let actions = {
  loadBasket ({ commit }) {
    // return fetch('https://firebasestorage.googleapis.com/v0/b/test-21682.appspot.com/o/basket.json?alt=media&token=445dc098-900a-47c9-960c-ae11c63f2567', {
    //   method: 'GET'
    // })
    return fetch('https://natallip.github.io/test-json/basket.json', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        commit('setBasket', data)
      })
  }
}

export default actions
