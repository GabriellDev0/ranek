<template>
    <section class="products-container">
        <div v-if="products && products.length" class="products">
            <div class="product" v-for="(product, index) in products" :key="index">
                <router-link to="/">           
                        <img v-if="product.photos" :src="product.photos[0].src" :alt="product.photos[0].title">

                        <p class="price">{{product.price}}</p>

                        <h2 class="title">{{product.name}}</h2>

                        <p>{{product.description}}</p>
                </router-link>       
            </div>
            <ProductsByPage 
                :productsTotal ="productsTotal" 
                :productsByPage="productsByPage"
            />
        </div>
          <div v-else-if="products && products.length === 0">
            <p class="no-results">Busca sem resultados.</p>
         </div>
        
    </section>
</template>

<script>
import ProductsByPage from "@/components/ProductsByPage.vue"
import { api } from "@/services.js";
import { serialize } from "@/helpers.js"

export default {
    name: "ProductsList",
    data(){
        return{
            products: null,
            productsByPage: 3,
            productsTotal: 0,
        }
     },
     components:{
         ProductsByPage
     },
    computed:{
        url(){
            
            const query = serialize(this.$route.query)
             //&q=Globo&teste=oi
            return `/product?_limit=${this.productsByPage}${query}`
        }
    },
    methods: {
        getProducts(){

            api.get(this.url).then(response =>{
                this.productsTotal = Number(response.headers["x-total-count"])
                this.products = response.data;
            })

            
        }
    },
    watch:{
        url(){
            this.getProducts();
        }
    },
    created(){
        this.getProducts()
    }
}
</script>

<style scoped>
.products-container{
    max-width: 1000px;
    margin: 0 auto;
}
.products{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin: 30px;
}
.product{
    box-shadow: 0 4px 8px rgba(30,60,90,0.1);
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    transition: all 0.2s
}
.product:hover{
    box-shadow: 0 6px 12px rgba(30,60,90,0.2);
    transform: scale(1.1);
    position: relative;
    z-index: 1;
}

.product img{
    border-radius: 4px;
    margin-bottom: 20px;
}

.title{
    margin-bottom: 10px;
}

.price{
    color: #e80;
    font-weight: bold;
}

.no-results{
    text-align: center;
}


</style>