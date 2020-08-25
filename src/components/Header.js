import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

import Logo from '../img/logo.png'

const body=document.querySelector('body');

export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { mobileMenu: '', windowWidth: '', menuAnim: 'fadeInRightBig' }
        this.toggleMenu = this.toggleMenu.bind(this)
        this.hideMenu = this.hideMenu.bind(this)
    }
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({ windowWidth: window.innerWidth })
        })
    }
    toggleMenu() {
        if (this.state.mobileMenu === 'active') {
            this.setState({ menuAnim: 'fadeOutLeftBig' }, () => {
                body.style.overflowY='auto'
                setTimeout(() => {
                    this.setState({ mobileMenu: '' })
                }, 700)
            })
        } else {
            body.style.overflowY='hidden'
            this.setState({ menuAnim: 'fadeInRightBig', mobileMenu: 'active' })
        }
    }
    hideMenu() {
        this.setState({ menuAnim: 'fadeOutLeftBig' }, () => {
            body.style.overflowY='auto'
            setTimeout(() => {
                this.setState({ mobileMenu: '' })
            }, 700)
        })
    }
    render() {
        return (
            <header>
                <a href="./" id="logo"><img src={Logo} alt="" /> Emery Thompson</a>
                <nav className="animated fadeInDown">
                    <ul>
                        <li><NavLink to='/' activeClassName="active" exact>Home</NavLink></li>
                        <li><NavLink to='/freezers' activeClassName="active">Batch freezers</NavLink>
                            <ul className="hover">
                                <li><NavLink to="/freezers/CB-200">CB-200</NavLink></li>
                                <li><NavLink to="/freezers/CB-350">CB-350</NavLink></li>
                                <li><NavLink to="/freezers/12NW-12LA">12NW & 12LA</NavLink></li>
                                <li><NavLink to="/freezers/24NW-24LA">24NW & 24LA</NavLink></li>
                                <li><NavLink to="/freezers/44BLT">44BLT</NavLink></li>
                                <li><NavLink to="/freezers/CB-100">CB-100</NavLink></li>
                            </ul>
                        </li>
                        <li>Different
                            <ul className="hover">
                                <li><NavLink to='/suppliers' activeClassName="active" exact>Key suppliers</NavLink></li>
                                <li><a href="https://nebula.wsimg.com/ef52e1891fa49698a26194bc62f9d209?AccessKeyId=3852EE9A40CCFB24DDD0&disposition=0&alloworigin=1" target="_blank" rel="noopener noreferrer">Recipes</a></li>
                                <li><NavLink to='/used-machines' activeClassName="active" exact>Used machines</NavLink></li>
                                <li><NavLink to='/exclusive-ioc' activeClassName="active" exact>Exclusive  I.O.C.</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to='/contacts' activeClassName="active" exact>Contacts</NavLink></li>
                    </ul>
                </nav>
                <div className={"hamburger " + this.state.mobileMenu} onClick={this.toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {(this.state.mobileMenu === 'active' && this.state.windowWidth < 960) ?
                    <div className={"mobile-menu animated " + this.state.menuAnim}>
                        <div className="container">
                            <NavLink to='/' className="animated fadeInDownBig" style={{ animationDelay: '700ms' }} onClick={this.hideMenu}>Home</NavLink>
                            <NavLink to='/freezers' className="animated fadeInDownBig" style={{ animationDelay: '600ms' }} onClick={this.hideMenu}>Batch freezers</NavLink>
                            <NavLink to='/suppliers' className="animated fadeInDownBig" style={{ animationDelay: '500ms' }} onClick={this.hideMenu}>Key suppliers</NavLink>
                            <a href="https://nebula.wsimg.com/ef52e1891fa49698a26194bc62f9d209?AccessKeyId=3852EE9A40CCFB24DDD0&disposition=0&alloworigin=1" target="_blank" rel="noopener noreferrer" className="animated fadeInDownBig" style={{ animationDelay: '400ms' }} onClick={this.hideMenu}>Recipes</a>
                            <NavLink to='/exclusive-ioc' className="animated fadeInDownBig" style={{ animationDelay: '300ms' }} onClick={this.hideMenu}>Exclusive  I.O.C.</NavLink>
                            <NavLink to='/used-machines' className="animated fadeInDownBig" style={{ animationDelay: '200ms' }} onClick={this.hideMenu}>Used machines</NavLink>
                            <NavLink to='/contacts' className="animated fadeInDownBig" style={{ animationDelay: '100ms' }} onClick={this.hideMenu}>Contacts</NavLink>
                        </div>
                    </div> : null
                }
            </header>
        )
    }
}

export default Header
