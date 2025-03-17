import React, {useState,useEffect}from 'react';

function MyCount(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    const addCount = () => {
        setCount(count => count+1);
    }

    const subtractCount = () => {
        setCount(count => count-1)
    }

    const colorChange = () => {
        setColor(color => color === "green" ? "red" : "green")
    }

            // runs after every re-render
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // });

            // runs only on mount
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // },[]);

            // runs on mount + when value changes
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;


    },[count,color]); // whenever these value changes perform the code



    return (
        <>
            <p style={{color: color}}>Count: {count} </p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br />
            <button onClick={colorChange}>Change Color</button>
        </>
    )
}

export default MyCount;