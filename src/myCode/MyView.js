import React, { Component } from 'react';

export default class MyView extends Component{
    constructor(props){
        super(props);
        //local state
        this.state = {
            // the number X, on which we have to impose the action.
            number: 5, 
            // the number Y, which is used to calculate new value of X
            incrementBy:1 
        }
    }

    render(){
        return(
            <div>
                Number: {this.state.number}<br/>
                Increnent By: {this.state.incrementBy}<br/>
                
                {/* Button to change the Sign/Magnitude */}
                <button onClick={() => this.changeSign() } > change Sign </button>
                <br/>
                Insert Increment BY:
                {/* Input field to insert the value of increment by. */}
                <input value={this.state.incrementBy} onChange={this.handleIncrementbyChange}></input>
                {/* Button to increment the Number */}
                <button onClick={() => this.increaseNumber() } > Increment </button>
            </div>
        );
    }

    // OnClick call back function for Increment Number button
    increaseNumber(){
        const newNumber = Number(this.state.number)  + Number(this.state.incrementBy);
        this.setState({number: newNumber})
    }

    // OnClick call back function for Magnitude change Button
    changeSign(){
        const newNumber = this.state.number * -1;
        this.setState({number: newNumber})
    }

    // OnChange callback function for increment By input field
    handleIncrementbyChange = (event) => {
        this.setState({ incrementBy: event.target.value });
    };

}
