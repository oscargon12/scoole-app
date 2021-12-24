import React from 'react'
import { Link } from 'react-router-dom'

const year = new Date().getFullYear()
export const Footer = () => {
    return (
        <div className='container'>
            <footer className="d-flex flex-wrap justify-content-between align-items-center pt-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">&copy; {year} Scoole, Inc</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                Hola
                </a>

                <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><Link className='nav-link py-0' to="productos">Home</Link></li>
                <li className="nav-item"><Link className='nav-link py-0' to="productos">Pricing</Link></li>
                <li className="nav-item"><Link className='nav-link py-0' to="productos">FAQs</Link></li>
                <li className="nav-item"><Link className='nav-link py-0' to="productos">About</Link></li>
                </ul>
            </footer>
        </div>
    )
}
