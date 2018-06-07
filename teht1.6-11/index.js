import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.ots}</h1>
        </div>
    )
}

const Button = ({handleClick, text}) => { 
    return (
    <button onClick={handleClick}>
      {text}
    </button>
    )
}

const Statistic = ({teksti, num}) => {
    if(teksti === "positiivisia") {
        return (
            <div>
                <p>{teksti}: {num} %</p>
            </div>
        )
    }
    return (
    <div>
        <p>{teksti}: {num}</p>
    </div>
    )
}

const Statistics = (props) => {
    if(props.hy === 0 & props.ne === 0 & props.hu === 0) {
        return (
            <div><p>ei yhtään palautetta annettu</p></div>
        )
    }  
    return (
    <div>
        <Statistic teksti="hyvä" num={props.hy} />
        <Statistic teksti="neutraali" num={props.ne} />
        <Statistic teksti="huono" num={props.hu} />
        <Statistic teksti= "keskiarvo" num={props.ka} />
        <Statistic teksti="positiivisia" num={props.ph} />
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
        const {countHyv, countNeut, countHuo} = this.state
        const tot = countHyv + countNeut + countHuo
        const ka = () => (countHyv - countHuo) / tot
        const ph = () => countHyv / tot * 100
        return (
            <div>
                <div><Otsikko ots="Anna palautetta" /></div>  
                <div>
                    <Button handleClick={this.klikHyv} text="hyvä" />
                    <Button handleClick={this.klikNeut} text="neutraali" />
                    <Button handleClick={this.klikHuo} text="huono" />
                </div>                
                <div><Otsikko ots="statistiikka" /></div>
                <div>
                    <Statistics hy = {countHyv} ne = {countNeut} hu = {countHuo} 
                        ka = {ka().toFixed(2)} ph = {ph().toFixed(1)} />
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
