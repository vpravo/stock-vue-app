<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Stock trader</router-link>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
                    <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
                </ul>
                <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay">End Day</a></li>
                    <li class="dropdown"
                        :class="{open:  isDropDownOpen}"
                        @click="isDropDownOpen = !isDropDownOpen"
                        >
                        <a
                            href="#"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >Save and load<span  class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click="saveData">Save data</a></li>
                            <li><a href="#" @click="loadData">Load data</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import {mapActions} from "vuex"
import fb from "../firebase.js"
export default {
    data(){
        return {
            isDropDownOpen: false
        }
    },
    computed: {
        funds(){
            return this.$store.getters.funds
        }
    },
    methods: {
        ...mapActions({
            randomizeStocks: 'randomizeStocks',
            fetchData: 'loadData'
          }
        ),
        endDay(){
            this.randomizeStocks()
        },
        saveData(){
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks
            }
            this.$http.put("data.json", data)
             
            // fb.collection('data.json')
            //   .add(data)
            //   .catch(err => {console.log(err)})

        },
        loadData(){
                // fb.collection("stocks").get().then((querySnapshot) => {
                //     querySnapshot.forEach((doc) => {
                //         console.log(doc.data());
                //     });
                // });
                this.fetchData()
        }
    }
}
</script>

<style>

</style>