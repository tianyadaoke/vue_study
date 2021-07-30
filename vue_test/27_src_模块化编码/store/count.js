export default {
  namespaced: true,
  actions: {
    addOdd(context, value) {
      console.log('actions中的addOdd被调用了')
      if (context.state.sum % 2) {
        context.commit('ADD', value)
      }
    },
    addWait(context, value) {
      console.log('actions中的addWait被调用了')
      setTimeout(() => {
        context.commit('ADD', value)
      }, 1000);
    }
  },
  mutations: {
    ADD(state, value) {
      console.log('mutations中的ADD被调用了')
      state.sum += value
    },
    REDUCE(state, value) {
      console.log('mutations中的REDUCE被调用了')
      state.sum -= value
    }
  },
  state: {
    sum: 0,
    school: '尚硅谷',
    subject: '前端',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }
}