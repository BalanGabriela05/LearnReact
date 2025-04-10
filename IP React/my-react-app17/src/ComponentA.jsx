import Raect, { useState, createContext } from "react";
import ComponentB from "./ComponentB.jsx";

/*2.*/export const userContext = createContext();

function ComponentA(){

const [user, setUser] = useState("Gabriela");

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            {/* 3. */}
            <userContext.Provider value={user}>
            <ComponentB user={user}/>
            </userContext.Provider>

         

        </div>
    );
}
//Component A is a PROVIDER component
//Component D is a CONSUMER component -> can have more y=than one

export default ComponentA