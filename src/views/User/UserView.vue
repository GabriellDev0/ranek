<template>
    <section class="user">
        <nav class="sidenav">
            <ul>
                <li>
                    <router-link :to="{name: 'user'}">Produtos</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'purchases'}">Compras</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'sales'}">Vendas</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'user-edit'}">Editar Usuário</router-link>
                </li>
                <li>
                    <button @click.prevent="logOut">Deslogar</button>
                </li>
            </ul>
        </nav>
         <router-view v-slot="{ Component }">
                <transition mode="out-in">
                    <component :is="Component" />
                </transition>
         </router-view>
    </section>
</template>

<script>
export default {
    name: "UserView",
    methods:{
        logOut(){
            this.$store.dispatch("logOut")
            this.$router.push("/login")
        }
    }
}
</script>

<style scoped>
.router-link-exact-active{
    background: #87f;
    color: #fff;
}   

</style>