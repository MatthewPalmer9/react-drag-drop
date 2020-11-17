import React, { Component } from 'react';
import Board from './components/Board.js';
import Card from './components/Card.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="flexbox">
          <Board id="board-1" className="board">
            <Card id="card-1" className="card" draggable="true">
              <p>Card one</p>
            </Card>
            <Card id="card-2" className="card" draggable="true">
              <p>Card two</p>
            </Card>
          </Board>

          <Board id="board-2" className="board">
            <Card id="card-3" className="card" draggable="true">
              <p>Card three</p>
            </Card>
            <Card id="card-4" className="card" draggable="true">
              <p>Card four</p>
            </Card>
          </Board>
        </main>
      </div>
    )
  }
}

