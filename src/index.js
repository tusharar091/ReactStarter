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
        return <Square key={i} value={this.props.value[i]} onClick={() => this.props.onClick(i)} />;
    }
    createBody() {
        return (
            <div>
                {
                    [0, 1, 2].map((i) => {
                        return <div key={i} className="board-row">
                            {
                                [0, 1, 2].map((j) => {
                                    return this.renderSquare((i * 3) + j);
                                })
                            }
                        </div>
                    })
                }
            </div>
        )
    }
    render() {
        return (
            this.createBody()
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [{
                squares: new Array(9).fill(null),
                movePosition: -1
            }],
            isXNext: true,
            stepNumber: 0
        }
    }
    updateStateOnMove(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const isMarked = squares[i] !== null;
        if (calculateWinner(squares) || isMarked) {
            return;
        }
        squares[i] = this.state.isXNext ? 'X' : '0';
        history.push({ squares, movePosition: i });
        this.setState({
            history: history,
            isXNext: !this.state.isXNext,
            stepNumber: history.length - 1
        });
    }
    determineOutcome() {
        let history = this.state.history.slice();
        let current = history[this.state.stepNumber];
        let status;
        const winner = calculateWinner(current.squares);
        if (winner !== null) {
            status = `Winner is ${winner}`;
        } else {
            const nextTurn = this.state.isXNext ? 'X' : '0';
            status = `Next player: ${nextTurn}`;
        }
        return { status, current };
    }
    generateMoveHistoryComp() {
        const moves = this.state.history.map((boardState, move) => {
            const desc = move ? `Go To Move #${move} at row 
            : ${Math.floor(boardState.movePosition / 3)}, col : ${boardState.movePosition % 3}`
                : `Go to Game Start`;
            return (
                <li key={move} className={move === this.state.stepNumber ? 'move-item-selected' : ''}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        });
        return moves;
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            isXNext: (step % 2) === 0
        })
    }
    render() {
        const outcome = this.determineOutcome();
        const moves = this.generateMoveHistoryComp();
        return (
            <div className="game">
                <div className="game-board">
                    <Board value={outcome.current.squares} onClick={(i) => this.updateStateOnMove(i)} />
                </div>
                <div className="game-info">
                    <div>{outcome.status}</div>
                    <ol>{moves}</ol>
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
