import './ItemList.css'
import { Link } from "react-router-dom"
import { useState } from 'react'

import Shop from '../../action/shop'
import ItemCount from '../../ItemCount/ItemCount'

const ItemList = ({products}) => {
  
  const [zoomcard, setZoomcard] = useState(false)

  const handleMouseOver = () => {
    setZoomcard(true)
  }
  const handleMouseLeave = () => {
    setZoomcard(false)
  }

  const zoomEffect = {
    transform: zoomcard ? "scale(0.8)" : "scale(1)",
    transition: "transform 0.3s ease-in-out"
  }

  const handelClick = (count) => { 
  
    const productCart = {products, quantity: count}
    console.log(productCart)
  
  } 

  return (
    <>
       { 
            products.map((products)=>{  
              
            return (

              <div 
                className="video" 
                key={products.id}
              >
                <div className="video__thumbnail"
                //style={zoomEffect}
                //onMouseOver={handleMouseOver}
                //onMouseLeave={handleMouseLeave}
                > 
                    <video width="100%" height="500px" controls controlsList="nodownload">
                        <source src={products.video}  type="video/mp4" />
                        Your browser does not support the video tag.. 
                    </video>
                </div>

                <Shop products={products} />

              </div>
              )

            }) 
        }
    </>
  )
}

export default ItemList