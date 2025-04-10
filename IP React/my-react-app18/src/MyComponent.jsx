import React, {useState,useEffect,useRef} from "react";
import Button from "../../my-react-app6/src/Button";

//by avoiding re-rendering when its not needed its going to make your component more efficient

function MyComponent(){

    // let [number, setNumber] = useState(0);
    // folosim useRef in loc
    // const ref = useRef(0);
    // console.log(ref);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

useEffect(( )=> {
    console.log("COMPONENT RENDERED");
    // console.log(inputRef);
});

function handleClick1(){
    // setNumber(n => n+1);
    // ref.current = ref.current++;
    // console.log(ref.current);
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor="yellow";
    inputRef2.current.style.backgroundColor="";
    inputRef3.current.style.backgroundColor="";
}
function handleClick2(){
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor="";
    inputRef2.current.style.backgroundColor="yellow";
    inputRef3.current.style.backgroundColor="";
}
function handleClick3(){
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor="";
    inputRef2.current.style.backgroundColor="";
    inputRef3.current.style.backgroundColor="yellow";
}

    return(<div>
        <button onClick={handleClick1}>
        Click me 1!
    </button>
    <input ref={inputRef1}/>
    
    <button onClick={handleClick2}>
        Click me 2!
    </button>
    <input ref={inputRef2}/>

    <button onClick={handleClick3}>
        Click me 3!
    </button>
    <input ref={inputRef3}/>
        </div>);
}
export default MyComponent;
//remove STRICTMODE form main so the component renders once on mount
//useRef doesnt cause a component to render when its value changes