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
                              <button className="page-link"><Link to="/products-details/2"><i className="bi bi-eye-fill"></i></Link></button>
                          </li>
                              <li className="page-item" aria-current="page">
                              <button className="page-link" href="#"><i className="bi bi-cart-plus-fill color-cart"></i></button>
                              </li>
                              <li className="page-item count disabled">
                              <button className="page-link">1</button>
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