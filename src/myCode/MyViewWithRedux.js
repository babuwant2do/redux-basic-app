import React, { Component } from 'react';

//Redux related: additional imports(2) for Redux
import { connect } from 'react-redux'
import {incrementNumber, changeNumberPolar} from './MyAction'

class MyViewWithRedux extends Component{
    constructor(props){
        super(props);
        this.state = {
            // number: 5, //Redux related: we will put it in the Redux store
            incrementBy:1
        }
    }

    render(){
        return(
            <div>
                With Redux <br/>
                Number: {this.props.number}<br/>
                Increnent By: {this.state.incrementBy}<br/>
                {/* for redux : add this .props: this.props.changeSign() */}
                <button onClick={() => this.props.changeSign() } > change Sign </button>
                <br/>
                Insert Increment BY:
                <input value={this.state.incrementBy} onChange={this.handleIncrementbyChange}></input>
                {/* for redux : add this .props: this.props.increaseNumber() */}
                <button onClick={() => this.props.increaseNumber(this.state.incrementBy) } > Increment </button>
            </div>
        );
    }
/*
    increaseNumber(){
        const newNumber = Number(this.state.number)  + Number(this.state.incrementBy);
        this.setState({number: newNumber})
    }

    changeSign(){
        const newNumber = this.state.number * -1;
        this.setState({number: newNumber})
    }
*/
    handleIncrementbyChange = (event) => {
        this.setState({ incrementBy: event.target.value });
    };

}


// for redux : maps state Item to Needed property for this component.
const mapStateToProps = state => {
    return {
        // or state.MyReducer.number
        number: state.number
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        changeSign: () => {
        dispatch(changeNumberPolar())
      },
      increaseNumber: (numIncreaseBy) => {
        dispatch(incrementNumber(numIncreaseBy))
      }
    }
  }

  const MyViewWithReduxConnect = connect(
    mapStateToProps,
    mapDispatchToProps 
  )(MyViewWithRedux)

export default MyViewWithReduxConnect;
