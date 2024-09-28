import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import './index.css'
import { useState } from 'react'

function App() {
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
  const check = id => {
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setItems(listItems)
    localStorage.setItem('ITEMS1', JSON.stringify(listItems))
  }

  const del = id => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems)
    localStorage.setItem('ITEMS1', JSON.stringify(listItems))
  }
  return (
    <>
      <section className='app'>
        <Header title='React App' />
        <Content
          items={items}
          check={check}
          del={del}
        />
        <Footer length={items.length} />
      </section>
    </>
  )
}

export default App
