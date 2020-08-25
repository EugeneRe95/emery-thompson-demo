import React from 'react'

import ioc from '../img/ioc.jpg'

function Ioc() {
    return (
        <div id="ioc">
            <h1 className="animated fadeInLeft">Exclusive Infinite Overrun Control</h1>
            <div className="container">
                <h2>NOW AVAILABLE ON EMERY THOMPSON BATCH FREEZERS*</h2>
                <h3>TOUCH SCREEN INFINITE OVERRUN CONTROL</h3>
                <p>Emery Thompson is proud to introduce a new and improved version of our exclusive IOC touchscreen. This powerful new device allows you to easily select from 11 products that correspond to 6 different preset dasher speeds. Each of those 6 speeds creates a predetermined amount of overrun, or product consistency, for your frozen dessert creation. It also features a manual speed setting** that allows you to choose virtually any speed you want. Just press the up or down arrows to choose the perfect dasher speed for you. It even has a digital timer that allows you to see how long the refrigeration has been turned on. And, it features an alarm that warns you when your product is getting too thick.</p>
                <figure>
                    <img src={ioc} alt=""/>
                    <figcaption>YOU CONTROL THE MACHINE – IT DOESN’T CONTROL YOU !</figcaption>  
                </figure>
                <p>And while all these new features are exciting improvements, the best part of this new touchscreen is the GET HELP feature. By pressing just a few buttons you can watch instructional videos that will teach you how to setup the machine, how to operate the machine, how to maintain the machine and how to troubleshoot problems, all from the convenience of the touchscreen. Click on the <a href="https://youtu.be/zudCrejKP5k" target="_blank" rel="noopener noreferrer">GET HELP</a> to see an example of the videos.</p>
                <p>**Our exclusive Infinite Overrun Control™* (I.O.C.) includes presets for the most popular frozen desserts, Plus you can still choose to set your overrun manually through the full range of speeds. It not only allows you to vary the speed of the drive, it does not lose torque (mixing power) across the speed range of the motor.</p>
                <table>
                    <tbody>
                        <tr>
                            <td>SUPER PREMIUM ICE CREAM</td>
                            <td>165 – 175 RPM’S</td>
                        </tr>
                        <tr>
                            <td>FROZEN CUSTARD</td>
                            <td>140 – 150 RPM’S</td>
                        </tr>
                        <tr>
                            <td>ARTISAN GELATO</td>
                            <td>140 – 150 RPM’S</td>
                        </tr>
                        <tr>
                            <td>SHERBET</td>
                            <td>160 – 170 RPM’S</td>
                        </tr>
                        <tr>
                            <td>FROZEN YOGURT</td>
                            <td>160 – 170 RPM’S</td>
                        </tr>
                        <tr>
                            <td>CREAM ICES</td>
                            <td>180 – 200 RPM’S</td>
                        </tr>
                        <tr>
                            <td>ITALIAN ICES</td>
                            <td>200 – 234 RPM’S</td>
                        </tr>
                        <tr>
                            <td>SORBET</td>
                            <td>200 – 234 RPM’S</td>
                        </tr>
                        <tr>
                            <td>FROZEN LEMONADE</td>
                            <td>200 – 234 RPM’S</td>
                        </tr>
                        <tr>
                            <td>ALL AMERICAN HOMEMADE ICE CREAM</td>
                            <td>190 - 234 RPM'S</td>
                        </tr>
                    </tbody>
                </table>
                <p className="warning">* I.O.C. not included on the Emery Thompson CB-100 or CB-200 Batch Freezers</p>
            </div>
        </div>
    )
}

export default Ioc
