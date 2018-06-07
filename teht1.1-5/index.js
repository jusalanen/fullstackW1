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
    const osa1 = {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    }
    const osa2 = {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    }
    const osa3 = {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  
    return (
      <div>
         <Otsikko kurssi={kurssi} />
         <Sisalto o1={osa1.nimi} t1={osa1.tehtavia} 
            o2={osa2.nimi} t2={osa2.tehtavia}
            o3={osa3.nimi} t3={osa3.tehtavia} />
         <Yhteensa x={osa1.tehtavia} y={osa2.tehtavia} z={osa3.tehtavia} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));
