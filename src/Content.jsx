import React from 'react'
import ItemList from './ItemList'

const Content = ({ items, check, del }) => {
  return (
    <>
      <article className='todoList'>
        {items.length ? (
          <ItemList
            items={items}
            check={check}
            del={del}
          />
        ) : (
          <p style={{ marginTop: '1rem', textTransform: 'Capitalize' }}>
            Your list is empty
          </p>
        )}
      </article>
    </>
  )
}

export default Content
