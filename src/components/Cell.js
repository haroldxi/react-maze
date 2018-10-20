import React from 'react';
//checks if the square is either the player or a red square

class Cell extends React.Component{
    render(){
        return(
            <div className={ `${ this.props.counter === this.props.player ? "player" : "cell"}
							${ this.props.obstacles.includes(this.props.counter) ? "obstacles" : ""}
							${(this.props.path.includes(this.props.counter)&& this.props.showPath) ? "path" : ""}`}>
            </div>
        )
    }
}
export default Cell;

