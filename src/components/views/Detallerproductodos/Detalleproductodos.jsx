import './Detalleproductodos.css'
import ReactPlayer from 'react-player'
import { useState, useEffect } from "react"
import getProducts from "../../../helpers/fetchApi"
import { useParams } from "react-router-dom"

function Detalleproductodos() {

  const [product,setProduct] = useState({})
  const {idProduct} = useParams()

  useEffect(()=>{ 
      getProducts
      .then((respuesta) => {
          const newProduct = respuesta.find((product) => product.id == idProduct)
          setProduct(newProduct)

      })
      .catch((error)=>console.log(error))
      .finally(() => {
        //
      })
  },[]) 

  
let sizes = product.size

  return (
    <div className='videos'>

        <section className="py-5">
        <div className="container">
            <div className="row gx-5">
            <aside className="col-lg-6">
                <div className="border rounded-4 mb-3 d-flex justify-content-center">
                  <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">
                        <video className="rounded-4 fit a-img" controls muted autoPlay loop>
                          <source src="../src/assets/video/videoproducto-cafe.mp4" type="video/mp4" />Your browser does not support the video tag...
                        </video>
                  </a>
                </div>
                <div className="row d-flex justify-content-center mb-3">
                  <div className="col-lg-6">
                    <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" >
                        <ReactPlayer width="60" height="60" className="rounded-2" url="../src/assets/video/videoproducto-cafe.mp4" controls muted />
                    </a>
                    <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp">
                      <ReactPlayer width="60" height="60" className="rounded-2" url="../src/assets/video/videoproducto-cafe.mp4" controls muted />
                    </a>
                    <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp">
                      <ReactPlayer width="60" height="60" className="rounded-2" url="../src/assets/video/videoproducto-cafe.mp4" controls muted />
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp" >
                      <ReactPlayer width="60" height="60" className="rounded-2" url="../src/assets/video/videoproducto-cafe.mp4" controls muted />
                    </a>
                    <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">
                      <ReactPlayer width="60" height="60" className="rounded-2" url="../src/assets/video/videoproducto-cafe.mp4" controls muted />
                    </a>
                    <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">
                      <ReactPlayer width="60" height="60" className="rounded-2" url="../src/assets/video/videoproducto-cafe.mp4" controls muted />
                    </a>
                  </div>
                </div>

            </aside>
            <main className="col-lg-6">
                <div className="ps-lg-3">
                <h4 className="title text-dark">
                  {product.id} Quality Men's Hoodie for Winter, Men's Fashion <br />
                  Casual Hoodie
                </h4>
                <div className="d-flex flex-row my-3">
                    <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>

                    </div>
                    <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>{product.vendidos} orders</span>
                    <span className="text-success ms-2">In stock</span>
                </div>

                <div className="mb-3">
                    <span className="h5">${product.precio} </span>
                    <span className="text-muted">/per box</span>
                </div>

                <p>
                  {product.descripcion}
                </p>

                <hr />
    </div>
            </main>
            </div>
        </div>
        </section>

        <section className="bg-light border-top py-4">
          <div className="container">
            <div className="row gx-4">
              <div className="col-lg-8 mb-4">
                <div className="border rounded-2 px-3 py-2 bg-white">
                  <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">


                  </ul>

                  <div className="tab-content" id="ex1-content">
                    <div className="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                      <p>
                       {product.descripcion}
                      </p>
                      <div className="row mb-2">
                        <div className="col-12 col-md-6">
                          <ul className="list-unstyled mb-0">

                          </ul>
                        </div>
                        <div className="col-12 col-md-6 mb-0">
                          <ul className="list-unstyled">

                          </ul>
                        </div>
                      </div>

                      <table className="table border mt-3 mb-2">
                        <thead>
                          <tr>
                            <th className="py-2">Display:</th>
                            <th className="py-2">Processor capacity:</th>
                            <th className="py-2">Camera quality:</th>
                            <th className="py-2">Memory</th>
                            <th className="py-2">Graphics</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                          <td className="py-2">13.3-inch LED-backlit display with IPS</td>
                          <td className="py-2">2.3GHz dual-core Intel Core i5</td>
                          <td className="py-2">720p FaceTime HD camera</td>
                          <td className="py-2">8 GB RAM or 16 GB RAM</td>
                          <td className="py-2">Intel Iris Plus Graphics 640</td>
                          </tr>
                        </tbody>
                      </table>
                      
                    </div>
                    <div className="tab-pane fade mb-2" id="ex1-pills-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                      Tab content or sample information now <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    </div>
                    <div className="tab-pane fade mb-2" id="ex1-pills-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                      Another tab content or sample information now <br />
                      Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </div>
                    <div className="tab-pane fade mb-2" id="ex1-pills-4" role="tabpanel" aria-labelledby="ex1-tab-4">
                      Some other tab content or sample information now <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="px-0 border rounded-2 shadow-0">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Similar items</h5>
                      <div className="d-flex mb-3">
                        <a href="#" className="me-3">
                          <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/8.webp" className="img-md img-thumbnail div-a-img" />
                        </a>
                        <div className="info">
                          <a href="#" className="nav-link mb-1">
                            Rucksack Backpack Large <br />
                            Line Mounts
                          </a>
                          <strong className="text-dark"> $38.90</strong>
                        </div>
                      </div>

                      <div className="d-flex mb-3">
                        <a href="#" className="me-3">
                          <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/9.webp" className="img-md img-thumbnail div-a-img" />
                        </a>
                        <div className="info">
                          <a href="#" className="nav-link mb-1">
                            Summer New Men's Denim <br />
                            Jeans Shorts
                          </a>
                          <strong className="text-dark"> $29.50</strong>
                        </div>
                      </div>

                      <div className="d-flex mb-3">
                        <a href="#" className="me-3">
                          <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/10.webp" className="img-md img-thumbnail div-a-img" />
                        </a>
                        <div className="info">
                          <a href="#" className="nav-link mb-1"> T-shirts with multiple colors, for men and lady </a>
                          <strong className="text-dark"> $120.00</strong>
                        </div>
                      </div>

                      <div className="d-flex">
                        <a href="#" className="me-3">
                          <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/11.webp" className="img-md img-thumbnail div-a-img" />
                        </a>
                        <div className="info">
                          <a href="#" className="nav-link mb-1"> Blazer Suit Dress Jacket for Men, Blue color </a>
                          <strong className="text-dark"> $339.90</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}

export default Detalleproductodos