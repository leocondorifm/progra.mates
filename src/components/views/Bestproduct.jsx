import { useEffect, useState } from 'react'
import getProducts from '../../helpers/fetchApi'
import { useParams } from 'react-router-dom'

import Cart from '../controllers/Cart'
import './Bestproduct.css'
import ItemList from './ItemList/ItemList'


const Bestproduct = () => {  
  const [products, setProducts] = useState([]);   
  const { idCategory } = useParams()  

  useEffect(() => {   
    getProducts
    .then((response) => {

      if(idCategory){

        const NewProduct = response.filter((product)=> product.category === idCategory)
        
          setProducts(NewProduct)
      }else{
          setProducts(response)
      }
    })
    .catch(error => console.log('error', error))
    .finally(()=>console.log("Finalizó el llamado a la API principal..."));
  },[idCategory]);  

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