import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Logo from '../img/logo.png'

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="description">
                    <img src={Logo} alt="" />
                    <p>Best Built Batch Freezers by the People Who Invented Them!</p>
                </div>
                <div className="links">
                <ul> Quick Links
                    <li><Link to="/testimonials">Testimonials</Link></li>
                    <li><Link to="/news-and-events">News and Events</Link></li>
                    <li><Link to="/FAQ">FAQ</Link></li>
                </ul>
                <ul> Connect with us
                    <li><Link to="/contacts"><i className="fas fa-id-card"></i> Contacts</Link></li>
                    <li><a href="https://www.youtube.com/emerythompsonmachine" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i> YouTube</a></li>
                    <li><a href="https://www.instagram.com/emerythompsonmachine/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
                    <li><a href="https://www.facebook.com/emerythompsonmachine"><i className="fab fa-facebook" target="_blank" rel="noopener noreferrer"></i> Facebook</a></li>
                </ul>
                </div>
            </footer>
        )
    }
}

export default Footer
