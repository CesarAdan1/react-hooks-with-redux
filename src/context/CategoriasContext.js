import React, { createContext, useState } from 'react'

//crearContext
export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {

    const [hola, guardarHola] = useState('hola');

    return(
        <CategoriasContext.Provider
            value={{
                hola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;
