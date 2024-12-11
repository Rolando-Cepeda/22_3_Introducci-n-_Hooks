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
            {/* A medida que vamos escribiendo en INPUT, va saliendo el texto en el párrafo,
            a éste input se le ha añadido la función handleChange */}
            <input type="text" value={text} onChange={handleChange}></input>
            <p>Tu texto es: {text}</p>
        </div>
    );
};

export default TextInput;