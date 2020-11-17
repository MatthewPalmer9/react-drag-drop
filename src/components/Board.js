import React from 'react';

export default function Board(props) {
    
    // Transfers the card IDs through the event
    // Gets the element by the ID passed in
    // Appends it to the board
    const drop = e => {

        // Prevents bugs/bad behavior from user interaction
        e.preventDefault();
        // Handles holding the data that is being dragged DURING a drag
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    const dragOver = e => {
        // Prevents bugs/bad behavior from user interaction
        e.preventDefault();
    }

    return (
        <div 
            id={props.id} 
            className="board"
            onDrop={drop} 
            onDragOver={dragOver}
        >
            { props.children }
        </div>
    )
}
