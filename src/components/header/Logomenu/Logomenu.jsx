import './Logomenu.css';
import {Link} from "react-router-dom"
import { useEffect } from 'react';

const Logomenu = () => {

  const handelClick = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show-sidebar');
  }

  useEffect(()=>{
    const menu = document.querySelector('#menu');
    menu.addEventListener('click', handelClick)

    return () => {
      menu.removeEventListener('click', handelClick)
    }
  },[])

    return (
        <div className="header__left">
        <i id="menu" className="material-icons">menu</i>
        <Link to="/"><img src="../src/assets/img/programate.jpg" alt="inicio"/></Link>
      </div>
    )

}

export default Logomenu