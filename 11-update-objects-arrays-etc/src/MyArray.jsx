import React,{ useState } from "react"

function MyArray(){

    const [fruits, setFruits] = useState(["Apple","Banana","Orange"])

    const handleAddFruits = () =>{
        const newFruit = document.getElementById("addFruit").value;
        document.getElementById("addFruit").value = "";
        
        setFruits(fruits => [...fruits,newFruit]);
    }   


    const handleRemoveFruit = (index) =>{
        setFruits(fruits.filter((_,i) => i !== index));
        // if we don't use fruit in (fruit,i) can use _ instead 
    }


return(
    <>
    <h2>List of Fruits</h2>

    <ul>
        {fruits.map((fruit,index) => 
        <li key={index} onClick={() => handleRemoveFruit(index)}>{fruit}</li>
        )}
    </ul>

    <input type="text" id="addFruit" placeholder="Enter Fruit Name" />
    <button onClick={handleAddFruits}>Add Fruit</button>
    </>
)
}

export default MyArray