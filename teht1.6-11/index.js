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
                <td width="80">{teksti}:</td><td width="60">{num} %</td>
            </div>
        )
    }
    return (
    <div>
        <tr><td width="80">{teksti}: </td><td width="30">{num}</td></tr>
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
    <div><table>
        <tr><Statistic teksti="hyvä" num={props.hy} /></tr>
        <tr><Statistic teksti="neutraali" num={props.ne} /></tr>
        <tr><Statistic teksti="huono" num={props.hu} /></tr>
        <tr><Statistic teksti= "keskiarvo" num={props.ka} /></tr>
        <tr><Statistic teksti="positiivisia" num={props.ph} /></tr>
    </table></div>
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

    klik = (txt) => {
        return () => {
            this.setState({ [txt]: this.state[txt] + 1 });
        }          
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
                    <Button handleClick={this.klik("countHyv")} text="hyvä" />
                    <Button handleClick={this.klik("countNeut")} text="neutraali" />
                    <Button handleClick={this.klik("countHuo")} text="huono" />
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
