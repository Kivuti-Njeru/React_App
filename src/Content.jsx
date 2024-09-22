import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'item 1',
    },
    {
      id: 2,
      checked: false,
      item: 'item 2',
    },
    {
      id: 3,
      checked: false,
      item: 'item 3',
    },
  ])

  const check = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setItems(listItems)
    localStorage.setItem('ITEMS1', JSON.stringify(listItems))
  }

  const del = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem('ITEMS1', JSON.stringify(listItems))
  }

  return (
    <>
      <main>
        {items.length ? (
          <ul>
            {items.map((i) => (
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
            ))}
          </ul>
        ) : (
          <p style={{ marginTop: '1rem', textTransform: 'Capitalize' }}>
            Your list is empty
          </p>
        )}
      </main>
    </>
  )
}

export default Content
