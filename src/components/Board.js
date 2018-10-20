import React  from 'react';
import Game from './Game'
import Reset from './Reset'
import PathToggle from './PathToggle'
import OnScreenNav from './OnScreenNav'
import {Button} from 'semantic-ui-react'

class Board extends React.Component {
    render(){
        return(
            <div className="board"
                 ref={game => game && game.focus()}
                 onKeyDown={this.props.movePlayer}
                 tabIndex="0">
                <h3> Welcome </h3>
                <Game
                    columns={this.props.columns}
                    rows={this.props.rows}
                    player={this.props.player}
                    steps={this.props.steps}
                    obstacles={this.props.obstacles}
                    path = {this.props.path}
                    showPath = {this.props.showPath}/>
                <Button.Group>
                <Reset clearState={this.props.clearState}/>
                <PathToggle pathToggle = {this.props.pathToggle} showPath = {this.props.showPath}/>
                    </Button.Group>
                <OnScreenNav movePlayer = {this.props.handleOnScreenNav} />
            </div>
        )
    }
}


export default Board
