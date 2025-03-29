import ComponentC from "./ComponentC";
function ComponentB(props){

    return(
        <div className="box">
            <h3>ComponentB</h3>
            <ComponentC user={props.user}/>
        </div>
        
    )
}

export default ComponentB;