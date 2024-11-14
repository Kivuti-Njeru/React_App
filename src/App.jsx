import AddItem from './AddItem'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Search from './Search'
import './index.css'
import { useEffect, useState } from 'react'

function App() {
  const API_URL = 'http://localhost:3500/items'

  const [items, setItems] = useState([])
  const [listItem, setListItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchErr, setFetchErr] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(API_URL)

        if (!res.ok) throw Error('Did not receive expected data')

        const listItems = await res.json()
        setItems(listItems)
        setFetchErr(null)
      } catch (error) {
        setFetchErr(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    setTimeout(() => {
      ;(async () => await fetchItems())()
    }, 2000)
  }, [])

  const addItem = item => {
    const id = crypto.randomUUID()
    const newItem = { id, checked: false, item }
    const listItems = [...items, newItem]
    setItems(listItems)
  }

  const submit = e => {
    e.preventDefault()
    if (!listItem) return
    addItem(listItem)
    setListItem('')
  }

  const check = id => {
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    )
    setItems(listItems)
  }

  const del = id => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems)
  }
  return (
    <>
      <section className='app'>
        <Header title='React App' />
        <Search
          search={search}
          setSearch={setSearch}
        />
        <AddItem
          listItem={listItem}
          setListItem={setListItem}
          submit={submit}
        />
        <div style={{ flex: 1 }}>
          {isLoading && <p style={{ color: '#666' }}>Loading items...</p>}
          {fetchErr && (
            <p style={{ color: '#cc0000' }}>{`Error: ${fetchErr}`}</p>
          )}
          {!fetchErr && !isLoading && (
            <Content
              items={items.filter(item =>
                item.item.toLowerCase().includes(search.toLowerCase()),
              )}
              check={check}
              del={del}
            />
          )}
        </div>
        <Footer length={items.length} />
      </section>
    </>
  )
}

export default App
