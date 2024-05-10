import './Icons.css';
import {Link} from "react-router-dom"

const Iconsheader = ({i, f, sum, reset, fav}) => {

console.log('fire!');

    return (
        <div className="header__icons">
            <Link to="/favoritos">
            <span className="position-relative views">
            <i className="material-symbols-outlined">favorite</i>
                <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-setting">
                    0
                    <span className="visually-hidden">unread messages</span>
                </span>
            </span>
            </Link>
            <Link to="/checkout">
            <span className="position-relative views">
            <i className="material-symbols-outlined">shopping_cart</i>
                <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-setting">
                    0
                    <span className="visually-hidden">unread messages</span>
                </span>
            </span>
            </Link>
            <i className="material-icons">videocam</i>
            <i className="material-icons">apps</i>
            <i className="material-icons">notifications</i>
            <Link to="/profile" className='lnk-button'>
            <i className="material-icons display-this views">account_circle</i>
            </Link>

        </div>
    )

} 

export default Iconsheader