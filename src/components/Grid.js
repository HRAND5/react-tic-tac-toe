import React, { Component } from 'react'
import "./styles/grid.css"
import Cell from './Cell';

const indexes = [[0,1,2], [3,4,5], [6,7,8]]

class Grid extends Component {
    constructor(props) {
      super(props)
        
      // -1=blue/false, notclaimed=0  and  red=1/true.  
      this.state = {
        game: Array.from({length: 9}, () => 0), 
        turn: true,
        winner: 0
      }

      this.move = this.move.bind(this)
    }

    checkDiagonals(g) {
        // Sum over diagonals. 
        let d1 = g[0] + g[4] + g[8]
        let d2 = g[2] + g[4] + g[6]
        
        //console.log(d1)
        //console.log(d2)

        //  A winner has been found if one of the sums is 3 or -3.
        // If a winner has been found, the sum of the two diagonals will always be positive if red has one, opposite if blue has one. This entire function could be a oneliner, although that would be considerably less readable. 
        return ((Math.abs(d1) == 3 || Math.abs(d2) == 3) ? Math.sign(d1 + d2) : 0)
    }

    checkRows(g) {
        // Sum over rows 
        let r1 = g[0] + g[1] + g[2] 
        let r2 = g[3] + g[4] + g[5] 
        let r3 = g[6] + g[7] + g[8]

        // A winner has been found if one of the sums is 3 or -3.
        // If a winner is found, and the biggest number is 3, then red has one. If a winner has been found and the greatest number is less than 3, one of the numbers must be -3, hence blue is the winner. Again this could be a oneliner, but would be even more atrocious to read. 
        if (Math.abs(r1) == 3 || Math.abs(r2) == 3 || Math.abs(r3) == 3) {
            return (Math.max(r1, r2, r3) == 3 ? 1 : -1) 
        } else {
            return 0
        }
    }

    checkColumns(g) {
        // Sum over rows 
        let c1 = g[0] + g[3] + g[6] 
        let c2 = g[1] + g[4] + g[7] 
        let c3 = g[2] + g[5] + g[8]

        // A winner has been found if one of the sums is 3 or -3.
        // If a winner is found, and the biggest number is 3, then red has one. If a winner has been found and the greatest number is less than 3, one of the numbers must be -3, hence blue is the winner. Again this could be a oneliner, but would be even more atrocious to read. 
        if (Math.abs(c1) == 3 || Math.abs(c2) == 3 || Math.abs(c3) == 3) {
            return (Math.max(c1, c2, c3) == 3 ? 1 : -1) 
        } else {
            return 0
        }
    }

    checkGameEnd(g) {
        return this.checkDiagonals(g) + this.checkRows(g) + this.checkColumns(g)
    }

    move(clickedCell, clickedDiv) {
        if (!this.state.winner) {
            if (clickedCell.state.owner == "") {

                let color = this.state.turn ? "red" : "blue"
                clickedCell.setState({
                    owner: color
                })

                let g = this.state.game 
                g[clickedDiv.id] = this.state.turn ? 1 : -1
                this.setState({
                    turn: !this.state.turn,
                    winner: this.checkGameEnd(g)
                })
            }
        }
    }

    createRow(index) {
        return (
            <div className="row flexcontainer" key={index}>
                {indexes[index].map(i => (<Cell id={i} key={i} move={this.move}/>))}
            </div>
        )
    }

    restartGame() {
        this.setState({
            game: Array.from({length: 9}, () => 0), 
            turn: true,
            winner: 0
          })
    }

    render() {
        let status = ""
        if (!this.state.winner) {
            status = `It is currently ${this.state.turn ? "red" : "blue"}'s turn`
        } else {
            status = `The winner is ${this.state.winner > 0 ? "red" : "blue"}!`
        }

        return (
            <div>
                <p>{status}</p>
                <div className="grid flexcontainer">
                    {indexes[0].map(index => (this.createRow(index)))}         
                </div>
                <button onClick={() => window.location.reload()}> Restart game</button>
            </div>
        )
    }
}

export default Grid