import React, { Component } from 'react';
import './Des.css';

class Des extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="wrapper-de">
                <h4>{this.props.libelle} {this.props.numeroDeLance}</h4>
                { this.props.libelle === "Total" ? <p className="de-resultat">{this.props.res}</p> : <p>{this.props.res}</p> }
            </div>
        )
    }
}

export default Des;