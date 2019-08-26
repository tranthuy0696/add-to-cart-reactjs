import * as types from './../constants/ActionTypes'
let data = JSON.parse(localStorage.getItem('CART'))
let initialState = data || []

const cart = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TO_CART: 
            const {product, quantity} = action
            let productFinded = state.find((cart) => cart.product.id === product.id)
            if (productFinded) {
                productFinded.quantity = productFinded.quantity + quantity
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        default: return [...state]
    }
}

export default cart
