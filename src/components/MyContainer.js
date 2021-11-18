import MyList from "./MyList";
import { useState } from 'react';

const MyContainer = () => {

    const [items, setItems] = useState([
        { id: "1", text: "list item 1" },
        { id: "2", text: "list item 2" },
    ]);

    const [textAreaText, setTextAreaText] = useState("");


    const onSubmit = (event) => {
        event.preventDefault();
        
        addListItem({text: textAreaText})

        setTextAreaText("")
    }

    const addListItem = (item) => {
        const id = Math.floor(Math.random() * 102931 + 12301 - 33);
        const newListItem = {id, ...item}
        setItems([...items, newListItem])
    }

    return (
        <div>
            <MyList 
                header="This is a header"
                items={items}
            />
            <form onSubmit={onSubmit}>
            <textarea placeholder="Add text here" onChange={(event) => setTextAreaText(event.target.value)} value={textAreaText}></textarea>
            <br />
            <input className="btn" type="submit" value="Add text"></input>
            </form>
        </div>
    )
}

export default MyContainer;