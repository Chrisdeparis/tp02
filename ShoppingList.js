import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ShoppingListItem from './ShoppingListItem'

const ShoppingListApp = ({title}) => {
  // TODO : define a state to store the items list
  const [items, setItems] = useState([])
  

  useEffect(() => {
    axios
      .get('./items.json')
      .then(resp => resp.data)
      .then(data => {
        // TODO: Store the items in the state
        setItems(data)
      })
  }, [])

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map(item => (
          <ShoppingListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingListApp


