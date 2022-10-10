import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import EmailVerifyPage from "./pages/EmailVerifyPage/EmailVerifyPage";
import MainPage from "./pages/MainPage/MainPage";
import UserProfile from "./pages/UserProfile/UserProfile";


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='user/:id/verify/:token' element={<EmailVerifyPage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/userpage' element={<UserProfile/>}/>
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
