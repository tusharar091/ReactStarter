import { useEffect, useState } from 'react';
import './App.css';
import GroceryList from './components/GroceryList';
import GroceryForm from './components/GroceryForm';
function App() {
  const savedItems = JSON.parse(localStorage.getItem('items'));
  const savedQuantity = JSON.parse(localStorage.getItem("quantity"));
  const [items, setItems] = useState(savedItems || []);
  const [quantity, setQuantity] = useState(savedQuantity || []);

  const addItem = (item) => {
    if (items.includes(item)) {
      updateQuantity(null, item, true);
      return;
    }
    setItems([...items, item]);
    initQuantity();
  }
  const initQuantity = () => {
    setQuantity([...quantity, 1]);
  }
  const removeItem = (itemToBeDeleted) => {
    setItems(items.filter(item => item !== itemToBeDeleted));
    removeQuantity(itemToBeDeleted);
  }
  const removeQuantity = itemToBeDeleted => {
    setQuantity(quantity.filter((quant, index) => index !== items.indexOf(itemToBeDeleted)));
  }
  const updateQuantity = (value, item, increment = false) => {
    const index = items.indexOf(item);
    quantity[index] = increment ? quantity[index] + 1 : value;
    setQuantity([...quantity]);
  }
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items])
  useEffect(() => {
    localStorage.setItem('quantity', JSON.stringify(quantity));
  }, [quantity])
  useEffect(() => {
    const quantity = JSON.parse(localStorage.getItem("quantity"));
    if (quantity) {
      setQuantity(quantity)
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <GroceryList items={items} quantity={quantity} updateQuantity={updateQuantity} removeItem={removeItem} />
        <GroceryForm addItem={addItem} />
        Grocery Items
      </header>
    </div>
  );
}

export default App;
