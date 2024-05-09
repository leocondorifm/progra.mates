
import './Categorias.css';

const Categorias = () => {

    return (
        <div className="sidebar__categories">
          <div className="sidebar__category">
            <i className="material-icons">library_add_check</i>
            <span>Categorias</span>
          </div>

          <div className="sidebar__category">
            <i className="material-icons">history</i>
            <span>Historial</span>
          </div>
        </div>
    )

}

export default Categorias