import React, {useState} from 'react';

function MyComponent(){
    
    const [foods, setFoods] = useState(["Apple","Orange","Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value=""; // reset after write
       
        //update , nu folosim acelasi name ca cel curent : foods -> f
        setFoods(f => [...f, newFood]); // punem ...foods ca sa nu se stearga array-ul (["Apple","Orange","Banana"]);

    }


    function handleRemoveFood(index){
        //cand dau click elimin
        setFoods(foods.filter((_, i) => i !== index)); //_ ->ignorare
    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );

}

export default MyComponent