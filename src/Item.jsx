import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

function Item({ item, check, del }) {
  return (
    <li className='item'>
      <input
        id='item'
        type='checkbox'
        onChange={() => check(item.id)}
        checked={item.checked}
      />
      <label
        style={
          item.checked
            ? {
                textDecoration: 'line-through',
                opacity: 0.3,
              }
            : null
        }
        onDoubleClick={() => check(item.id)}>
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => del(item.id)}
        role='button'
        tabIndex={0}
      />
    </li>
  )
}

export default Item
