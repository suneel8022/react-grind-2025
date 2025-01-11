function ProfilePicture() {
    const imageUrl = './src/assets/marvel_logo.jpg';

    // const handleClick = () => console.log("Ouch");

                // the img will vanish the moment u click it :)
    const handleClick = (e) => e.target.style.display="none";
    

    return (
        <img onClick={(e) => handleClick(e)} src={imageUrl} style={{width: '100%'}}/>
    );
}


export default ProfilePicture