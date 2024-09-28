import React from 'react'
import Item from './Item'
function ItemList({ items, check, del }) {
  return (
    <ul>
      {items.map(i => (
        <Item
          key={i.id}
          i={i}
          check={check}
          del={del}
        />
      ))}
    </ul>
  )
}

export default ItemList
