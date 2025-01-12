import React,{useState} from "react";

function MyComponent(){

    const [name, setName] = useState("Guest")
    const [age,setAge] = useState(0)
    const [isEmployed,setIsEmployed] = useState(false)

    const updateName = () =>{
        setName("Suneel")
    }

    const updateAge = () =>{
        // setAge(25)
        setAge(age + 1)
    }

    const updateStatus = ()=>{
        setIsEmployed(!isEmployed)
    }

    return(
        <>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={updateAge}>Set Age</button>

        <p>Is Employes: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={updateStatus}>Toggle Status</button>
        </>

    );
}

export default MyComponent