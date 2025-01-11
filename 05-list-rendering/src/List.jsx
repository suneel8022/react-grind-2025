function List(){

    const fruits = ["orange","apple","banana","grapes","papaya"]


    fruits.sort();
    const listItems = fruits.map(fruit => <li>{fruit}</li>);

    return(<ol>{listItems}</ol>);   
}

export default List