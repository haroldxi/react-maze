import React from 'react'
import Cell from './Cell'

class Game extends React.Component{
    constructor () {
        super()
        this.createBoard = this.createBoard.bind(this)
}

    createBoard () {
        console.log(this.props.obstacles)
        let board = [];
        let index = 0;
        for(let i = 0; i < this.props.columns; i++){
            for(let j = 0; j < this.props.rows; j++){
                index++
                    board.push(<Cell key={index}
                                       counter={index}
                                       player={this.props.player}
                                       obstacles={this.props.obstacles}
                                        path = {this.props.path}
                                        showPath = {this.props.showPath}/>)

            }
        }
        return board
    }


    render(){
        return(
            <div className="gameBoard">
                {this.createBoard()}
                <p>Moves Made: {this.props.steps}</p>
                <p></p>
                <p>Moves Remaining: {this.props.maxMoves - this.props.steps}</p>
            </div>
        )
    }

}
export default Game
