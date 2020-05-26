import React, { Component } from 'react'
import FreezerItem from './FreezerItem'

import pic1 from '../../img/freezers/quart3.png'
import pic2 from '../../img/freezers/quart6.png'
import pic3 from '../../img/freezers/quart12.png'
import pic4 from '../../img/freezers/quart24.png'
import pic5 from '../../img/freezers/quart44.png'
import pic6 from '../../img/freezers/quart2.png'

export class Freezers extends Component {
    render() {
        return (
            <div id="freezers">
                <h1 className="animated fadeInLeftBig">Our Product Line</h1>
                <div className="freezers-container">
                    <FreezerItem picture={pic1} model="CB-200" vol="3-Quart Batch Freezer" price="$6,950" route="/freezers/CB-200"/>
                    <FreezerItem picture={pic2} model="CB-350" vol="6-Quart Batch Freezer" price="$11,500" route="/freezers/CB-350" />
                    <FreezerItem picture={pic3} model="12NW & 12LA" vol="12-Quart Batch Freezer" price="$26,200" route="/freezers/12NW-12LA" />
                    <FreezerItem picture={pic4} model="24NW & 24LA" vol="24-Quart Batch Freezer" price="$28,200" route="/freezers/24NW-24LA" />
                    <FreezerItem picture={pic5} model="44BLT" vol="44-Quart Batch Freezer" price="$40,600" route="/freezers/44BLT" />
                    <FreezerItem picture={pic6} model="CB-100" vol="up to 2-Quart Batch Freezer" price="$3,650" route="/freezers/CB-100" />
                </div>
            </div>
        )
    }
}

export default Freezers
