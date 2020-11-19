import React, { Component } from 'react';
import Board from './components/Board.js';
import Card from './components/Card.js';

export default class App extends Component {  

  addCard = (e) => {
    console.log(e);
  }

  render() {
    return (
      <div className="App">
        <main className="flexbox">
          <Board id="board-1" className="board">
            {/* <p id="unfinished">Unfinished Tasks</p> */}
            <Card id="1" className="card" draggable="true">
              <p>Card one</p>
            </Card>
            <Card id="2" className="card" draggable="true">
              <p>Card two</p>
            </Card>
          </Board>

          <Board id="board-2" className="board">
            <Card id="3" className="card" draggable="true">
              <p>Card three</p>
            </Card>
            <Card id="4" className="card" draggable="true">
              <p>Card four</p>
            </Card>
          </Board>
        </main>
      </div>
    )
  }
}

