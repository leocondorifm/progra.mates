
import './Categorias.css'

let categories = ["Frontend","Backend","Fullstack","Servicios"]

const Categorias = () => {

    return (
        <div className="sidebar__categories">
          <div className="sidebar__category">
            <i className="material-icons">library_add_check</i>
            <span>Categorias</span>
          </div>
          {//Lo tengo que traer el objeto por base de datos
            categories.map((groupCategory, key) => {
              return <div className="sidebar__category" key={key}><span>{groupCategory}</span></div>
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