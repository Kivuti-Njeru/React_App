import React from 'react';
import { FaPlus } from 'react-icons/fa';

function AddItem({ listItem, setListItem, submit }) {
  return (
    <form className='addItem'>
      <label htmlFor='additem'>Add Item</label>
      <input
        autoFocus
        type='text'
        id='addItem'
        placeholder='Add Item'
        value={listItem}
        onChange={e => setListItem(e.target.value)}
        required
      />
      <button
        type='submit'
        onClick={submit}
        aria-label='Add Item'>
        <FaPlus />
      </button>
    </form>
  );
}

export default AddItem;
