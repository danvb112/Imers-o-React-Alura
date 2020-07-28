import React from 'react';
import PageDefault from '../../components/PageDefault/index';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return (
        <div>
            <PageDefault>
                <h1>Cadastro De Categoria</h1>
                <form>
                    <label>
                        Nome da Categoria:
                        <input
                        type="text"
                        />
                    </label>

                <button>
                    Cadastrar
                </button>
                </form>

                <Link to='/'>
                    Ir para Home
                </Link>
            </PageDefault>
                
        </div>
    )
}

export default CadastroCategoria;