import React, { useState } from "react";

const ToggleVisibility = () => {
    // const[variable(estado actual), función que cambia el estado] = función hook(valor inicial)
    const [isVisible, setIsVisible] = useState(true);

    /* Esta función invierte el valor de isVisible, cada vez que es llamada.
    Si isVisible es true, se convierte en false y viceversa. */
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={toggleVisibility}>
            {/* El texto del botón cambia dinámicamente entre "Hide" y "Show" dependiendo del valor de isVisible.
            El párrafo <p> solo se renderiza cuando isVisible es true */}
                {isVisible ? 'Hide' : 'SHOW'}
            </button>
            {

                /* Si lo de la derecha es TRUE, se pintará lo que está luego del && */
                isVisible && <p style={{ color: 'red' }}>Aparezco cuando le das click a SHOW.</p>
                
            }
        </div>

    );
};

export default ToggleVisibility;