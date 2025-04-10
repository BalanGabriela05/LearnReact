import UserGreeting from "./UserGreeting.jsx"

//conditional rendering = allows you to control what gets rendered 
//                      in your app based on certein conditions(show,hide,or change components)

function App() {
  return (
    <>
        <UserGreeting isLoggedIn={true} username="BroCode"/>
    </>
  );
}

export default App
