import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

function AddItem({ listItem, setListItem, submit }) {
  const inputRef = useRef();
  return (
    <form
      className='addItem'
      onSubmit={submit}>
      <label htmlFor='additem'>Add Item</label>
      <input
        ref={inputRef}
        autoFocus
        type='text'
        id='addItem'
        placeholder='Add Item'
        value={listItem}
        onChange={e => setListItem(e.target.value)}
        required
      />
      <button
        onClick={() => inputRef.current.focus()}
        type='submit'
        aria-label='Add Item'>
        <FaPlus />
      </button>
    </form>
  );
}

export default AddItem;
