import React, {Component} from 'react';

class Button extends Component{

    handleClick = () => {
        this.props.onclick(this.props.value);
    }

    render(){

        return(
            <div className={this.props.class} onClick={this.handleClick}>{this.props.label}</div>
        )
    }
};

export default Button