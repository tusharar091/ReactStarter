import React from "react";
import ReactDOM from "react-dom";
import './index.css';

function Square(props) {
    return (
        <button className="square"
            onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    renderSquare(i) {
        return <Square value={this.props.value[i]} onClick={() => this.props.onClick(i)} />;
    }

    render() {
        return (
            <div>
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
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [{
                squares: new Array(9).fill(null)
            }],
            isXNext: true
        }
    }
    handleClick(i) {
        const history = this.state.history.slice();
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const isMarked = squares[i] !== null;
        if (calculateWinner(squares) || isMarked) {
            return;
        }
        squares[i] = this.state.isXNext ? 'X' : '0';
        history.push({ squares });
        this.setState({
            history: history,
            isXNext: !this.state.isXNext
        });
    }
    render() {
        let history = this.state.history.slice();
        let current = history[history.length - 1];
        let status;
        const winner = calculateWinner(current);
        if (winner !== null) {
            status = `Winner is ${winner}`;
        } else {
            const nextTurn = this.state.isXNext ? 'X' : '0';
            status = `Next player: ${nextTurn}`;
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board value={current.squares} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
