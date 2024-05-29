import { Link } from "react-router-dom"

function Shop({products}) {

  return (
    <div className="shared">
        <div className="btn-group shop" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-outline-secondary"><i className="bi bi-heart-fill"></i></button>
            <button type="button" className="btn btn-outline-secondary"><i className="bi bi-share"></i></button>
            <Link to={`/products-details/`+products.id}>
              <button type="button" className="btn btn-outline-secondary">
                <i className="bi bi-eye-fill"></i>
              </button>
            </Link>
        </div>
    </div>
  )
}

export default Shop