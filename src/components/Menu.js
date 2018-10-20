import React from 'react';
// Menu component where you set the columns and rows for the game


class Menu extends React.Component{

    render(){
        return(
            <div className="menu">
                <form onSubmit={this.props.handleSubmit}>
                    <div className="input-field">
                        <input
                            name="columns"
                            onChange={this.props.handleChange}
                            value={this.props.columns}
                            id="columns"
                            type="number"
                            min="7"
                            max="20"
                            className="validate"/>
                        <label className="active" hmtlfor="columns">Columns</label>
                    </div>
                    <div className="input-field">
                        <input
                            name="rows"
                            onChange={this.props.handleChange}
                            value={this.props.rows}
                            id="rows"
                            type="number"
                            min="7"
                            max="20"
                            className="validate"/>
                        <label className="active" hmtlfor="rows">Rows</label>
                    </div>
                    <input className="btn" value="Start" type="submit"/>
                </form>
            </div>
        )
    }
}

export default Menu;
