<template>
    <header>
        <nav>
            <router-link :to="{name: 'home'}" class="logo">
                <img src="@/assets/ranek.svg" alt="Logo da empresa, cujo é uma escrita com uma font diferenciada chamada Ranked">
            </router-link>
            <router-link class="btn" v-if="$store.state.login" :to="{name: 'user'}">
                {{name}}
            </router-link>
           <router-link v-else :to="{name: 'login'}" class="btn">Vender / Login</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: "TheHeader",
    computed:{
        name(){
            return this.$store.state.user.name.replace(/ .*/, "")
        }
    }
}
</script>

<style scoped>
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    box-shadow: 0 2px 4px rgba(30,60,90,.1);
}
.logo{
    padding: 10px 0;
}
.logo img{
    width: 90px;
}

</style>