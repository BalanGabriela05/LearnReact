// useState()= Re-renders the component when the state value changes

import MyComponent from "./MyComponent"

// useRef() ="use Reference" Does not cause re-rebders when its value changes.
//        when you want a component to "remember" some infomation,
//       but ypu don t want that infomation to trigger new renders.

//   1. acccessing/intercating with DOM elements
//   2. handling Focus, Animations and Transitions
//   3. manging timers and intervals.

function App() {
 
  return (
    <MyComponent/>
  )
}

export default App
