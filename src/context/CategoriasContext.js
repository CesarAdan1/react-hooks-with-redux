import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

//crearContext
export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {

    //state del context
    const [categorias, guardarCategorias ] = useState([]);

    //llamar a la API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias = await axios.get(url)
            console.log(categorias.data.drinks)
        }
    }, []);

    return(
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;
