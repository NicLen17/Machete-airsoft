import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>Features</Link>
            <Link to={"/contact"}>Pricing</Link>
        </div>
    )
}

export default Nav