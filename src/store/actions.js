import Vue from "vue"
//import fb from "../firebase"
export const loadData = ({commit}) => {
//     fb.collection("stocks").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//         console.log(doc.data());
//     });
//   });
    Vue.http.get("data.json")
        .then(res => res.json())
        .then(data => {
            if(data){
                const stocks = data.stocks
                const funds = data.funds
                const stockPortfolio = data.stockPortfolio
                const portfolio = {
                    stocks,
                    funds
                }
                commit("SET_STOCKS", stocks)
                commit("SET_PORTFOLIO",  portfolio)
            }
    })
}