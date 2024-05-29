
import './Categorias.css'
import {Link} from "react-router-dom"

let categories = ["Frontend","Backend","Fullstack","Servicios","Manager"]

const Categorias = () => {

    return (
        <div className="sidebar__categories">
          <Link to="/" className="lnk-button">
          <div className="sidebar__category">
            <i className="material-icons">library_add_check</i>
            <span>Categorias</span>
          </div>
          </Link>
          {//¡¡¡ => Lo tengo que traer el objeto por base de datos
            categories.map((groupCategory, key) => {
              return <Link to={`/category/`+groupCategory} className="lnk-button" key={key}><div className="sidebar__category" key={key}><span>{groupCategory}</span></div></Link>
            })
          }
<hr />
          <div className="sidebar__category">
            <i className="material-icons">history</i>
            <span>Historial</span>
          </div>

        </div>
    )

}

export default Categorias