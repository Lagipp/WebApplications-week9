import MyList from "./MyList";
import useState from 'react';

const MyContainer = () => {
    return (
        <div>
            <MyList 
                header="this is a header"
                items={[
                    { id: "1", text: "list item 1" },
                    { id: "2", text: "list item 2" },
                ]}
            />
        </div>
    )
}

export default MyContainer;