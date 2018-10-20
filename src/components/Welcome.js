import React from 'react'
import Menu from './Menu'

class Welcome extends React.Component{
    render(){
        return(
            <div>
                <h2>Maze Game</h2>
                <Menu               columns={this.props.columns}
                                    rows={this.props.rows}
                                    handleSubmit={this.props.handleSubmit}
                                    handleChange={this.props.handleChange} />
            </div>
        );
    }
}
export default Welcome
