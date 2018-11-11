import React, { Component } from 'react';
import './ListeLances.css'

class ListeLances extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="wrapper-historique">
                <h3>Historique des lancés</h3>
                <ul>
                    {
                        this.props.lances.map((element, index) => {
                            console.log('Index : '+ index + ', element : ' + element)
                            let val1, val2, val3;
                            for (const i in element) {
                                // TODO : key list

                                if ( i === "0" ) {
                                    val1 = element[i];
                                }
                                else if ( i === "1" ) {
                                    val2 = element[i];
                                }
                                else {
                                    val3 = element[i];
                                }
                            }
                            return (
                                <li key={index.toString()}>
                                    { val1 ? <p>{ val1 }</p> : null}
                                    { val2 ? <p>{ val2 }</p> : null}
                                    { val3 ? <p>{ val3 }</p> : null}
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