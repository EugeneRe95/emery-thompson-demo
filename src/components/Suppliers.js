import React from 'react'

function Suppliers() {
    return (
        <div id="suppliers">
            <h1 className="animated fadeInLeftBig">WHERE TO BUY THE BEST ?</h1>
            <div className="container">
                    <p className="heading">Over many years, my customers have shared with me where they buy the best products and obtain the best services for their frozen dessert businesses. The following is a list of where to buy the best for your business. Please contact me for additional recommendations or to add your favorite supplier to our list. 718-588-7300.</p>
                <div className="suppliers">
                    {suppliers.map(item => (
                        <div className="item">
                            <p>{item.product}</p>
                            <div>
                                {item.body} <br />
                                <a href={item.link}>{item.linkName}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Suppliers

const suppliers = [
    {
        body: `Kate's Waffle Cone Mixes
        Katelyn Williams
        Portland, OR
        kateswafflecones@gmail.com`,
        link: `https://www.kateswafflecones.com`,
        linkName: `www.kateswafflecones.com`,
        product: `Gluten-free and vegan waffle cone mixes (that taste amazing!)`
    },
    {
        body: ` I.RICE & COMPANY, INC.
        11500 Roosevelt Boulevard
        Building D
        Philadelphia, PA 19116
        Steve Kuhl - President
        Sales@iriceco.com`,
        link: `https://www.iriceco.com`,
        linkName: `www.iriceco.com`,
        product: `ITALIAN ICE FLAVORS SORBET FLAVORS`
    },
    {
        body: `DIPPIN FLAVORS
        Sensient Flavors
        1820 South Third Street
        St. Louis, MO 63104
        800-886-DIPN`,
        link: `https://www.dippinflavors.com`,
        linkName: `www.dippinflavors.com`,
        product: `Ice cream flavors and toppings`
    },
    {
        body: ` FABBRI GELATO FLAVORS
        Fabbri USA LLC
        46-01 22nd Street
        Long Island City, NY 11101
        718-764-8311`,
        link: `https://www.fabbriusa.com`,
        linkName: `www.fabbriusa.com`,
        product: `Gelato Flavors`
    },
    {
        body: `THE BENJAMIN P. FORBES COMPANY
        800 Ken Mar Industrial Parkway
        Broadview Hts, Ohio 44147
        800-433-1090`,
        link: 'https://www.forbeschocolate.com',
        linkName: `www.forbeschocolate.com`,
        product: `Powdered chocolate and chocolate chips`
    },
    {
        body: `GREEN MOUNTAIN FLAVORS, INC.
        442 Treasure Drive
        Oswego, IL 60543
        Stan Sitton – President
        stan@greenmountainflavors.com
        800-639-8653`,
        link: 'https://www.greenmountainflavors.com',
        linkName: `www.greenmountainflavors.com`,
        product: `All-Natural flavors and colors for ice cream, soft serve, gelato, sorbet, Italian ice, custard, sherbet and frozen yogurt`
    },
    {
        body: `Greenwood Ice Cream
        4829 Peachtree Rd.
        Atlanta, GA. 30341
        Mitchell F. Williams - President
        800-678-6166`,
        link: 'https://www.greenwoodicecream.com',
        linkName: `www.greenwoodicecream.com`,
        product: `Liquid mixes for soft serve ice cream, yogurt, hard pack ice cream and gelato, Powdered mixes for soft serve yogurts, ice creams and gelatos`
    },
]