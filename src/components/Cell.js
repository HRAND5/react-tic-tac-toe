import React, { Component } from 'react'
import "./styles/cell.css"

class Cell extends Component {
    constructor(props) {
        super(props)

        this.state = {
            owner: "",
        }
    }

    clickHandler(event) {
        this.props.move(this, event.currentTarget)
    }

    render() {
        let classes = `cell ${this.state.owner}`
        return (
            <div id={this.props.id} className={classes} onClick={(event) => this.clickHandler(event)}>

            </div>
        )
    }
}

export default Cell