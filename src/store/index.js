import { api } from '@/services'
import { createStore } from 'vuex'


export default createStore({
  state: {
    login: false,
    user: {
      id: "",
      name: "",
      password: "",
      cep: "",
      street: "",
      number: "",
      district: "",
      city: "",
      state: ""
    }
  },
  getters: {
  },
  mutations: {
    UPDATE_LOGIN(state, payload){
      state.login = payload
    },
    UPDATE_USER(state, payload){
      state.user = payload
    }
  },
  actions: {
    getUser(context, payload){
      api.get(`/user/${payload}`).then(response =>{
          context.commit("UPDATE_USER", response.data)
          context.commit("UPDATE_LOGIN", true)
      })
    }
  },
  modules: {
  }
})
