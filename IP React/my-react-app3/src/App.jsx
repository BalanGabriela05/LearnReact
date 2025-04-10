
//props = read-only properties that are shared between components.
//        A parent component can send data to a child component.
//        <Component key=vaule/>

import Student from "./Student.jsx";

function App() {
  return(
    <>
    {/* daca pun age:"30" -> inspect -> console -> o sa am eroare (good for debug) */}
      <Student name="Spongebob" age={30} isStudent={false}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={23} isStudent={true}/>
      <Student/>
    </>
  );
}

export default App
