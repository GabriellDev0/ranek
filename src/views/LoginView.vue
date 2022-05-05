<template>
    <section class="login">
        <h1>Login</h1>
            <form class="form">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="login.email">

                <label for="password">Senha</label>
                <input type="password" name="password" id="password" v-model="login.password">

                <button class="btn" @click.prevent="signIn">Logar</button>
            </form>
            <p class="lostPassword" id="lostPassword">
                <a href="/" target="_blank">Perdeu a senha? Clique aqui.</a>
            </p>
            <CreateLogin/>
    </section>
</template>

<script>
import CreateLogin from "@/components/CreateLogin.vue"

export default {
    name: "LoginView",
    data(){
        return{
            login:{
                email: '',
                password: ''
            }
        }
    },
    components:{
        CreateLogin
    },
    methods:{
        signIn(){
            this.$store.dispatch("getUser", this.login.email);
            this.$router.push({name: 'user'})
        }
    }
}
</script>

<style scoped>
.login{
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
}

h1{
    text-align: center;
    font-size: 2rem;
    margin-top: 40px;
    color: #87f
}

.form{
    display: grid;
}

.btn{
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
}

.lostPassword{
    text-align: center;
    margin: 20px auto 0 auto;
}

a:hover{
    color: #87f;
    text-decoration: underline;
}
</style>