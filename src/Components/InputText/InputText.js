import React, { Component } from 'react';
import './InputText.css';

class InputText extends Component {
    render() {
        return(
            <div className="wrapper-des">
                <label>{this.props.label}</label>
                <input type="text" name={this.props.name} />
            </div>
        )
    }
}

export default InputText;