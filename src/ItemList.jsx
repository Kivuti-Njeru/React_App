import React from 'react'
import Item from './Item'
function ItemList({ items, check, del }) {
  return (
    <ul>
      {items.map(item => (
        <Item
          key={item.id}
          i={item}
          check={check}
          del={del}
        />
      ))}
    </ul>
  )
}

export default ItemList
