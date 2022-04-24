import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container">
                
                <Link to="/" className="navbar-brand" id="logo">Sachins Blog</Link>

                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <Link to="/about" class="nav-link text-dark ms-md-2">About</Link>
                        <Link to="/bookshelf" class="nav-link text-dark ms-md-2">Bookshelf</Link>
                        <Link to="/search" className="nav-link text-dark ms-md-2"> Search </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar