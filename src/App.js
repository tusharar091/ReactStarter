import { useEffect, useState } from 'react';
import './App.css';
import GroceryList from './components/GroceryList';
import GroceryForm from './components/GroceryForm';
function App() {
  const savedItems = JSON.parse(localStorage.getItem('items'));
  const [items, setItems] = useState(savedItems || []);

  const addItem = (item) => {
    setItems(...items, item);
  }
  const removeItem = (itemToBeDeleted) => {
    setItems(items.filter(item => item !== itemToBeDeleted));
  }
  return (
    <div className="App">
      <header className="App-header">
        <GroceryList items={items} removeItem={removeItem} />
        <GroceryForm addItem={addItem} />
        Grocery Items;
      </header>
    </div>
  );
}

export default App;
