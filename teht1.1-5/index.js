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
    return (
        <div>
            <Osa nimi = {props.o1} teht = {props.t1} />
            <Osa nimi = {props.o2} teht = {props.t2} />
            <Osa nimi = {props.o3} teht = {props.t3} />
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <div>
            <p>Yhteensä {props.x + props.y + props.z} tehtävää</p>
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
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto o1={osa1} t1={tehtavia1} 
            o2={osa2} t2={tehtavia2}
            o3={osa3} t3={tehtavia3} />
            <Yhteensa x={tehtavia1} y={tehtavia2} z={tehtavia3} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
