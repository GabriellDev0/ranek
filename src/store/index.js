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
      //Object.assign, combina pra mim o objeto que já tenho do user com o payload que está sendo enviado,
      //se a propriedade já existir, altera só o valor, se não existir, acrescenta lá pra mim.
      state.user = Object.assign(state.user,payload)
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
