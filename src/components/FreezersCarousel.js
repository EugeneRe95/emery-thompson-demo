import React, { Component } from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import pic1 from '../img/freezers/quart3.png'
import pic2 from '../img/freezers/quart6.png'
import pic3 from '../img/freezers/quart12.png'
import pic4 from '../img/freezers/quart24.png'
import pic5 from '../img/freezers/quart44.png'
import pic6 from '../img/freezers/quart2.png'

import FreezerItem from './freezers/FreezerItem'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 2000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 2000, min: 1500 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1500, min: 1100 },
        items: 3
    },
    mobile2: {
        breakpoint: { max: 1100, min: 600 },
        items: 2
    },
    mobile1: {
        breakpoint: { max: 600, min: 0 },
        items: 1
    }
};

export class FreezersCarousel extends Component {
    render() {
        return (
            <div id="freezers-carousel">
                <Carousel responsive={responsive}>
                    <FreezerItem picture={pic1} model="CB-200" vol="3-Quart Batch Freezer" price="$6,950" route="/freezers/CB-200" />
                    <FreezerItem picture={pic2} model="CB-350" vol="6-Quart Batch Freezer" price="$11,500" route="/freezers/CB-350" />
                    <FreezerItem picture={pic3} model="12NW & 12LA" vol="12-Quart Batch Freezer" price="$26,200" route="/freezers/12NW-12LA" />
                    <FreezerItem picture={pic4} model="24NW & 24LA" vol="24-Quart Batch Freezer" price="$28,200" route="/freezers/24NW-24LA" />
                    <FreezerItem picture={pic5} model="44BLT" vol="44-Quart Batch Freezer" price="$40,600" route="/freezers/44BLT" />
                    <FreezerItem picture={pic6} model="CB-100" vol="up to 2-Quart Batch Freezer" price="$3,650" route="/freezers/CB-100" />
                </Carousel>
            </div>
        )
    }
}

export default FreezersCarousel
