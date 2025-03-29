import ComponentD from "./ComponentD";
function ComponentC(props){

    return(
        <div className="box">
            <h3>ComponentC</h3>
            <ComponentD user={props.user}/>
        </div>
        
    )
}

export default ComponentC;