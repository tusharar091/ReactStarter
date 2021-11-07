import GroceryItem from "./GroceryItem";
const GroceryList = ({ items, quantity, updateQuantity, removeItem }) => {
    return (
        <div className="grid-container">
            <ol>
                {
                    items.map((item, index) => {
                        return (<li key={item}>
                            <GroceryItem key={item} item={item} quantity={quantity[index]} updateQuantity={updateQuantity} removeItem={removeItem} />
                        </li>)
                    })
                }
            </ol>
        </div>
    )
}
export default GroceryList