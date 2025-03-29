import React,{useState,createContext} from 'react'
import ComponentB from "./ComponentB";

export const UserContext = createContext()

function ComponentA(){
    const [user,setUser] = useState("Suneel");

    return(
        <div className="box">
            <h3>ComponentA</h3>
            <h4>{`Hi ${user}`}</h4>
            <UserContext.Provider value={user}>
                <ComponentB/>
            </UserContext.Provider>
        </div>
        
    );
}

export default ComponentA;