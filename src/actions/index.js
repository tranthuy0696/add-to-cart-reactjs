import * as types from './../constants/ActionTypes'

export const addToCart = (product, quality) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quality
    }
} 
