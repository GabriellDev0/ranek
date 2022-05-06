<template>
    <form>
        <label for="name">Nome</label>
        <input id="name" name="name" type="text" v-model="name">

        <label for="email">Email</label>
        <input id="email" name="email" type="email" v-model="email">

        <label for="password">Senha</label>
        <input id="password" name="password" type="text" v-model="password">

        <label for="cep">Cep</label>
        <input id="cep" name="cep" type="text" @keyup="fillCep" v-model="cep">

        <label for="street">Rua</label>
        <input id="street" name="street" type="text" v-model="street">

        <label for="number">Número</label>
        <input id="number" name="number" type="text" v-model="number">

        <label for="district">Bairro</label>
        <input id="district" name="district" type="text" v-model="district">

        <label for="city">Cidade</label>
        <input id="city" name="city" type="text" v-model="city">

        <label for="state">Estado</label>
        <input id="state" name="state" type="text" v-model="state">
        <div class="button">
            <slot></slot>
        </div>
    </form>
</template>

<script>
import { mapFields } from "@/helpers.js"
import { getCep } from "@/services.js"
export default {
    name: "UserForm",
    computed:{
        ...mapFields({
            fields: ['name', 'email', 'password', 'street', 'cep', 'number', 'district', 'city', 'state'],
            base: "user",
            mutation: 'UPDATE_USER'
        })
    },
    methods:{
        fillCep(){
            const cep = this.cep.replace(/\D/g, "");
            if(cep.length === 8){
                getCep(cep).then(response =>{
                    this.street = response.data.logradouro;
                    this.district = response.data.bairro;
                    this.state = response.data.uf;
                    this.city = response.data.localidade;
                })
            }
        }
    }
}
</script>

<style scoped>
form{
    display: grid;
    grid-template-columns: 80px 1fr;
    align-items: center;
}

.button{
    grid-column: 2;
    margin-top: 10px;
}
</style>