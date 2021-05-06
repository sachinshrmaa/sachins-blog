import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
            <Link to="/" className="navbar-brand">Sachins Blog</Link>
    
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                    <Link to="/search" className="nav-link me-md-3">    
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </Link>
                    <Link to="/about" class="nav-link">About</Link>
                </div>
            </div>
        </div>
      </nav>
    )
}

export default NavBar
