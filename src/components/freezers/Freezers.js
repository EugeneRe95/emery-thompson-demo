import React, { Component } from 'react'
import FreezerItem from './FreezerItem'
import { Link } from 'react-router-dom'

import pic1 from '../../img/freezers/quart3.png'
import pic2 from '../../img/freezers/quart6.png'
import pic3 from '../../img/freezers/quart12.png'
import pic4 from '../../img/freezers/quart24.png'
import pic5 from '../../img/freezers/quart44.png'
import pic6 from '../../img/freezers/quart2.png'
import stand from '../../img/acs/stand.png'
import rim1 from '../../img/acs/rim1.jpg'


export class Freezers extends Component {
    render() {
        return (
            <div id="freezers">
                <h1 className="animated fadeInLeftBig">Our Product Line</h1>
                <h2 className="message">PROUDLY  MADE IN THE U.S.A. <br/>
                ALL ET MACHINES ARE NSF  AND  UL  APPROVED</h2>
                <div className="freezers-container">
                    <FreezerItem picture={pic1} model="CB-200" vol="3-Quart Batch Freezer" price="$6,950" route="/freezers/CB-200" />
                    <FreezerItem picture={pic2} model="CB-350" vol="6-Quart Batch Freezer" price="$11,500" route="/freezers/CB-350" />
                    <FreezerItem picture={pic3} model="12NW & 12LA" vol="12-Quart Batch Freezer" price="$26,200" route="/freezers/12NW-12LA" />
                    <FreezerItem picture={pic4} model="24NW & 24LA" vol="24-Quart Batch Freezer" price="$28,200" route="/freezers/24NW-24LA" />
                    <FreezerItem picture={pic5} model="44BLT" vol="44-Quart Batch Freezer" price="$40,600" route="/freezers/44BLT" />
                    <FreezerItem picture={pic6} model="CB-100" vol="up to 2-Quart Batch Freezer" price="$3,650" route="/freezers/CB-100" />
                </div>
                <h3 className="warning"><Link to='/used-machines' activeClassName="active" exact>READ THIS BEFORE you even consider buying used! <i class="fas fa-hand-pointer"></i></Link></h3>
                <h1 className="animated fadeInLeftBig">Accessories</h1>
                <div className="accessories">
                    <div className="item">
                        <h3>Heavy Duty Stand</h3>
                        <figure>
                            <img src={stand} alt="" />
                            <figcaption>
                                $473.00 Plus U.P.S. Shipping
                        </figcaption>
                        </figure>
                        <p>For CB-350 and CB-200 Batch Freezer. Welded steel fully powder-coated for long life Includes locking casters for full mobility!</p>
                        <h4>Dimensions:</h4>
                        <p>Base = 25.5" x 31.5" <br />
                            Top  = 18.5" x 24.5" <br />
                            Height, w/ wheels = 26.0"</p>
                    </div>
                    <div className="item">
                        <h3>Rainbow Ice Maker</h3>
                        <figure className="carousel">
                            <img src={rim1} alt=""/>
                            <figcaption>
                                $94.20 Plus U.P.S. Shipping
                        </figcaption>
                        </figure>
                        <p>Neatly divides standard tub into three sections to make Rainbow Ice quick and easy! All-stainless steel construction for a lifetime of use.</p>
                    </div>
                </div>
                <h3 className="warning"><a href="https://shorturl.at/jyDY9" target="_blank" rel="noopener noreferrer">Click for complete direct-to-you discount pricing. <i class="fas fa-hand-pointer"></i></a></h3>
            </div>
        )
    }
}

export default Freezers
