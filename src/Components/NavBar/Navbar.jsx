// frontend/src/Components/Navbar/Navbar.jsx


import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.PNG'
import menu_icon from '../Assets/menu_icon.svg'
import close from '../Assets/close.svg'

const Navbar = () => {
    const [menu, setMenu] = useState("Home")
    const [toggle, setToggle] = useState(false)

    const toggleMenu = () => {
        setToggle(prevToggle => !prevToggle) // Toggle menu state
    }

    const handleMenuClick = (item) => {
        setMenu(item)
        setToggle(false) // Close the menu when an item is clicked
    }

    return (
        <div className='navbar'>
            <Link style={{ textDecoration: "none" }} to='/'>
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                    <p>NAVY ESTATE KARSHI</p>
                </div>
            </Link>
            <img
                className={`menu_icon ${toggle ? 'rotate' : ''}`} // Apply 'rotate' class when toggle is true
                onClick={toggleMenu}
                src={toggle ? close : menu_icon}
                alt="menu"
            />
            <ul className={`nav-menu ${toggle ? 'flex' : ''}`}>
                <li onClick={() => handleMenuClick("Home")}>
                    <Link style={{ textDecoration: "none" }} to='/'>Home</Link>
                    {menu === "Home" ? <hr/> : null}
                </li>
                <li onClick={() => handleMenuClick("ViewDigitalID")}>
                    <Link style={{ textDecoration: "none" }} to='/ViewDigitalID'>View Digital ID</Link>
                    {menu === "ViewDigitalID" ? <hr/> : null}
                </li>
                <li onClick={() => handleMenuClick("property")}>
                    <Link style={{ textDecoration: "none" }} to='/PropertyList'>Property</Link>
                    {menu === "property" ? <hr/> : null}
                </li>
            </ul>
            <button className='login'><Link style={{ textDecoration: "none" }} to='/Login'>Login</Link></button>
        </div>
    )
}

export default Navbar
