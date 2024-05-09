import './App.css'
 
//HEADER
import Logomenu from "./components/header/Logomenu/Logomenu";
import Search from "./components/header/Search/Search";
import Iconsheader from "./components/header/Icons/Icons";
 
//MENÚ
import MenuPrincipal from "./components/menu/Principal/Principal";
import Categorias from "./components/menu/Categorias/Categorias";

//CART

//VIEWS
import Bestproduct from './components/views/Bestproduct';
import Productsdetails from './components/views/productDetails/Productsdetails';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

//ROUTES
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="header">
        
        <Logomenu />

        <Search />

        <Iconsheader />

      </div>

      <div className="mainBody">

        <div className="sidebar">
        
          <MenuPrincipal />
          <hr />

          <Categorias />
          <hr />
           
        </div>
        <Routes>

          <Route path="/" element={<Bestproduct />}/>
          <Route path="/products-details/2" element={<Productsdetails />}/>
        </Routes>
      </div>

     

    </BrowserRouter>
  )
}

export default App
