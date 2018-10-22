import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/Welcome'
import Board from './components/Board'
import './App.css';

class App extends Component {
    state = {
        columns: 10,
        rows: 10,
        gameStart: false,
        player: 1,
        obstacles: [],
        steps: 0,
        path: [],
        showPath: false,
        maxMoves: 100
    }

    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);
    createObstacles = this.createObstacles.bind(this);
    movePlayer = this.movePlayer.bind(this);
    followPath = this.followPath.bind(this);
    clearState = this.clearState.bind(this);
    pathToggle = this.pathToggle.bind(this);

    // Start game, send columns and rows to css and set player position
    handleSubmit(e){
        e.preventDefault();
        const {columns, rows } = this.state;
        // should randomize this (used to start in the middle fo the map)
        //let playerPosition = ((columns * rows) / 2) % 2 === 0 ? ((columns * rows) / 2) - columns/2 : Math.ceil((columns * rows) / 2 );
        let playerPosition = Math.floor(Math.random()*(columns)*(rows))
        document.documentElement.style.setProperty("--columns", columns);
        document.documentElement.style.setProperty("--rows", rows);
        this.setState({ gameStart: true, player: playerPosition }, () =>{
            this.createObstacles();
        });
    }

    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    movePlayer(e){
        const target = e.target;
        const value = target.value;
        this.followPath();
        if(this.state.steps === this.state.maxMoves){
            alert(`Game finished: Out of Moves.`)
            this.clearState()
        }
        if(this.state.obstacles.includes(this.state.player)){
            this.removeObstacles(this.state.player);
        }
        if(e.keyCode === 39 || value === 'Right'){
            // right
            if(this.state.player+1 <= this.state.columns * this.state.rows && this.state.player % this.state.columns !== 0  ){
                this.setState({player: this.state.player + 1, steps: this.state.steps + 1 })
            } else this.setState({player: this.state.player})
        } else if(e.keyCode === 37 || value === 'Left'){
            //left
            if(this.state.player-1 > 0 && this.state.player % this.state.columns !== 1){
                this.setState({ player: this.state.player - 1, steps: this.state.steps + 1 })
            } else this.setState({player: this.state.player})
        } else if(e.keyCode === 38 || value === 'Up'){
            // up
            if(this.state.player - this.state.columns > 0){
                this.setState({player: this.state.player - this.state.columns, steps: this.state.steps + 1 })
            } else this.setState({ player: this.state.player })
        } else if(e.keyCode === 40 || value === 'Down'){
            //down
            if(this.state.player + Number(this.state.columns) <= this.state.columns * this.state.rows){
                this.setState({player: this.state.player + Number(this.state.columns), steps: this.state.steps + 1 })
            } else this.setState({player: this.state.player })
        }
    }

    removeObstacles(obstacles){
        let array = [...this.state.obstacles];
        let index = array.indexOf(obstacles);
        array.splice(index,1);
        this.setState({ obstacles: array }, () => {
             if(this.state.obstacles.length === 0 ) {
                alert(`Game finished: You Won! You took ${this.state.steps - 1 } steps`)
                this.clearState()
            }
        })
    }

    createObstacles(){
        const {columns, rows, player } = this.state;
        let array = [];
        let index = 0;
        for(let i = 0; i < columns; i++){
            for(let j = 0; j < rows; j++){
                index++
                if(Math.ceil(Math.random()*10) === 5) {
                    if(index !== player) array.push(index);
                }
            }
        }

        this.setState({ obstacles: array })
    }

    followPath(){
        const {player} = this.state;
        let array = this.state.path;
        array.push(player)
        this.setState({path : array})
    }

    pathToggle(){
        let notShowPath = !this.state.showPath
        this.setState({
            showPath: notShowPath
        })
    }

    clearState(){
        this.setState({
            columns: 10,
            rows: 10,
            gameStart: false,
            player: 1,
            obstacles: [],
            steps: 0,
            path: [],
            showPath: false,
            maxMoves: 100
        })
    }

  render() {
      return (
          <Router>
              <div className="App">
                  <Route
                      exact path="/"
                      render={() => (
                          !this.state.gameStart ? (
                              <Welcome
                                  columns={this.state.columns}
                                  rows={this.state.rows}
                                  handleSubmit={this.handleSubmit}
                                  handleChange={this.handleChange} />
                          ) : (
                              <Board
                                  movePlayer={this.movePlayer}
                                  columns={this.state.columns}
                                  rows={this.state.rows}
                                  player={this.state.player}
                                  steps={this.state.steps}
                                  obstacles={this.state.obstacles}
                                    path = {this.state.path}
                                clearState = {this.clearState}
                                showPath = {this.state.showPath}
                              pathToggle = {this.pathToggle}
                              maxMoves = {this.state.maxMoves}/>
                          )
                      )
                      }
                  />
              </div>
          </Router>
      );
  }
}

export default App;
