const GroceryItem = ({ item, removeItem }) => {
    return (
        <div>
            <span>{item}</span>
            <button className="redButton" onClick={() => removeItem(item)} > Delete</button>
        </div >
    );
}
export default GroceryItem;