import ComponentB from "./ComponentB";
import React,{useState} from 'react'
function ComponentA(){
    const [user,setUser] = useState("Suneel");

    return(
        <div className="box">
            <h3>ComponentA</h3>
            <h4>{`Hi ${user}`}</h4>
            <ComponentB user={user}/>
        </div>
        
    );
}

export default ComponentA;