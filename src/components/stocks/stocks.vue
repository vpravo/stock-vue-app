<template>
  <div>
    <app-stock v-for="(stock, i) in stocks" :key="i" :stock="stock"
    ></app-stock>
  </div>
</template>

<script>
import Stock from "./stock.vue"
export default {
  data(){
    return {
      stocks: [
        {id: 1, name: 'BMW', price: 110},
        {id: 2, name: 'Google', price: 220},
        {id: 3, name: 'Apple', price: 270},
        {id: 4, name: 'Twitter', price: 300},
      ]
    }
  },
  components: {
    appStock: Stock
  }
}
</script>

<style>

</style>