

/*1.*/import React, {useContext} from 'react';
import { userContext } from './ComponentA.jsx';

function ComponentD(/*props*/){


    const user = useContext(userContext);

    return(
        <div className="box">
            <h1>ComponentD</h1>
            {/* <h2>{`Bye ${props.user}`}</h2> */}
            <h2>{`Bye ${user}`}</h2>
        </div>
    );
}

export default ComponentD