import { Route, Routes } from "react-router-dom";
import EmailVerifyPage from "./pages/EmailVerifyPage/EmailVerifyPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='user/:id/verify/:token' element={<EmailVerifyPage/>}/>
      </Routes>
    </>
  );
}

export default App;
