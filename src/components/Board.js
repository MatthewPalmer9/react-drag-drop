import React from 'react';

export default function Board(props) {
    const drop = e => {

        // Prevents bugs/bad behavior from user interaction
        e.preventDefault();
        // Handles holding the data that is being dragged DURING a drag
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);

        const dragOver = e => {
            // Prevents bugs/bad behavior from user interaction
            e.preventDefault();
        }
    }

    return (
        <div 
            id={props.id} 
            onDrop={drop} 
            onDragOver={dragOver}
        >
            { props.children }
        </div>
    )
}
