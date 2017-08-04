import React, { Component } from 'react';
import './App.css';

import math from 'mathjs';

import Button from './button';
import Display from './display';

class App extends Component {

    state = {
        output: "0",
        input: [],
        power: false
    };

    handleOnClick = (e) => {
        switch (e){
            case 'clear':
                console.log('cleared');
                this.setState({input:[], output:"0"});
                break;
            case 'power':
                console.log('switched');
                this.setState({input:[], output:""});
                break;
            case 'equal':
                console.log('calculated');
                let inputSting = this.state.input.join('');
                this.setState({input:[], output: math.eval(inputSting)});
                break;
            default:
                console.log('defaulted');
                let newArr = this.state.input;
                newArr.push(e);
                this.setState({input: newArr, output: this.state.input.join('')});
        }
    };

    render() {
        return (
            <div id="parent">
                <div id="container">
                    <Display result={this.state.output}/>
                    <Button label="C" value="clear" class="two-wide" onclick={this.handleOnClick}/>
                    <Button label="/" value="/" class="one" onclick={this.handleOnClick}/>
                    <Button label="x" value="*" class="one" onclick={this.handleOnClick}/>
                    <Button label="1" value="1" class="one" onclick={this.handleOnClick}/>
                    <Button label="2" value="2" class="one" onclick={this.handleOnClick}/>
                    <Button label="3" value="3" class="one" onclick={this.handleOnClick}/>
                    <Button label="-" value="-" class="one" onclick={this.handleOnClick}/>
                    <Button label="4" value="4" class="one" onclick={this.handleOnClick}/>
                    <Button label="5" value="5" class="one" onclick={this.handleOnClick}/>
                    <Button label="6" value="6" class="one" onclick={this.handleOnClick}/>
                    <Button label="+" value="+" class="one" onclick={this.handleOnClick}/>
                    <div id="two-tall">
                        <Button label="7" value="7" class="one" onclick={this.handleOnClick}/>
                        <Button label="8" value="8" class="one" onclick={this.handleOnClick}/>
                        <Button label="9" value="9" class="one" onclick={this.handleOnClick}/>
                        <Button label="ON/OFF" value="power" class="one" onclick={this.handleOnClick}/>
                        <Button label="0" value="0" class="one" onclick={this.handleOnClick}/>
                        <Button label="." value="." class="one" onclick={this.handleOnClick}/>
                    </div>
                    <Button label="=" value="equal" class="two-tall" onclick={this.handleOnClick}/>

                </div>
            </div>

        );
    }
}

export default App;
