const state = {
    funds: 10000,
    stocks: []
}

const mutations = {
    "BUY_STOCK" (state, {stockId, quantity, stockPrice }) {
        const record = state.stocks.find(el => el.id === stockId)
        if (record) {
            console.log('BUY_STOCK - позиция уже была в портфеле', record)
            record.quantity += quantity
        }else{
            id: stockId,
            console.log('BUY_STOCK - новая позиция', 'stockId ' + stockId)
            state.stocks.push({
                id: stockId,
                quantity
            })
        }
        state.funds -= stockPrice * quantity
    },
    "SELL_STOCK" (state, {stockId, quantity, stockPrice }) {
        const record = state.stocks.find(el => el.id === stockId)
        if(record.quantity > quantity){
            record.quantity -= quantity
        }else{
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += stockPrice * quantity
    }
}

const actions = {
    sellStock({commit}, order){
        commit("SELL_STOCK", order)
    }
}

const getters = {
    stockPortfolio (state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(el => el.id === stock.id)
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds(state){
        return state.funds
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
