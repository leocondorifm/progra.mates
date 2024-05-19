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
import Detalleproducto from './components/views/Detalleproducto/Detalleproducto';
import Detalleproductodos from './components/views/Detallerproductodos/Detalleproductodos';
import Ofertas from './components/ofertas/Ofertas';
import Footer from './components/footer/Footer';
import Checkout from './components/ckeckout/Checkout';
import Favorites from './components/favorites/Favorites';
import Profile from './components/profile/Profile';

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
          <Route path='/ofertas/' element={<Ofertas/>} />
          <Route path='/favoritos/' element={<Favorites/>} />
          <Route path='/profile/' element={<Profile />} />
          <Route path='/checkout/' element={<Checkout/>} />

          
          <Route path="/products-details/:idProduct" element={<Detalleproductodos />}/>
        </Routes>
        
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
