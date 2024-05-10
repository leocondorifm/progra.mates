import './Principal.css'
import {Link} from "react-router-dom"

const MenuPrincipal = () => {

    return (
        <div className="sidebar__categories">
          <Link to="/" className="lnk-button">
            <div className="sidebar__category">
              <i className="material-icons">home</i>
              <span>Inicio</span>
            </div>
          </Link>
          <Link to="/ofertas" className="lnk-button">
            <div className="sidebar__category">
              <i className="material-icons">local_fire_department</i>
              <span>Ofertas</span>
            </div>
          </Link>
          <div className="sidebar__category">
            <i className="material-icons">subscriptions</i>
            <span>Rating</span>
          </div>
        </div>
    )

}

export default MenuPrincipal