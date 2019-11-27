<template>
  <div>
     <app-stock v-for="(stock, i) in stocks" :key="i" :stock="stock"></app-stock>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import Stock from "./stock.vue"
export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components: {
    appStock: Stock
  }
}
</script>

<style>

</style> 