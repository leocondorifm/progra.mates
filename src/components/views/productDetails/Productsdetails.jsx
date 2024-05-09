import { useState, useEffect } from "react"
import getProducts from "../../../helpers/fetchApi"

const Productsdetails = () => {
    const [product,setProduct] = useState({})

    useEffect(()=>{ 
        getProducts
        .then((respuesta) => {
            const newProduct = respuesta.find((product) => product.id == "22")
            setProduct(newProduct)
            console.log(product) 
        })
        .catch((error)=>console.log(error))
    },[]) 

    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-12">
                            <div className="video__thumbnail"> 
                                <video width="100%" height="170px" controls> 
                                    <source src={product.video} type="video/mp4" />
                                    Your browser does not support the video tag.. 
                                </video>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="small mb-1">SKU: {product.id}</div>
                            <h1 className="display-5 fw-bolder">{product.nombre}</h1>
                            <div className="fs-5 mb-5">
                                <span className="text-decoration-line-through">$45.00</span>
                                <span>$40.00</span>
                            </div>
                            <p className="lead">{product.descripcion}</p>
                            <p>{product.video}</p>
                            <div className="d-flex">
                                <input className="form-control text-center me-3 inputQuantity" id="inputQuantity" type="num" value="1"/>
                                <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                    <i className="bi-cart-fill me-1"></i>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Productsdetails