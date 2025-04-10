import ComponentD from "./ComponentD.jsx";

/*1.*/import React, {useContext} from 'react';
import { userContext } from './ComponentA.jsx';

function ComponentC(/*props*/){
    const user = useContext(userContext);

    return(
        <div className="box">
            <h1>ComponentC</h1>
            {/* <ComponentD user={props.user}/> */}
           <h2>{`Hello again ${user}`}</h2>
            <ComponentD/>

        </div>
    );
}

export default ComponentC