import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <header>
                <img src="https://static.thenounproject.com/png/317039-200.png" alt="icon" />
                <ul>
                    <NavLink to='/'><li>Home</li></NavLink>
                    <NavLink to='/contact'><li>Contacts</li></NavLink>
                    <NavLink to='/about'><li>About</li></NavLink>
                    <NavLink to='/product'><li>Product</li></NavLink>
                    <NavLink to='/jobs'><li>Jobs</li></NavLink>
                </ul>
                <button onClick={() => navigate('/about', { replace: true })}>Get Started</button>
            </header>
        </>
    )
}


