import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalQuantity: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = [...state.items, action.item]
        const updatedQuantity = updatedItems.length
        return {
            items: updatedItems,
            totalQuantity: updatedQuantity
        }
    }
}

const CartProvider = (props) => {

    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState)

    const addToCartHandler = (item) => {
        dispatchCartState(
            {
                type: 'ADD',
                item: item
            }
        )
    }

    const removeFromCartHandler = (id) => {

    }

    const cartContext = {
        items: cartState.items,
        totalQuantity: cartState.totalQuantity,
        addItem: addToCartHandler,
        removeItem: removeFromCartHandler,
    }
    console.log(cartContext, 'in home')
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
