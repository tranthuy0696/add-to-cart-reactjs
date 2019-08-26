import * as types from './../constants/ActionTypes'
let data = JSON.parse(localStorage.getItem('CART'))
let initialState = data || []

const cart = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TO_CART: 
            return [...state]
        default: return [...state]
    }
}

export default cart
