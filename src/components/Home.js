import React, { Component } from 'react'

import Patent from '../img/patent.png'
import Flag from '../img/flag.png'
import FreezersCarousel from './FreezersCarousel.js'


export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { height: '', banner: false }
    }
    componentDidMount() {
        this.setState({ height: window.innerHeight })
        window.addEventListener('resize', () => {
            this.setState({ height: window.innerHeight })
        })
        setTimeout(()=>{
            this.setState({banner:true})
        }, 2000)
    }
    toggleBanner(){
        this.setState({banner:false})
    }
    render() {
        const banner = <div id="video-banner" className="animated fadeInRightBig">
            <button onClick={this.toggleBanner.bind(this)}>X</button>
            <a href="https://www.youtube.com/emerythompsonmachine" target="_blank" rel="noopener noreferrer">Click here for hundreds of FREE RECIPES Created LIVE</a>
        </div>
        return (
            <section id="home">
                <div id="main">
                    <h1 className="welcoming animated fadeInLeft">From our family to yours, let us welcome you to the Emery Thompson family and help you achieve your ice cream dreams! <br/>
                    Batch ice cream Freezers <i className="fas fa-ice-cream"></i></h1>
                    <div className="bg-blue-main">
                    </div>
                </div>
                <div id="about-us">
                    <p className="about-us-description wow slideInLeft" >Emery Thompson designed and patented the world’s first automated batch freezer in 1905. Since then our family owned business has been providing the world with the highest quality batch freezers for the production of all levels of hard ice cream (premium, super premium, Hagen Daz, frozen custard), Artisan Gelato, all old world water ice (ITALIAN ICE, sorbet, sorbetto) products and Dairy Free ice cream. Simply stated, we build the world's highest quality, most reliable and innovative batch freezers. These qualities are hallmarks of the Emery Thompson line of Batch Freezers.​ And we know this because our family invented them!</p>
                    <div className="bg-red-about"></div>
                    <a href="http://nebula.wsimg.com/6166f6ae92f262989f8a4243c244be2a?AccessKeyId=3852EE9A40CCFB24DDD0&disposition=0&alloworigin=1" target="_blank" rel="noopener noreferrer"><img className="patent wow slideInRight" src={Patent} alt="" /></a>
                    <img src={Flag} alt="" className="flag" />
                </div>
                <FreezersCarousel />
                {(this.state.banner) ? banner : null}
            </section>
        )
    }
}

export default Home
