<template>
    <header>
        <nav>
            <router-link :to="{name: 'home'}" class="logo">
                <img src="@/assets/ranek.svg" alt="Logo da empresa, cujo é uma escrita com uma font diferenciada chamada Ranked">
            </router-link>
            <a href="" class="btn">Vender / Login</a>
            <!-- :to="{name: 'login'}" -->
        </nav>
    </header>
</template>

<script>
export default {
    name: "TheHeader"
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