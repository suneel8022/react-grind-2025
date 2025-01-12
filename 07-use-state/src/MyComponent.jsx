import React,{useState} from "react";

function MyComponent(){

    const[name, setName] = useState("Guest")
    const [age,setAge] = useState(0)

    const updateName = () =>{
        setName("Suneel")
    }

    const updateAge = () =>{
        setAge(25)
    }

    return(
        <>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={updateAge}>Set Age</button>
        </>
    );
}

export default MyComponent