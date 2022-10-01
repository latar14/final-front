import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Carousel from './components/Carousel/Carousel.jsx'
import Main from './components/Main/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
        <App />
         <Carousel/>
         <Main/>
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);