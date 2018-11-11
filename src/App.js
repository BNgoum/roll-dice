import React, { Component } from 'react';
import './App.css';
import animationDés from './images/dés.gif';
import Des from './Components/Des/Des';
import ListeLances from './Components/ListeLances/ListeLances';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreDes: null,
      typeDes: null,
      res: [],
      nombreLances: 0,
      listeResultats: [],
      isDisplay: false,
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({
      nombreDes: 3,
      typeDes: 6
    })
  }

  handleChangeNbDes = (e) => {
    this.setState({
      nombreDes: e.target.value
    })
  }

  handleChangeTypeDes = (e) => {
    this.setState({
      typeDes: e.target.value
    })
  }

  displayLoading() {
    if (this.state.isLoading) {
      return (
          <div className="wrapper-animation">
            <img src={ animationDés } alt="Animation dés" />
          </div>
      )
  }
  }

  displayDes() {
    if (this.state.isDisplay) {
      return (
        <div className="wrapper-des">
          {this.state.res[0] ? <Des numeroDeLance={1} res={this.state.res[0]}/> : null}
          {this.state.res[1] ? <Des numeroDeLance={2} res={this.state.res[1]}/> : null}
          {this.state.res[2] ? <Des numeroDeLance={3} res={this.state.res[2]}/> : null}
        </div>
      )
  }
  }

  handleClick = () => {

    this.setState({
      isDisplay: false,
      isLoading: true
    })
    
    setTimeout(() => {
      let arrayRes = [];
      for(let i = 0 ; i < parseInt(this.state.nombreDes) ; i++) {
        let chiffreAleatoire = this.chiffreAleatoire(parseInt(this.state.typeDes));
        arrayRes.push(chiffreAleatoire);
      }

      this.setState( prevState => ({
        isDisplay: true,
        nombreLances: this.state.nombreLances + 1,
        res: arrayRes,
        listeResultats: [...prevState.listeResultats, arrayRes],
        isLoading: false
      }))
    }, 2000);
    
    
  }

  chiffreAleatoire(max) {
    return Math.floor(Math.random() * ((max + 1) - 1) + 1);
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper-left">
          <h1>Lancé de dés</h1>

          <div className="wrapper-inputs">
            <div className="wrapper-input">
              <label>Nombre de dés</label>
              <select value={this.state.nombreDes} onChange={this.handleChangeNbDes}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div className="wrapper-input">
              <label>Type de dés</label>
              <select value={this.state.typeDes} onChange={this.handleChangeTypeDes}>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>

          <button className="button-lancer" onClick={this.handleClick}>Lancer !</button>

          <hr></hr>

          { this.displayDes() }

          { this.displayLoading() }
        </div>

        <div className="wrapper-right">
          <ListeLances lances={this.state.listeResultats} />
        </div>
      </div>
    );
  }
}

export default App;
