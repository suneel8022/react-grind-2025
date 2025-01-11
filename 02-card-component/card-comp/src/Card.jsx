import proPic from './assets/marvel_logo.jpg'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={proPic} alt="pro pic" />
            <h2 className="card-title">Nice Code</h2>
            <p className="card-text">I play Video Games</p>
        </div>
    );
}

export default Card