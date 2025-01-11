function ProfilePicture() {
    const imageUrl = './src/assets/marvel_logo.jpg';

    const handleClick = () => console.log("Ouch");
    

    return (
        <img onClick={handleClick} src={imageUrl} style={{width: '100%'}}/>
    );
}


export default ProfilePicture