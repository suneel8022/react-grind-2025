function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return <h2>Welcome! {props.userName}</h2>
    // }

    //     return <h2>Please Login to continue</h2>

            // user ternary
    // return(props.isLoggedIn ? <h2>Welcome! {props.userName}</h2> 
    //                         :<h2>Please login to continue!!</h2>);


            // store the elements easily
    const welcomeMsg =  <h2 className="welcome-message"
                            >Welcome! {props.userName}</h2>

    const loginPrompt = <h2 className="login-prompt"
                            >Please login to continue!!</h2>

    return(props.isLoggedIn ? welcomeMsg : loginPrompt);


}

export default UserGreeting