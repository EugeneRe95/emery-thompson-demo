import React, { Component } from 'react'

export class FreezerSpecifc extends Component {
    render() {
        return (
            <div id="freezer-specification">
                <div className="freezer-specification-container">
                    <div className="heading">
                        <figure>
                            <figcaption>{this.props.data.model}</figcaption>
                            <img src={this.props.data.picture} alt="" />
                        </figure>
                        <p>{this.props.data.specific}</p>
                    </div>
                    <div className="body">
                        {(this.props.data.intro!=='') ? <p>{this.props.data.intro}</p> : null}
                        {(this.props.data.description !== '') ?
                            <div className="item">
                                <h2>Description</h2>
                                <p>{this.props.data.description}</p>
                            </div> : null
                        }
                        {(this.props.data.freezChamb !== '') ?
                            <div className="item">
                                <h2>Freezing Chamber</h2>
                                <p>{this.props.data.freezChamb}</p>
                            </div> : null
                        }
                        {(this.props.data.capacity !== '') ?
                            <div className="item">
                                <h2>Capacity</h2>
                                <p>{this.props.data.capacity}</p>
                            </div> : null
                        }
                        <div className="item">
                            <h2>Specification</h2>
                            {(this.props.data.specification.motor !== '') ? <p>{this.props.data.specification.motor}</p> : null}
                            {(this.props.data.specification.cu !== '') ? <p>{this.props.data.specification.cu}</p> : null}
                            {(this.props.data.specification.electr !== '') ? <p>{this.props.data.specification.electr}</p> : null}
                            {(this.props.data.specification.dim !== '') ? <p>{this.props.data.specification.dim}</p> : null}
                            {(this.props.data.specification.wc !== '') ? <p>{this.props.data.specification.wc}</p> : null}
                            {(this.props.data.specification.sw !== '') ? <p>{this.props.data.specification.sw}</p> : null}
                            <p>NOTE: Click <a href={this.props.data.link} target="_blank" rel="noopener noreferrer">HERE</a> for full electrical specifications for Emery Thompson batch freezers. Call Emery Thompson if you have any questions about electrical connection of your machine before installation.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FreezerSpecifc
