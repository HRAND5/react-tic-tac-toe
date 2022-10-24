import React, { Component } from 'react'
import "./styles/grid.css"
import Cell from './Cell';

const indexes = [[0,1,2], [3,4,5], [6,7,8]]

class Grid extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        game: Array.from({length: 9}, () => 0),
        turn: true // true=red, false=blue 
      }

      this.move = this.move.bind(this)
    }

    move(clickedCell, clickedDiv) {
        let color = this.state.turn ? "red" : "blue"
        let otherColor = !this.state.turn ? "red" : "blue"

        clickedDiv.classList.add(color)
        clickedDiv.classList.remove(otherColor)

        this.setState({
            turn: !this.state.turn
        })
    }

    createRow(index) {
        return (
            <div className="row flexcontainer" key={index}>
                {indexes[index].map(i => (<Cell id={i} key={i} move={this.move}/>))}
            </div>
        )
    }

    render() {
        return (
                <div className="grid flexcontainer">
                    {indexes[0].map(index => (this.createRow(index)))}         
                </div>
        )
    }
}

export default Grid