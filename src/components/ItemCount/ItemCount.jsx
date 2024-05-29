import './ItemCount.css'

import { useState } from "react"
import { Link } from "react-router-dom"

const ItemCount = ({products, handelClick}) => {

    const [count, setCount] = useState(1)

    const sum = () => {if(count<products.stock){setCount(count + 1)}}
    const less = () => {if(count>1){setCount(count -1)}}

  return (
            <>
            <nav className="d-flex" aria-label="add to cart">
                    <ul className="pagination">
                        <li className="page-item" aria-current="page">
                            <button className="page-link" onClick={less}><i class="bi bi-dash-lg color-cart"></i> </button>
                        </li>
                        <li className="page-item count-d disabled">
                            <input className="form-control text-center me-3" style={{height:"38px"}} id="inputQuantity" type="num" defaultValue={count} value={count} />
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={sum}><i class="bi bi-plus-lg color-cart"></i> </button>
                        </li>
                    </ul>
                </nav>
                <div className="d-flex">
                    <button
                        className="btn btn-outline-primary flex-shrink-0"
                        type="button"
                        onClick={()=>handelClick(count)} 
                    >

                      <i className="bi-cart-fill me-1"></i>
                        Agregar
                    </button>
                </div>  

            </>
  )
}

export default ItemCount