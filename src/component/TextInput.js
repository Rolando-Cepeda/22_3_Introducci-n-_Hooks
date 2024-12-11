import React, { useState } from "react";

const TextInput = () => {
    const [text, setText] = useState('');

    /* Definimos la función que se ejecuta cada vez
    que el usuario escribe algo en el campo de texto */
    const handleChange = (event) => {
        setText(event.target.value);// Obtiene el valor actual del campo de texto.
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleChange}></input>
            <p>You typed: {text}</p>
        </div>
    );
};

export default TextInput;