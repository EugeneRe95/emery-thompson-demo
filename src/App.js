import React, { Component } from 'react'
import './App.scss';
import './animate.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Freezers from './components/freezers/Freezers'
import FreezerSpecifc from './components/freezers/FreezerSpecifc'
import Suppliers from './components/Suppliers'
import Contacts from './components/Contacts'
import UsedMachines from './components/UsedMachines'
import Testimonials from './components/Testimonials'
import News from './components/News'
import Faq from './components/Faq'

import pic1 from './img/freezers/quart3.png'
import pic2 from './img/freezers/quart6.png'
import pic3 from './img/freezers/quart12.png'
import pic4 from './img/freezers/quart24.png'
import pic5 from './img/freezers/quart44.png'
import pic6 from './img/freezers/quart2.png'
import WOW from 'wowjs';

export class App extends Component {
  componentDidMount(){
    new WOW.WOW().init();
  }
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/freezers" component={Freezers} />
          <Route path="/freezers/CB-200" render={() => { return <FreezerSpecifc data={freezersData[0]} /> }} />
          <Route path="/freezers/CB-350" render={() => { return <FreezerSpecifc data={freezersData[1]} /> }} />
          <Route path="/freezers/12NW-12LA" render={() => { return <FreezerSpecifc data={freezersData[2]} /> }} />
          <Route path="/freezers/24NW-24LA" render={() => { return <FreezerSpecifc data={freezersData[3]} /> }} />
          <Route path="/freezers/44BLT" render={() => { return <FreezerSpecifc data={freezersData[4]} /> }} />
          <Route path="/freezers/CB-100" render={() => { return <FreezerSpecifc data={freezersData[5]} /> }} />
        <Route path="/suppliers" component={Suppliers} />  
        <Route path="/used-machines" component={UsedMachines} />  
        <Route path="/contacts" component={Contacts} />  
        <Route path="/testimonials" component={Testimonials} />  
        <Route path="/news-and-events" component={News} />  
        <Route path="/FAQ" component={Faq} />  
        <Footer />
      </Router>
    )
  }
}

export default App

const freezersData = [
  {
    picture: pic1,
    model: '3-Quart Batch Freezer',
    specific: `AIR COOLED: Available in
    Single Phase, 60Hz, 220v
    Single Phase, 60Hz, 110v.
    50Hz available at additional cost`,
    intro: `Emery Thompson, the world leader in batch freezers since 1903, now introduces our three quart (per production run) batch freezer.
    Built using the exact same designs and materials as our larger machines, the CB-200 will produce up to three gallons of ice cream or gelato per hour. Being an Emery Thompson makes it the only choice of Italian Ice and sorbet manufacturers.
    Now you can invest in our Made in the U.S.A. Emery Thompson batch freezer with a smaller footprint and an even smaller price tag!`,
    description: ``,
    freezChamb: ``,
    capacity: `3 quarts per batch; 3 gallons (11.3 liters) per hour of ice cream and 2.5 gallons (9.5 liters) of fresh fruit sorbets per hour.`,
    link: "https://nebula.wsimg.com/a9003a1ed319363c9bb9a4ca0406d1c8?AccessKeyId=3852EE9A40CCFB24DDD0&disposition=0&alloworigin=1",
    specification: {
      motor: 'BEATER MOTOR: 1/3 H.P.',
      cu: 'CONDENSING UNIT: 1 H.P. Self-contained using environmentally friendly 404-A refrigerant.',
      electr: `ELECTRICAL: 1/60/110V & 1/60/220V   (50Hz available at additional cost)`,
      dim: `DIMENSIONS: 14” wide x 24” tall x 24” deep1`,
      wc: '',
      sw: 'SHIPPING WEIGHT: 200 lbs.'
    }
  },
  {
    picture: pic2,
    model: '6-Quart Batch Freezer',
    specific: `AIR COOLED: Available in
    Single Phase, 60Hz*, 220v
    *50Hz available at additional cost`,
    intro: `Emery Thompson, the world leader in batch freezers since 1903, presents our six quart (per production run) batch freezer. The world’s largest batch freezer is now available in a counter top size! Built using the exact same designs and materials as our larger machines, the CB-350 will produce up to 7.5 gallons of ice cream or gelato per hour. The most versatile batch freezer ever manufactured and it’s MADE IN THE U.S.A. `,
    description: `Available in air cooled, the CB-350 includes our new touch-screen Infinite Overrun Control. With this new design the control becomes even more user friendly. While the overrun can be adjusted manually as in previous models, this new bright touch screen also has selections for making perfect old fashioned hard ice cream of any air content, artisan gelato, fresh fruit sorbets, frozen lemonade, Italian Ice and frozen yogurt. You control the machine, it doesn’t control you!`,
    freezChamb: `Our hand made Stainless Steel freezing chamber is three times thicker than any other batch freezer. The thicker walled cylinder along with our stainless steel beater allow you to add whole nuts, cookies and fruits directly into the freezing chamber while the product is being made – AN EMERY THOMPSON EXCLUSIVE!`,
    capacity: `6 quarts per batch; 7.5 gallons (28.4 liters) of ice cream per hour and 6 gallons (22.5 liters) of fresh fruit sorbet per hour.`,
    link: "https://nebula.wsimg.com/a9003a1ed319363c9bb9a4ca0406d1c8?AccessKeyId=3852EE9A40CCFB24DDD0&disposition=0&alloworigin=1",
    specification: {
      motor: 'AGITATOR MOTOR: 1 H.P.',
      cu: `CONDENSING UNIT: 2 H.P.
      Self-contained using environmentally friendly 404-A refrigerant.`,
      electr: `ELECTRICAL: Single Phase, 60Hz, 220v  (50Hz available at additional cost) Export voltage available!`,
      dim: `DIMENSIONS: 19” wide x 34” tall x 28” deep *`,
      wc: '',
      sw: 'SHIPPING WEIGHT: 300 lbs. 22 cube'
    }
  },
  {
    picture: pic3,
    model: '12 Quart Batch Freezer',
    specific: `12 NW: WATER COOLED
    12 LA: AIR COOLED 
    Available in 1/60/230V. or 3/60/230
    *50Hz available at additional cost
    ​Includes INFINITE OVERRUN CONTROL`,
    intro: `12 Quarts/11 Liters (per batch) horizontal batch freezer for the production of hard ice cream, sorbet, Gelato, frozen yogurt, sherbet and Italian ice. All our machines are hand MADE IN THE U.S.A. All contact surfaces are stainless steel. Our batch freezers are proven to last 40-45 years of high production. All E.T. machines are AAA Dairy, U.L. and sanitary approved in accordance with ANSI/NSF standards.`,
    description: `Available in air or water cooled and the only machines available in single or three phase, our batch freezers with the touch-screen Infinite Overrun Control  allow you to select a product from the new bright display and GO! Plus you can still choose to set your overrun manually through the full range of speeds without losing torque (mixing power). With this batch freezer you can produce Artisan Gelato, any air content hard ice cream (low, medium, high), sorbet, Italian Ice, sherbet, and frozen yogurt. With 234 different beater speeds, you control the machine -  it doesn’t control you. `,
    freezChamb: `Our hand made Stainless Steel freezing chamber is six times thicker than any other batch freezer. The thicker walled cylinder along with our stainless steel beater allow you to add whole nuts, cookies and fruits directly into the freezing chamber while the product is being made – AN EMERY THOMPSON EXCLUSIVE!`,
    capacity: `48-60 quarts of finished premium ice cream per hour. 30 quarts of finished sorbet per hour.`,
    link: "https://nebula.wsimg.com/a9003a1ed319363c9bb9a4ca0406d1c8?AccessKeyId=3852EE9A40CCFB24DDD0&disposition=0&alloworigin=1",
    specification: {
      motor: 'AGITATOR MOTOR: 3 H.P.',
      cu: `CONDENSING UNIT: 3 H.P.  Copeland Scroll`,
      electr: `ELECTRICAL: Available 1/60/230V. or 3/60/230V. *50Hz available at additional cost. We will also custom build your new machine to match the voltage requirements in your country.`,
      dim: `DIMENSIONS: 23 1/2" wide x 37" deep x 49" high`,
      wc: `WATER CONNECTIONS: (If purchased as a water cooled machine) two 3/4" "garden hose" connections`,
      sw: `SHIPPING WEIGHT: 720 lbs. 45 cube.​`
    }
  },
  {
    picture: pic4,
    model: '24 Quart Batch Freezer',
    specific: `24 NW: WATER COOLED
    24 LA: AIR COOLED 
    Available in 1/60/230V. or 3/60/230
    ​*50Hz available at additional cost
    ​Includes INFINITE OVERRUN CONTROL`,
    intro: `24qt./22 liters (per batch) horizontal batch freezer for the production of hard ice cream, sorbet, gelato, frozen yogurt, sherbet and Italian ice. All our machines are hand made in the U.S.A. All contact surfaces are stainless steel. Our batch freezers are proven to last 40-45 years of high production. All E.T. machines are AAA Dairy, U.L. and sanitary approved in accordance with ANSI/NSF standards.`,
    description: `Available in air or water cooled and the only machine available in single or three phase. Our machines with the touch-screen Infinite Overrun Control  allow you to select a product from the new bright display and GO! Plus you can still choose to set your overrun manually through the full range of speeds without losing torque (mixing power). With this batch freezer you can produce Artisan Gelato, any air content hard ice cream (low, medium, high), sorbet, Italian Ice, sherbet, and frozen yogurt. With 234 different beater speeds, you control the machine -  it doesn’t control you.`,
    freezChamb: `Our hand made Stainless Steel freezing chamber is six time thicker than any other batch freezer. The thicker walled cylinder along with our stainless steel beater allow you to add whole nuts, cookies and fruits directly into the freezing chamber while the product is being made – AN EMERY THOMPSON EXCLUSIVE!`,
    link: "https://nebula.wsimg.com/a9003a1ed319363c9bb9a4ca0406d1c8?AccessKeyId=3852EE9A40CCFB24DDD0&disposition=0&alloworigin=1",
    specification: {
      motor: 'AGITATOR MOTOR: 3 H.P.',
      cu: `CONDENSING UNIT: 3 H.P.  Copeland Scroll. Self-contained using environmentally friendly 404-A refrigerant. All our refrigeration lines are seamless copper tubing. Our condensing units are from the world renowned Copeland Corporation.`,
      electr: `ELECTRICAL: Available 1/60/230V. or 3/60/230V. (50Hz available at additional cost) We will also custom build your new machine to match the voltage requirements in your country.`,
      dim: `DIMENSIONS: 23 1/2" wide x 37" deep x 49" high`,
      wc: `WATER CONNECTIONS: (If purchased as a water cooled machine) two 3/4" "garden hose" connections.`,
      sw: `SHIPPING WEIGHT: 720 lbs. 45 cube.​`
    }
  },
  {
    picture: pic5,
    model: '44 Quart Batch Freezer',
    specific: `44 BLT: WATER COOLED
    44 BLT-LC: AIR COOLED 
    Available in 3/60/230v or 3/50/380v 
    *50Hz available at additional cost
    ​Includes INFINITE OVERRUN CONTROL`,
    intro: `This is the largest production batch freezer in the world. It will produce 44 quarts/42 Liters (per batch) of hard ice cream, sorbet, frozen yogurt, sherbet and Italian Ice. All our machines are hand made in the U.S.A. All contact surfaces are stainless steel. Our batch freezers are proven to last 40-45 years of high production. All E.T. machines are AAA Dairy, U.L. and sanitary approved in accordance with ANSI/NSF standards. Note: air-cooled uses a remote condensing unit. Water cooled is self-contained.`,
    description: `Available in self-contained water cooled or remote air-cooled these machines include our new touch-screen Infinite Overrun Control. With this new design the control becomes even more user friendly. While the overrun can be adjusted manually as in previous models, this new bright touch screen also has selections for making perfect old fashioned hard ice cream of any air content, artisan gelato, fresh fruit sorbets, frozen lemonade, Italian Ice and frozen yogurt. You control the machine, it doesn’t control you!`,
    freezChamb: `Our hand made Stainless Steel freezing chamber is six times thicker than any other batch freezer. The thicker walled cylinder along with our cast stainless steel beater allows you to add whole nuts, cookies and fruits directly into the freezing chamber while the product is being made – AN EMERY THOMPSON EXCLUSIVE!`,
    capacity: `220 quarts of premium ice cream per hour. 110 quarts of Sorbet (Italian Ice) per hour.`,
    link: "https://nebula.wsimg.com/a9003a1ed319363c9bb9a4ca0406d1c8?AccessKeyId=3852EE9A40CCFB24DDD0&disposition=0&alloworigin=1",
    specification: {
      motor: 'AGITATOR MOTOR: 5 H.P.',
      cu: `CONDENSING UNIT: 6 H.P.`,
      electr: `ELECTRICAL: Available in 3/60/230 volt or 3/50/380 volt. *50Hz available at additional cost. We will also custom build your new machine to match the voltage requirements in your country.`,
      dim: `DIMENSIONS: 227 Wide x 54 Deep x 49 High`,
      wc: `WATER CONNECTIONS: 5/8 o.d. copper tubing`,
      sw: `SHIPPING WEIGHT: SHIPPING WEIGHT: 1050 lbs. Cube - 72​`
    }
  },
  {
    picture: pic6,
    model: '1.5-2 Quart Batch Freezer',
    specific: `AIR COOLED: Available in
    Single Phase, 60Hz, 110v`,
    intro: `Emery Thompson, the world leader in batch freezers since 1903, now introduces our up to 2-Quart (per production run) batch freezer. Built using the exact same designs and materials as our larger machines, the CB-100 will produce up to six quarts of frozen desserts per hour.  Being an Emery Thompson makes it the only choice of Italian Ice and sorbet manufacturers.
    Now you can invest in a Made in the U.S.A. Emery Thompson batch freezer with an even smaller footprint and price tag!`,
    description: ``,
    freezChamb: ``,
    capacity: `Up to 2 quarts per batch; 1.5 gallons per hour of ice cream, Gelato, sorbet and Homemade Ice Cream.`,
    link: "https://nebula.wsimg.com/a9003a1ed319363c9bb9a4ca0406d1c8?AccessKeyId=3852EE9A40CCFB24DDD0&disposition=0&alloworigin=1",
    specification: {
      motor: 'BEATER MOTOR: 1/10 H.P.',
      cu: `CONDENSING UNIT: .6 H.P.   Self-contained using environmentally friendly 404-A refrigerant.`,
      electr: `ELECTRICAL: 1/60/110V`,
      dim: `DIMENSIONS: 20.5 wide x 16.75 tall x 11.25 deep`,
      wc: ``,
      sw: `SHIPPING WEIGHT: 115 lbs.​`
    }
  },
]