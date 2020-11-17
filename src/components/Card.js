import React from 'react';

export default function Card(props) {

    const dragStart = e => {
        //sets target [e] to the item we are dragging [e.target]
        const target = e.target;

        // This time, we will use setData to reference 'card_id'
        e.dataTransfer.setData('card_id', target.id)

        // setTimeout is set to 0 to keep the item we are dragging visible. We grab it
        // to maintain a reference to it while forcing the current position to disappear.
        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }

    const dragOver = e => {

        // Set to prevent reference from being called so that cards can't be dropped into cards
        e.stopPropagation();
    }

    return (
        <div
            id={props.id}
            draggable={props.draggable}
            className={props.className}
            onDragStart={dragStart}
        >
            { props. children }
        </div>
    )
}
