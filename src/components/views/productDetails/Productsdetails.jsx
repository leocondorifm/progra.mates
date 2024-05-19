import "./Productosdetails.css"
import { useState, useEffect } from "react"
import getProducts from "../../../helpers/fetchApi"
import { useParams } from "react-router-dom"

const Productsdetails = () => {
    const [product,setProduct] = useState({})
    const {idProduct} = useParams()

    useEffect(()=>{ 
        getProducts
        .then((respuesta) => {
            const newProduct = respuesta.find((product) => product.id === idProduct)
            setProduct(newProduct)
            console.log(product) 
        })
        .catch((error)=>console.log(error))
    },[]) 

    return (
        <div>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6">
                            <div className="card-img-top mb-5 mb-md-0"> 
                                <video controls muted autoPlay>
                                    <source src={product.video} type="video/mp4" />
                                    Your browser does not support the video tag.. 
                                </video>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="small mb-1">SKU: {product.id}</div>
                            <h1 className="display-5 fw-bolder">{product.nombre}</h1>
                            <div className="fs-5 mb-5">
                                <span className="text-decoration-line-through">$45.00</span>
                                <span>$499.00</span>
                                <br></br>
                                <a href={product.video}>{product.video}</a>
                                <div className="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
                            </div>
                            <p className="lead">{product.descripcion}</p>
                            <p>{product.video}</p>
                            <div className="d-flex">
                                <input className="form-control text-center me-3 inputQuantity" id="inputQuantity" type="num" defaultValue="1"/>
                                <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                    <i className="bi-cart-fill me-1"></i>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Productsdetails