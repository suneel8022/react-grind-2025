import React,{useState} from "react"

function ColorPicker(){

    const [color,setColor] = useState()

    const handleColorChange = (event) => {
        setColor(event.target.value)
    }

    return(
        <div className="color-picker-container">
        <h2>Color Picker</h2>
        <div className="color-display" style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
        </div>
        <label>Choose a color: </label>
        <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}

export default ColorPicker