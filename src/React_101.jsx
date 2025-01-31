import React, { useState } from 'react'

const React_101 = () => {
  const [name, setName] = useState('World')
  const changeName = () => {
    const names = ['Alexander', 'Kefini', 'Jacob']
    const num = Math.floor(Math.random() * names.length)
    setName(names[num])
  }
  return (
    <>
      <article className='react_101'>
        <p>Hi {name}</p>
        <button onClick={changeName}>click Me</button>
      </article>
    </>
  )
}

export default React_101
