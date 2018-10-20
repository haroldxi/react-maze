import React from 'react'
import {Button} from 'semantic-ui-react'

class Reset extends React.Component{


    render(){
        return(
            <Button onClick = {this.props.clearState} className = "btn" content = "Reset" value="Reset" type="submit"/>
        )
    }
}

export default Reset
