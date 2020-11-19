import React from 'react';

export default function Card(props) {

    const dragStart = e => {
        // on dragStart...
        // sets 'target' to the item we are dragging [e.target]
        const target = e.target;

        // This time, we will use setData to reference 'card_id' which is the exact ID of the item being dragged
        // In other words, it transfers the data by setting its dataTransfer ID based on the original ID of the data
        e.dataTransfer.setData('card_id', target.id)

        // setTimeout is set to 0 to keep the item we are dragging visible. We grab it
        // to maintain a reference to it while forcing the current position to disappear.
        // setTimeout(() => {
        //     target.style.display = "none";
        // }, 0);
    }

    // for every pixel the data is being dragged over, this function is executed.
    const dragOver = e => {
        // e.target.style.display = "block";

        // Set to prevent reference from being called so that cards can't be dropped into cards
        e.stopPropagation();
    }

    return (
        <div
            id={props.id}
            draggable={props.draggable}
            className={props.className}
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
            { props.children }
        </div>
    )
}
