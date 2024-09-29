import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import './index.css';
import { useState } from 'react';

function App() {
  const [listItem, setListItem] = useState('');
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('ITEMS1'))
  );

  const setAndSave = data => {
    setItems(data);
    localStorage.setItem('ITEMS1', JSON.stringify(data));
  };

  const addItem = item => {
    const id = crypto.randomUUID();
    const newItem = { id, checked: false, item };
    const listItems = [...items, newItem];
    setAndSave(listItems);
  };

  const submit = e => {
    e.preventDefault();
    if (!listItem) return;

    addItem(listItem);
    setListItem('');
  };

  const check = id => {
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSave(listItems);
  };

  const del = id => {
    const listItems = items.filter(item => item.id !== id);
    setAndSave(listItems);
  };
  return (
    <>
      <section className='app'>
        <Header title='React App' />
        <AddItem
          listItem={listItem}
          setListItem={setListItem}
          submit={submit}
        />
        <Content
          items={items}
          check={check}
          del={del}
        />
        <Footer length={items.length} />
      </section>
    </>
  );
}

export default App;
