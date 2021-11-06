import { useState } from "react"

const GroceryForm = ({ addItem }) => {
    const [item, setItem] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(item);
        setItem('');
    }
    return (
        <div>
            <p>Shopping List</p>
            <form onSubmit={handleSubmit}>
                <div className="form-grp">
                    <input className="field"
                        placeholder="Name"
                        name="name"
                        id="name"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                    />
                    <label htmlFor="name" className="label">
                        Item Name
                    </label>
                </div>
                <br />
                <button className="myButton">
                    {" "}
                    Add in Bag
                    <span role="img" aria-label="bag">
                        {" "}
                        🛍️
                    </span>
                </button>
            </form>
        </div>
    )
}
export default GroceryForm