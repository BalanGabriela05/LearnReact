import profilePic from './assets/iconheart-rose.png'


function Card(){

    return(
        <div className="card">
             <img className="card-image" src={profilePic} alt="profile picture"></img>
             <h2 className="card-title">Code React</h2>
             <p className="card-text">I code and draw</p>
        </div>
    );
}

export default Card