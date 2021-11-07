const GroceryItem = ({ item, quantity, updateQuantity, removeItem }) => {
    const update = (value) => {
        updateQuantity(Number(value), item);
    }
    return (
        <div className="list-item-container">
            <span>{item}</span>
            <span>
                <input type="number"
                    id={`quantity_${item}`}
                    name="quantity"
                    min="1"
                    className="quantity-selector"
                    value={quantity || 1}
                    onChange={(e) => { update(e.target.value) }}
                />
                <button className="redButton" onClick={() => removeItem(item)} > Delete</button>
            </span>
        </div >
    );
}
export default GroceryItem;