import { useEffect, useState } from 'react'
import getProducts from '../../helpers/fetchApi'

import Cart from '../controllers/Cart'
import './Bestproduct.css'
import ItemList from './ItemList/ItemList'



const Bestproduct = () => {  
  const [products, setProducts] = useState([]);   

  useEffect(() => {   
    getProducts
    .then((response) => setProducts(response))
    .catch(error => console.log('error', error))
    .finally(()=>console.log("Finalizó el llamado a la API"));
  },[]);  

  return ( 
    <>
      <div className="videos">
          <div className='breadcrumbP'></div>
              <div className='breadcrumbPP'>
                  <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                              Inicio
                          </li>
                          <li className="breadcrumb-item">
                              Rating
                          </li>
                      </ol>
                  </nav>
              </div>
        
        <hr></hr>

        <div className="videos__container">
            
            <ItemList products={products}/>

        </div>

      </div>
    </>
  )


}

export default Bestproduct