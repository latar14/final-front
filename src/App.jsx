import { useState } from "react";
import Auth from "./components/Auth/Auth";

function App() {
  
  const [activeAuth, setActiveAuth] = useState(false);
  return (
    <>
    <button onClick={() => setActiveAuth(true)}>Зарегистрироваться</button>
    <Auth activeAuth={activeAuth} setActiveAuth={setActiveAuth}/>
    </>
  );
}

export default App;
