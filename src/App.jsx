import { Route, Routes } from "react-router-dom";
import EmailVerifyPage from "./pages/EmailVerifyPage/EmailVerifyPage";
import MainPage from "./pages/MainPage/MainPage";
import OneAlphabetPage from "./pages/OneAlphabetPage/OneAlphabetPage";

import OneAuction from "./pages/OneAuction/OneAuction";
import ProductId from "./pages/Products/ProductId";
import Products from "./pages/Products/Products";


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='user/:id/verify/:token' element={<EmailVerifyPage />} />
        <Route path='/products' element={<Products />} />
        <Route path="/oneAuction/:id" element={<OneAuction />} />
        <Route path="/category/:id" element={<ProductId />} />
        <Route path="/vremenno" element={<OneAlphabetPage />} />
      </Routes>
    </>
  );
}

export default App;
