import './ItemList.css'

import { Link } from "react-router-dom"

const ItemList = ({products}) => {
  
  return (
    <>
       { 
            products.map((products)=>{  
              
            return (
              
              <div className="video" key={products.id}> 

                <div className="video__thumbnail"> 
                    <video width="100%" height="170px" controls>
                        <source src={products.video} type="video/mp4" />
                        Your browser does not support the video tag.. 
                    </video>
                </div>
                
                <div className="video__details">
                  <div className="title">
                      <nav aria-label="add to cart">
                          <ul className="pagination">
                          <li className="page-item count">
                            <Link to="/products-details/"><button className="page-link"><i className="bi bi-eye-fill"></i></button></Link>
                          </li>
                              <li className="page-item" aria-current="page">
                              <button className="page-link" href="#"><i className="bi bi-cart-plus-fill color-cart"></i></button>
                              </li>
                              <li className="page-item count disabled">
                              <button className="page-link">{products.id}</button>
                              </li>
                              <li className="page-item">
                              <button className="page-link" href="#"><i className="bi bi-cart-dash-fill color-cart"></i></button>
                              </li>
                              <li className="page-item btnadd">
                              <button className="page-link" href="#"><i className="bi bi-cart-check color-cart "></i> </button>
                              </li>
                          </ul>
                      </nav>

                  </div>

                </div>

              </div>  

              )//Return

            }) 
        }
    </>
  )
}

export default ItemList