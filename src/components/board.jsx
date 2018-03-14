import React from 'react';
import {render} from 'react-dom';
import Square from './square.jsx'
import _ from 'lodash';

class Board extends React.Component{
    constructor(){
        super();
        this.state = {
            squares : Array(9).fill(null),
            isNext : true
        }
    }

    calculateWinner(squares){
        const lineCases = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,7],
            [2,4,6]
        ];

        for(let i=0;i<lineCases.length;i++){
            const [a,b,c] = lineCases[i];
            if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
                return squares[a];
            }
        }
        return null;
    }

    renderSquare(i){
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        if(this.calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.isNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            isNext : !this.state.isNext
        })
    }

    render(){
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if(winner){
            status = 'Winner' + winner;
        }else{
            status = 'Next player turn' + (this.state.isNext ? 'X' : 'O');
        }
        return(
            <div>
                <div>{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>

                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

export default Board;