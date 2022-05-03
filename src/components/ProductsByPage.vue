<template>
   
            <ul v-if="totalPages > 1">
                <li v-for="page in totalPages" :key="page">
                    <router-link 
                        :class="{currentActive: $route.query._page == page}" 
                        :to="{query: query(page)}"
                    >{{page}}</router-link>
                </li>
            </ul>
</template>

<script>
export default {
    props: {
        productsByPage:{
            type: Number,
            default: 1,
        },
        productsTotal:{
            type: Number,
            default: 1,
        }
    },
    methods:{
        query(page){
            return {
                ...this.$route.query,
                _page: page
            }
        }
    },
    computed:{
        totalPages(){
            console.log(this.$route.query._page)
            const total = this.productsTotal / this.productsByPage
        
            return (total !== Infinity) ? Math.ceil(total) : 0;
        }
    }
}
</script>

<style>
ul{
    grid-column: 1/-1;
}
li{
    display: inline-block;
}
li a{
    padding: 2px 8px;
    border-radius: 2px;
    margin: 4px;

}
li a.router-link-exact-active.currentActive,
li a:hover{
    background: #87f;   
    color: #fff;
}
</style>