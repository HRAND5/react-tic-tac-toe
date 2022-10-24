import React, { Component } from 'react'
import "./styles/cell.css"

class Cell extends Component {
    constructor(props) {
        super(props)

        this.state = {
            owner: ""
        }
    }

    clickHandler(event) {
        this.props.move(this, event.currentTarget)
    }

    render() {
        return (
            <div className="cell" onClick={(event) => this.clickHandler(event)}>

            </div>
        )
    }
}

export default Cell