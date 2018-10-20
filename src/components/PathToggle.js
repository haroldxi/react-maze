import React from 'react'
import {Button} from 'semantic-ui-react'

class PathToggle extends React.Component{

    render(){

        return(
            <Button toggle = {this.props.showPath} onClick = {this.props.pathToggle} className = "btn"  value="Path Toggle" content = "Path Toggle" type="submit"/>
        )
    }
}
export default PathToggle
