function Button() {

    let count=0;

        const handleClick = () => console.log(`Count is: ${count++}`);
        

    return (
        <button onClick={handleClick}>Click me</button>
    );

}

export default Button