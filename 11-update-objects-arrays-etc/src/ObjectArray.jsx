import React,{ useState } from "react"

function ObjectArray(){

    const [cars,setCars] = useState([])
    const [carYear,setCarYear] = useState("")
    const [carModel, setCarModel] = useState("")
    const [carMake, setCarMake] = useState("")

    const handleAddCar = () =>{
        const newCar = {make: carMake, model: carModel, year: carYear};
        setCars(cars => [...cars, newCar]);

        setCarMake("")
        setCarModel("")
        setCarYear("")
    }

    const handleCarRemove = (index) =>{
        setCars(cars => cars.filter((_,i) => i !== index))
    }

    const handleCarYear = (event) =>{
        setCarYear(event.target.value);
    }
    
    const handleCarModel = (event) =>{
        setCarModel(event.target.value);        
    }
    
    const handleCarMake = (event) =>{
        setCarMake(event.target.value);

    }


    return(
        <>
            <h2>Car Objects</h2>
            <ul>
            {cars.map((car,index) => 
                <li key={index} onClick={() => handleCarRemove(index)}>
                    {car.make} {car.model} {car.year}
                </li>
            )}
            </ul>

            Make: <input type="text" value={carMake} onChange={handleCarMake}/><br />
            Model: <input type="text" value={carModel} onChange={handleCarModel}/><br />
            Year: <input type="number" value={carYear} onChange={handleCarYear}/><br />
            <button onClick={handleAddCar}>Add Car</button>
        </>
    )
}

export default ObjectArray