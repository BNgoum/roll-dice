import React, { Component } from 'react';
import './ListeLances.css'

class ListeLances extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }
    }

    componentDidMount() {
        this.setState({
            total: this.props.total
        })
    }

    render() {
        return(
            <div className="wrapper-historique">
                <h3>Historique des lancés</h3>
                <ul>
                    {
                        this.props.lances.map((element, index) => {
                            let val1, val2, val3;
                            for (const i in element[1]) {

                                if ( i === "0" ) {
                                    val1 = element[1][i];
                                }
                                else if ( i === "1" ) {
                                    val2 = element[1][i];
                                }
                                else {
                                    val3 = element[1][i];
                                }
                            }

                            return (
                                <li key={index.toString()}>
                                    { val1 ? <p>{ val1 }</p> : null}
                                    { val2 ? <p>{ val2 }</p> : null}
                                    { val3 ? <p>{ val3 }</p> : null}
                                    <p className="text-resultat">{element[0]}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ListeLances;