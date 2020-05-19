import React, { Component } from 'react'
import L from 'leaflet'

import { ReactComponent as ContactSvg } from '../img/contacts.svg'
import l1 from '../img/contacts-info/l1.png'
import l2 from '../img/contacts-info/l2.png'
import l3 from '../img/contacts-info/l3.png'
import t1 from '../img/contacts-info/t1.png'
import t2 from '../img/contacts-info/t2.png'

export class Contacts extends Component {
    componentDidMount() {
        var map = L.map('map').setView([28.478, -82.471], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([28.478915070708076, -82.47163858557732]).addTo(map)
            .bindPopup('Emery Thompson Machine <br /> +1.718.588.7300 <br /> steve@emerythompson.com')
            .openPopup();
    }
    render() {
        return (
            <div id="contacts">
                <h1>Contacts</h1>
                <div className="container">
                    <div className="about">
                        <h2>Steve Thompson, President/CEO</h2>
                        <p>Emery Thompson Machine <br />
                           15350 Flight Path Dr <br />
​                           Brooksville FL 34604 U.S.A.</p>
                        <p>+1.718.588.7300</p>
                        <p>steve@emerythompson.com</p>
                    </div>
                    <form action="">
                        <input type="text" name="" placeholder="Full Name" />
                        <input type="text" name="" placeholder="Company" />
                        <input type="text" name="" placeholder="Email" />
                        <input type="text" name="" placeholder="Phone" />
                        <textarea name="message" cols="30" rows="5" placeholder="Your inquiry"></textarea>
                        <button type="submit">Sumbit</button>
                    </form>
                    <ContactSvg />
                </div>
                <div id="map"></div>
                <div id="contacts-info">
                    <h1>LODGING</h1>
                    <div className="item wow fadeInUp">
                        <div>
                            <h3><a href="https://www.dolan-house.com/" target="_blank" rel="noopener noreferrer">The Dolan House Bed & Breakfast</a></h3>
                            <p>Mike Dolan and Tina Jarvis, Prop. <br />
                        701 Museum Ct <br />
                        Brooksville, FL 34601 <br />
                        352-631-8822 <br />
                        The historic Dolan House B&B is located minutes from Tampa International Airport and only 9 miles from the Emery Thompson facilities. </p>
                            <p><strong>DIRECTIONS:</strong> From <a href="https://tinyurl.com/y7osntxh" target="_blank" rel="noopener noreferrer"> Tampa International Airport </a> From <a href="https://tinyurl.com/yb59pg8m" target="_blank" rel="noopener noreferrer">Emery Thompson</a></p>
                        </div>
                        <img src={l1} alt="" />
                    </div>
                    <div className="item wow fadeInUp">
                        <div>
                            <h3><a href="https://tinyurl.com/y9zjxq2m" target="_blank" rel="noopener noreferrer">Holiday Inn Express & Suites Brooksville West</a></h3>
                            <p>
                                14112 Cortez Blvd <br />
                        Brooksville, Florida 34601 <br />
                        352-597-4540 <br />
                        Conveniently located 50 minutes from Tampa International Airport and only 6 miles from the Emery Thompson facilities.
                        </p>
                            <p><strong>DIRECTIONS:</strong> From <a href="https://tinyurl.com/y8taqvrt" target="_blank" rel="noopener noreferrer"> Tampa International Airport </a> From <a href="https://tinyurl.com/y7ww2kpa" target="_blank" rel="noopener noreferrer">Emery Thompson</a></p>
                        </div>
                        <img src={l2} alt="" />
                    </div>
                    <div className="item wow fadeInUp">
                        <div>
                            <h3><a href="http://www.marriott.com/TPASC" target="_blank" rel="noopener noreferrer">Residence Inn Marriott, Tampa Suncoast Parkway</a></h3>
                            <p>2101 Northpointe Parkway <br />
                        Lutz, Florida 33558 <br />
                        813-792-8400 <br />
                        This pet-friendly Inn is located 20 miles from Tampa International Airport and 24 miles from the Emery Thompson facilities. </p>
                            <p><strong>DIRECTIONS:</strong> From <a href="https://tinyurl.com/y398b45h" target="_blank" rel="noopener noreferrer"> Tampa International Airport </a> From <a href="https://tinyurl.com/y2xsnef7" target="_blank" rel="noopener noreferrer">Emery Thompson</a></p>
                        </div>
                        <img src={l3} alt="" />
                    </div>
                    <h1>Transportation</h1>
                    <div className="item wow fadeInUp">
                        <div>
                            <p><a href="http://www.tampaairport.com/" target="_blank" rel="noopener noreferrer">Tampa International Airport</a> is served by numerous domestic and international air carriers which enable you to quickly get to the Emery Thompson facilities from anywhere in the world. Rental and direct ground transportation are available onsite.</p>
                        </div>
                        <img src={t1} alt="" />
                    </div>
                    <div className="item wow fadeInUp">
                        <div>
                            <h3><a href="http://flybkv.com/pilot-info" target="_blank" rel="noopener noreferrer">BROOKSVILLE - TAMPA BAY REGIONAL AIRPORT</a></h3>
                            <p>BKV is a towered (7:00 AM – 10:00 PM) public-use Executive/GA airport with onsite FBO and maintenance facilities. It began operations in 1942 as Brooksville Army Airfield and was used for training B-17 Flying Fortress and B-24 Liberator air and ground crews. Emery Thompson is located in the airpark adjacent to 7002' Runway 9/27. Flying to BKV? Call us in advance with your arrival time and we will pick you up*!</p>
                        </div>
                        <img src={t2} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts
