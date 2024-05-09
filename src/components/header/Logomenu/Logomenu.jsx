import './Logomenu.css';
import {Link} from "react-router-dom"

const Logomenu = () => {

    return (
        <div className="header__left">
        <i id="menu" className="material-icons">menu</i>
        <Link to="/"><img src="../src/assets/img/programate.jpg" alt="inicio"/></Link>
      </div>
    )

}

export default Logomenu