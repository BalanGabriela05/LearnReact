

// function List(){
// //   const fruits =["apple","orange","banana","coconut","pineapple"];
// //   fruits.sort();//doesn t work with numbers

// // const fruits =[
// // {name: "apple", calories: 95},
// // {name: "orange",calories: 45},
// // {name: "banana",calories: 105},
// // {name: "coconut", calories: 159},
// // {name: "pineapple",calories: 37}];

// const fruits =[
//     {id:1,name: "apple", calories: 95},
//     {id:2,name: "orange",calories: 45},
//     {id:3,name: "banana",calories: 105},
//     {id:4,name: "coconut", calories: 159},
//     {id:5,name: "pineapple",calories: 37}];
//   //fruits.sort((a,b) => a.name.localeCompare(b.name)); // alphabetical
//   //fruits.sort((a,b) => b.name.localeCompare(a.name)); //reverse alphabetical
//   //fruits.sort((a,b) => a.calories-b.calories); // by calories-> numeric
//   //fruits.sort((a,b) => b.calories-a.calories); // by calories->reverse numeric
  
// //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

// //   const listItems = fruits.map(fruit => <li>{fruit}</li>);

// const listItems = fruits.map(fruits => <li key={fruits.id}>
//     {fruits.name}: &nbsp;
//    <b>{fruits.calories}</b></li>);
// // const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
// //                                          {highCalFruit.name}: &nbsp;
// //                                         <b>{highCalFruit.calories}</b></li>);
// // key->for unique id, because exist same name




// //   return(<ul>{listItems}</ul>);
//   return(<ol>{listItems}</ol>);

  

// }
// export default List

//PARTEA 2
import propTypes from 'prop-types'

function List(props){
    
    const category = props.category;
    const itemList = props.items;
    const listItems = itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp;
       <b>{item.calories}</b></li>);
  
      return(<>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
      </>);
    
      
    
    }
    
    List.propTypes={
        category: propTypes.string,
        items: propTypes.arrayOf(propTypes.shape({id: propTypes.number, name: propTypes.string, calories: propTypes.number}))
    }
    List.defaultProps = {
        category: "Category",
        items: [], // daca lipesc items va afisa macar category si restul de dupa
    }
    export default List