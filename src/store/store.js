import Vue from "vue"
import Vuex from "vuex"
import stocks from "./modules"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {stocks}
})