import React, { useState } from 'react';
import PageDefault from '../../components/PageDefault/index';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    const [categorias, setCategorias] = useState(['Teste'])

    const valoresIniciais = {
        nome: 'Nome inicial',
        descricao: ' descrição inicial',
        cor: '#000'
    }
    const [values, setvalues] = useState(valoresIniciais);
    return (
        <div>
            <PageDefault>
                <h1>Cadastro De Categoria: {values.nome}</h1>
                <form onSubmit={ function handleSubmit(infoDosEventos) {
                    infoDosEventos.preventDefault();
                    console.log('voce enviou um form')
                    setCategorias([
                        ...categorias,
                        values
                    ])
                } }>

                    <div>
                        <label>
                            Nome da Categoria: 
                            <input
                            type="text"
                            value={values.nome}
                            onChange={ function funcaoHandlerQueErroPediu(infoDosEventos){
                                //setNomedaCategoria(infoDosEventos.target.value)
                            } }
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            Descrição: 
                            <textarea
                            type="text"
                            value={values.descricao}
                            onChange={ function funcaoHandlerQueErroPediu(infoDosEventos){
                                //setNomedaCategoria(infoDosEventos.target.value)
                            } }
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            Cor: 
                            <input
                            type="color"
                            value={values.cor}
                            onChange={ function funcaoHandlerQueErroPediu(infoDosEventos){
                               //setNomedaCategoria(infoDosEventos.target.value)
                            } }
                            />
                        </label>
                    </div>


                <button>
                    Cadastrar
                </button>
                </form>

                <ul>                
                    {categorias.map((categoria, indice) => {
                        return (
                            <li key={`${categoria}${indice}`}>
                                {categoria}
                            </li>
                    )
                })}
                </ul>

                <Link to='/'>
                    Ir para Home
                </Link>
            </PageDefault>

            
                
        </div>
    )
}

export default CadastroCategoria;