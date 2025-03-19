import React,{ useEffect, useState } from "react";

function MyWindow(){

    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");
        
        return () => {
        window.removeEventListener("resize", handleResize);
        console.log("EVENT LISTENER REMOVED");
        }
    },[]);


    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    },[width,height]);






    return (
        <>
            <p>Window Height: {height}px</p>
            <p>Window Weight: {width}px</p>
        </>
    );
}

export default MyWindow;