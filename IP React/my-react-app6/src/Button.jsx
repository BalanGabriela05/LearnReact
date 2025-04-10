
function Button(){

// const handleClick = () => console.log("OUCH");

// const handleClick2 = (name) => console.log(`${name} stop clicking me`);

// let count = 0;
// const handleClick = (name) => {
//     if(count<3){
//         count++;
//         console.log(`${name} you clicked me ${count} time/s`);
//     }
//     else{console.log(`${name} stop clicking me!`);}
// };

// //EVENTS : da infomatii in console
// const handleClick = (e) => console.log(e);
//dupa ce dau click se schimba in OUCH
const handleClick = (e) => e.target.textContent = "OUCH!";


 return(
    // <button onClick={handleClick}>Click me</button>
  //  <button onClick={() => handleClick2("Bro")}>Click me</button>
 
//   <button onClick={() => handleClick("Bro")}>Click me</button>

//EVENTS
//<button onClick={(e) => handleClick(e)}>Click me</button>
<button onDoubleClick={(e) => handleClick(e)}>Click me</button>



);
}
export default Button