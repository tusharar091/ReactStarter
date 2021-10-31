import Item from "./GroceryItem";
const GroceryList = ({ items }) => {
    return (
        <div className="items-list">
            <ul>
                {
                    items.map((item) => {
                        <li>
                            <Item key={item} item={item} />
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default GroceryList