import React from 'react';

export default function Board(props) {
    
    // Transfers (Drops) the card IDs through the event
    // Gets the element by the ID passed in
    // Appends it to the board
    const drop = e => {
        // Handles getting the card data by ID that is being dragged
        const card_id = e.dataTransfer.getData('card_id'); // card_id === target.id from Card.js 
        // Grabs the associated DOM element by the card ID
        const card = document.getElementById(card_id);
        
        e.target.appendChild(card);
    }

    const dragOver = e => {
        // Prevents the onDragOver React event from performing its default behavior
        // This will allow the onDrop React event to immediately fire
        e.preventDefault();
    }

    return (
        <div 
            id={props.id} 
            className={props.className}
            onDrop={drop} 
            onDragOver={dragOver}
        >
            { props.children }
        </div>
    )
}
