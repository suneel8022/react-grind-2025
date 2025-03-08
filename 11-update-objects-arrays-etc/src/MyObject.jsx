import React,{useState} from "react"

function MyObject(){

    const [car, setCar] = useState({
                                        year: 2024,
                                        make: "Ford",
                                        model: "Mustang"
                                        })


    const handleYearChange = (e) => {
            // use spread operator to include the rem obj key values 
        // setCar({...car,year: e.target.value})
            // use updater functions
        setCar(car => ({...car,year: e.target.value}))
    }

    const handleMakeChange = (e) => {
        // setCar({...car,make: e.target.value})
            // use updater functions
            setCar(car => ({...car,make: e.target.value}))
        }
        
        const handleModelChange = (e) =>{
            // setCar({...car,model: e.target.value})
                // use updater functions
        setCar(car => ({...car,model: e.target.value}))
    }

    return (
        <>
        <p>Your Favourite car is {car.make} {car.model} {car.year}</p>
        <label>Make: </label><input type="text" value={car.make} onChange={handleMakeChange}/> <br />
        <label>Model: </label><input type="text" value={car.model} onChange={handleModelChange}/> <br />
        <label>Year: </label><input type="number" value={car.year} onChange={handleYearChange} />
        </>
    )
}

export default MyObject