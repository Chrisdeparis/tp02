import React from 'react'

const ShoppingListItem = ({ item }) => (
    <li>
    <span>{item.label}</span>:<span>{item.price}€</span>
  </li>
)


export default ShoppingListItem