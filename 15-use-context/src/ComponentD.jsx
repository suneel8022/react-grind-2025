import React,{useContext} from 'react'
import { UserContext } from './ComponentA';

function ComponentD(){

    const value = useContext(UserContext)
    return(
        <div className="box">
            <h3>ComponentD</h3>
            <h4>{`Bye ${value}`}</h4>
        </div>
        
    )
}

export default ComponentD;