import AddItem from './AddItem'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Search from './Search'
import './index.css'
import { useEffect, useState } from 'react'

import apiRequest from './apiRequest'

function App() {
  const API_URL = 'http://localhost:3000/items'

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

  const addItem = async item => {
    const id = crypto.randomUUID()
    const newItem = { id, checked: false, item }
    const listItems = [...items, newItem]
    setItems(listItems)
    const postOptions = {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    }
    const res = await apiRequest(API_URL, postOptions)
    if (res) setFetchErr(res)
  }

  const submit = e => {
    e.preventDefault()
    if (!listItem) return
    addItem(listItem)
    setListItem('')
  }

  const check = async id => {
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    )
    setItems(listItems)

    const checkItem = listItems.filter(item => item.id === id)
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ checked: checkItem[0].checked }),
    }
    const reqUrl = `${API_URL}/${id}`
    const res = await apiRequest(reqUrl, updateOptions)
    if (res) setFetchErr(res)
  }

  const del = async id => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems)

    const deleteOptions = { method: 'DELETE' }
    const reqUrl = `${API_URL}/${id}`
    const res = await apiRequest(reqUrl, deleteOptions)
    if (res) setFetchErr(res)
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
