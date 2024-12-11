import React, { useState } from 'react';

export function MiButton() {
    const[count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return(
        <button style={{background: 'pink'}} onClick={handleClick}>
             Hiciste clic {count} veces
        </button>
    );
}