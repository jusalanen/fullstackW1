import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.ots}</h1>
        </div>
    )
}

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        countHyv: 0,
        countNeut: 0,
        countHuo: 0
      }

    }
    
    klikHyv = () => {
        this.setState({
            countHyv: this.state.countHyv + 1
        })
      }
    
    klikNeut = () => {
        this.setState({
            countNeut: this.state.countNeut + 1
        })
    }

    klikHuo = () => {
        this.setState({
            countHuo: this.state.countHuo + 1
        })
    }
  
    render() {
      return (
        <div>
          <div><Otsikko ots="Anna palautetta" /></div>  
          <div>{this.state.counter}</div>
          <div>
            <button onClick={this.klikHyv}>hyvä</button>
            <button onClick={this.klikNeut}>neutraali</button>
            <button onClick={this.klikHuo}>huono</button>
          </div>
          <div><Otsikko ots="statistiikka" /></div>
            <div>
              <p>hyvä: {this.state.countHyv}</p>
              <p>neutraali:  {this.state.countNeut}</p>
              <p>huono: {this.state.countHuo}</p>
            </div>
        </div>
      )
    }
}
  
ReactDOM.render(<App />, document.getElementById('root'));
