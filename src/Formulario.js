import React, {useContext} from 'react'
import { CategoriasContext } from "./context/CategoriasContext";

const Formulario = () => {

    const { hola } = useContext(CategoriasContext);

    return (
        <form
            className="col-12"
        >
            <fieldset>
                <legend>Busca bebidas por Categoría o Ingredientes</legend>
            </fieldset>
            <div className="row mt-5">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-content"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option value="">-- Selecciona Categoria --</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Recetas"
                    />
                </div>
            </div>
        </form>
    )
}

export default Formulario;