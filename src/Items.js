import React, { useContext } from 'react'
import Item from './Item'
import CartContext from './store/CartContext/cart-context'

const Items = (props) => {
    const cartCtx = useContext(CartContext)
    const addToCartBtnHandler = (e) => {
        e.preventDefault()
        const itemsCopy = [...props.items];
        const selectedItem = itemsCopy.find(item => +item.id === +e.target.id)
        cartCtx.addItem(selectedItem)
    }

    return (
        <>
            {props.items.map(item => {
                return (
                    <Item key={item.id} {...item} clicked={addToCartBtnHandler} />
                )
            })}
        </>
    )
}

export default Items
