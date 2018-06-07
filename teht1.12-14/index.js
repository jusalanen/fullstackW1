import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
        }
    }

    lottery = () => {
        const num = Math.floor(Math.random() * 6)
        this.setState({ selected: num })      
    }

    voting = () => {
        const num = this.state.selected
        const copy = this.state.votes
        copy[num] = copy[num] + 1
        this.setState({ votes: copy })
    }

    
    render() {
        let mostVotes = () => {
            let highest = 0
            for (let x = 0; x < 6; x++) {
                if (this.state.votes[x] > this.state.votes[highest]) {
                    highest = x;
                }
            }
            return highest
        }
      
        return (
            <div>
                <div>
                    {this.props.anecdotes[this.state.selected]}
                    <p>Votes: {this.state.votes[this.state.selected]}</p>
                </div>
                <button onClick={this.lottery}>next anecdote</button>
                <button onClick={this.voting}>vote</button>
                <div>
                    <h3>anecdote with most votes:</h3>
                    {this.props.anecdotes[mostVotes()]}
                    <p> has {this.state.votes[mostVotes()]} votes</p>
                </div>
            </div>
        )
    }
  }
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  ReactDOM.render(
    <App anecdotes={anecdotes} />, document.getElementById('root')
  )
