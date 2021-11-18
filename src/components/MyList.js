import useState from 'react';

const MyList = (props) => {
    return (
        <div>
            <h2> { props.header } </h2>  
            <ol>
                { props.items.map((element) => 
                    <li key={element.id}> { element.text } </li>
                )} 
            </ol>
        </div>
    )
}

export default MyList;