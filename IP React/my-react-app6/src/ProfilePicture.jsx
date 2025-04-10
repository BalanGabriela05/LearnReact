

function ProfilePicture(){
   const imageURL='./src/assets/iconheart.png';

//    const handleClick = () => console.log("OUCH!");

//dispare cand dau click
const handleClick = (e) => e.target.style.display = "none";


   return(<img onClick={(e) => handleClick(e)} src={imageURL}></img>);
}
export default ProfilePicture