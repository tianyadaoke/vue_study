import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions={
  // add(context,value){
  //   console.log('actions中的add被调用了')
  //   context.commit('ADD',value)
  // },
  // reduce(context,value){
  //   console.log('actions中的reduce被调用了')
  //   context.commit('REDUCE',value)
  // },
  addOdd(context,value){
    console.log('actions中的addOdd被调用了')
    if(context.state.sum%2){
      context.commit('ADD',value)
    }
  },
  addWait(context,value){
    console.log('actions中的addWait被调用了')
    setTimeout(() => {
      context.commit('ADD',value)
    }, 1000);
  }
}
const mutations={
  ADD(state,value){
    console.log('mutations中的ADD被调用了')
    state.sum+=value
  },
  REDUCE(state,value){
    console.log('mutations中的REDUCE被调用了')
    state.sum-=value
  },
}
const state={
  sum: 0,
}

export default new Vuex.Store({
  actions,mutations,state
})
 