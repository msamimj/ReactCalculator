import React, {Component} from 'react';

class Display extends Component{
    render(){
        return(
            <div id="display">{this.props.result}</div>
        )
    }
}

export default Display;