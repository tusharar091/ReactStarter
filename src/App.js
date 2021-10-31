import './App.css';
import GroceryList from './components/GroceryList';
function App() {
  const items = ["tomato", "potato"];
  return (
    <div className="App">
      <header className="App-header">
        To Do Items
        <GroceryList items={items} />;
      </header>
    </div>
  );
}

export default App;
