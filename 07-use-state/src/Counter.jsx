import React,{useState} from "react"


function Counter(){

    const [count, setCount] = useState(0)

    const increment = () => {
        console.log(count);        
        setCount(count + 1)
    }


    return (
        <>
            <button onClick={increment}>Count is: {count}</button>
        </>
    )

}

export default Counter