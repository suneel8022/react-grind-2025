import React,{useState} from "react"


function Counter(){

    const [count, setCount] = useState(0)

    const increment = () => {
        console.log(count);
        
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () =>{
        setCount(0)
    }

    return (
        <>
            <p>Count is: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )

}

export default Counter