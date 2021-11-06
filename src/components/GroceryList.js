import GroceryItem from "./GroceryItem";
const GroceryList = ({ items, removeItem }) => {
    console.log(items);
    return (
        <div className="grid-container">
            <ol>
                {
                    items.map(item => {
                        return (<li>
                            <GroceryItem key={item} item={item} removeItem={removeItem} />
                        </li>)
                    })
                }
            </ol>
        </div>
    )
}
export default GroceryList