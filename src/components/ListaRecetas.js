import React, { useContext } from 'react'
import Recetas from './Recetas';
import { RecetasContext } from '../context/RecetasContext';

const ListaRecetas = () => {

    const  { recetas } = useContext(RecetasContext)

    console.log(recetas)
    return (
        <div className="row mt-5">
            {recetas.map(receta => (
                <Recetas 
                    key={receta.idDrink}
                    receta={receta}
                />
            ))}
        </div>
    )
}

export default ListaRecetas;
