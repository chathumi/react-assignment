import React from 'react'
import { Link } from "react-router-dom";
import './Style.css';

const NavBar = () => {
  return (
    <div className="navbar">
        <nav class="navbar bg-light">
    <div class="container-fluid">
        <a className="navbar-brand">Todo</a>
        <form className="d-flex" role="search">
            <Link className='link mx-4' to="/login"> Login </Link>
            <Link to="/signup"> Signup </Link>
        </form>
    </div>
</nav>

    </div>
  )
}

export default NavBar