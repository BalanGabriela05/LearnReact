
//updater function = a function passed as an argument to setState() usually
//              ex. setYear(y => y + 1)
//  allow for safe updates based on the previous state 
//  used with multiple state update and asynchronous functions
//  good practice to use updater functions


import Counter from "./Counter.jsx"

function App() {


  return (
    <Counter/>
  )
}

export default App
