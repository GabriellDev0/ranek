<template>
  <section>
    <div v-if="sales">
        <h2>Vendas</h2>
        <div class="products-wrapper" v-for="(sale, index) in sales" :key="sale+index">
            <ProductItem v-if="sale.product" :product="sale.product">
                  <p class="seller">
                    <span>Comprador:</span>
                    {{sale.buyer_id}}
                  </p>
            </ProductItem>
            <div class="delivery">
                <h3>Entrega:</h3>
                <ul v-if="sale.address">
                    <li v-for="(value, index) in sale.address" :key="index">
                        {{index}}: {{value}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import { api } from "@/services.js"
import { mapState } from "vuex"
export default {
  name: "UserSales",
  components:{
    ProductItem
  },
  data(){
    return{
      sales: null,
    }
  }, 
  computed:{
    ...mapState(["user", "login"])
  },
  methods:{
    getSales(){
      api.get(`/transaction?seller_id=${this.user.id}`).then(response =>{
        this.sales = response.data
      })
    },
  },
  created(){
      if(this.login){
            this.getSales();
        }
  },
  watch:{
        login(){
            this.getSales();
        }
    }, 
}
</script>

<style scoped>
.product-wrapper{
  margin-bottom: 40px;
}
.seller span{
  color: #e80;
} 

.delivery{
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  gap: 20px;
  margin-bottom: 60px;
}

h2{
  margin-bottom: 20px;
}

h3{
  margin: 0px;
  justify-self: end;
}



</style>