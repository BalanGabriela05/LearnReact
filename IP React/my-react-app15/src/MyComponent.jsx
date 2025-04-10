
//useEffect() = react hook taht tells React DO SOME CODE WHEN (pick one):
//  this component re-renders
//  this component mounts
//  the state of a value

//useEffect(function, [dependencies])

//1. useEffect(() => {}) // runs after every re-render
//2. useEffect(() => {}, []) // runs only on nount
//3. useEffect (() => {}, [value]) //runs on mount + when value changes

//USES
//1- event listeners
//2- DOM manipulation
//3- subscriptions (real-time updates)
//4- fetching data from an API
//5- clean up when a component unmounts (mount -> adding a component on a DOM)
//-----------------------------------------------------------

//EXEMPLU I
// import React, {useState,useEffect} from 'react'; //react library

// function MyComponent(){

//    const [count, setCount] = useState(0);
//    const[color, setColor] = useState("green");
// //fara useEffect codul va re-render every time
//    useEffect(() => {
//     //update title 
//     document.title = `Count: ${count} ${color}`;
//    }, [count,color] /* will update just when count/color changes*//*[] just onces*/);


//    function addCount(){
//     setCount(c => c + 1);
//    }

//    function substractCount(){
//     setCount(c => c - 1);
//    }

//    function changeColor(){
//     setColor(c => c ==="green" ? "red" : "green");
//    }
//    return(<>
//        <p style={{color: color}}>Count: {count}</p>
//        <button onClick={addCount}>Add</button>
//        <button onClick={substractCount}>Substract</button><br/>
//        <button onClick={changeColor}>Change color</button>
//    </>);

// }
// export default MyComponent


//EXEMPLU II
import React, {useState,useEffect} from 'react'; //react library

function MyComponent(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    //ca sa nu fie 10000 de event listeners
    useEffect(() => {
        window.addEventListener("resize",handleResize);
        console.log("EVENT LISTENER ADDED");

        return () =>{
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER ADDED REMOVED");
        }
    }, []);

    useEffect(() =>{
        document.title = `Size: ${width} * ${height}`;
    },[width,height]);

  

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);

    }

   return(<>
      <p>Window Width: {width}px</p>
      <p>Window height: {height}px</p>
   </>);

}
export default MyComponent
