import GroceryItem from "./GroceryItem";
const GroceryList = ({ items, removeItem }) => {
    return (
        <div className="items-list">
            <ul>
                {
                    items.map((item) => {
                        <li>
                            <GroceryItem key={item} item={item} removeItem={removeItem} />
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default GroceryList