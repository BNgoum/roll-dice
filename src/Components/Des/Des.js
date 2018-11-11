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
                <h4>Dé N° {this.props.numeroDeLance}</h4>
                <p>{this.props.res}</p>
            </div>
        )
    }
}

export default Des;