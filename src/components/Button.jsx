import React, { Component } from 'react'

class Button extends React.Component {
    state = {
        count: 0,
    }
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        const { count } = this.state
        return(
            <div>
                <h1>Manzanas: {count} </h1> {/*también podría ser this.state.count*/}
                <button type="button" onClick={this.handleClick}>
                    Agregar
                </button>
            </div>
        )
    }
}

export default Button