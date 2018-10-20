import React from 'react'
import {Button, Icon} from 'semantic-ui-react'

class OnScreenNav extends React.Component{
    render(){
        return(
            <div className = "screenNav">
            <Button.Group vertical>
                <Button disabled><Icon /></Button>
                <Button onClick = {this.props.movePlayer} type="submit" value="Left" ><Icon name = "arrow left" /></Button>
                <Button disabled><Icon /></Button>
            </Button.Group>
            <Button.Group vertical>
                <Button onClick = {this.props.movePlayer} type="submit" value="Up" ><Icon name = "arrow up"  /></Button>
                <Button disabled><Icon /></Button>
                <Button onClick = {this.props.movePlayer} type="submit" value="Down" ><Icon name = "arrow down" /></Button>
            </Button.Group>
                <Button.Group vertical>
                    <Button disabled><Icon /></Button>
                    <Button onClick = {this.props.movePlayer} type="submit"  value="Right" ><Icon name = "arrow right" /></Button>
                    <Button disabled><Icon /></Button>
                </Button.Group>

            </div>
        )
    }
}
export default OnScreenNav
