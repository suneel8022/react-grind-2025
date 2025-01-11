function List(){

    const fruits = [
        {id:1,name:"orange", calories:95},
        {id:2,name:"apple", calories:55},
        {id:3,name:"banana", calories:75},
        {id:4,name:"grapes", calories:21},
        {id:5,name:"papaya", calories:66}
    ];

            // string sort
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // asc by name
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); // desc by name
            // number sort
    fruits.sort((a,b) => a.calories-b.calories)  // asc by calories
    // fruits.sort((a,b) => b.calories-a.calories)  // desc by calories

                    // filter

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 70)

                        // for normal records display using map
    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //                                                         {fruit.name}
    //                                                         :&nbsp; <b>{fruit.calories}</b></li>);

                    // for filtered records display using map
    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                                            {lowCalFruit.name}
                                                            :&nbsp; <b>{lowCalFruit.calories}</b></li>);

    return(<ol>{listItems}</ol>);   
}

export default List