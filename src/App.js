import { useState } from 'react';
import './App.css';
import GroceryList from './components/GroceryList';
function App() {
  const [items, setItems] = useState(["tomato", "potato"]);
  return (
    <div className="App">
      <header className="App-header">
        To Do Items
        <GroceryList items={items} />;
      </header>
    </div>
  );
  const addItem = (item) => {
    setItems(...items, item);
  }
}

export default App;
