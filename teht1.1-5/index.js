import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    )
}

const Sisalto = (props) => {
    const taul = props.taul
    return (
        <div>
            <Osa nimi = {taul[0].nimi} teht = {taul[0].tehtavia} />
            <Osa nimi = {taul[1].nimi} teht = {taul[1].tehtavia} />
            <Osa nimi = {taul[2].nimi} teht = {taul[2].tehtavia} />
        </div>
    )
}

const Yhteensa = (props) => {
    const taul = props.taul
    return (
        <div>
            <p>Yhteensä {taul[0].tehtavia + taul[1].tehtavia + taul[2].tehtavia} tehtävää</p>
        </div>
    ) 
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.nimi} {props.teht}</p>
        </div>
    )
    
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }    
    return (
        <div>
            <Otsikko kurssi={kurssi.nimi} />
            <Sisalto taul={kurssi.osat} />
            <Yhteensa taul={kurssi.osat}  />
        </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));
