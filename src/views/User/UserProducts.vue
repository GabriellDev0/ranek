<template>
    <section>
        <h2>Adicionar Produto</h2>
        <AddProduct/>
        <h2>Seus Produtos</h2>
        <transition-group v-if="user_products" name="list" tag="ul">
            <li v-for="product, index in user_products" :key="index">
                <ProductItem :product="product">
                    <p>{{product.description}}</p>
                    <button class="delete" @click.prevent="deleteProduct(product.id, product.name)">Deletar</button>
                </ProductItem>
            </li>
        </transition-group>
    </section>
</template>

<script>
import AddProduct from "@/views/AddProduct.vue"
import { mapState, mapActions } from "vuex";
import ProductItem from "@/components/ProductItem.vue"
import { api } from "@/services.js"
export default {
    name: "UserProducts",
    components:{
        AddProduct,
        ProductItem
    },
    computed: {
        ...mapState(["login","user","user_products"])
    },
    methods:{
        ...mapActions(["getUserProducts"]),
        deleteProduct(id,name){
          const confirm = window.confirm(`Deseja realmente remover o produto ${name}`)
          if(confirm){
              api.delete(`/product/${id}`).then(()=>{
                  this.getUserProducts()
              }).catch(error =>{
                  console.log(error.response)
              })
          }       
        }
    },
    watch:{
        login(){
            this.getUserProducts();
        }
    },
    created(){
        if(this.login){
            this.getUserProducts();
        }
        
    }
}
</script>

<style scoped>
h2{
    margin-bottom: 20px;
}

.list-enter-from,
.list-leave-to{
    opacity: 0;
    transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active{
    transition: all .3s
}

.delete{
    position: absolute;
    top: 0px;
    right: 0px;
    background: url("../../assets/remove.svg") no-repeat center center;
    width: 24px;
    height: 24px;
    text-indent: -140px;
    overflow: hidden;
    cursor: pointer;
    border: none;
}
</style>