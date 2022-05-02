<template>
    <section class="products-container">
           <div v-for="product in products" :key="product.id">

              <img v-if="product.photos" :src="product.photos[0].src" :alt="product.photos[0].title">

              <p class="price">{{product.price}}</p>

              <h2 class="title">{{product.name}}</h2>

              <p>{{product.description}}</p>
           </div> 
    </section>
</template>

<script>
export default {
    name: "ProductsSearch",
    data(){
        return{
            products: null
        }
    },
    methods: {
       async getProducts(){
            const link = `http://localhost:3000/product`
            const response = await fetch(link)
            const responseJSON = await response.json()

            return this.products = responseJSON
        }
    },
    created(){
        this.getProducts()
    }
}
</script>

<style>

</style>