import React, { Component } from 'react'

class Classcomponents extends Component {
    render() {
        return (
            <div>
            <h1>This is class component</h1> 
            <h2> {this.props.name} </h2>
            <h2> { this.props.age} </h2>
            </div>
        )
    }
}

export default Classcomponents