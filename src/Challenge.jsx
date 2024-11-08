import React, { useState } from 'react'

function Challenge() {
  const [color, setColor] = useState('')
  function submit(e) {
    e.preventDefault()
    setColor('')
  }
  return (
    <>
      <form
        onSubmit={submit}
        className='challenge'>
        <div
          className='box'
          style={{ backgroundColor: color }}>
          <p>{color ? color : 'Empty value'}</p>
        </div>
        <input
          autoFocus
          type='text'
          placeholder='Enter Color'
          onChange={e => setColor(e.target.value)}
        />
      </form>
    </>
  )
}

export default Challenge
