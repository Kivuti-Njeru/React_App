import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

function Item({ i, check, del }) {
  return (
    <li
      className='item'
      key={i.id}>
      <input
        id='item'
        type='checkbox'
        onChange={() => check(i.id)}
        checked={i.checked}
      />
      <label
        style={
          i.checked
            ? {
                textDecoration: 'line-through',
                opacity: 0.3,
              }
            : null
        }
        onDoubleClick={() => check(i.id)}>
        {i.item}
      </label>
      <FaTrashAlt
        onClick={() => del(i.id)}
        role='button'
        tabIndex={0}
      />
    </li>
  )
}

export default Item
