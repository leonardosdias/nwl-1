import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.svg';

const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="" />

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para a Home
                </Link>
            </header>

            <form>
                <h1>Cadastro do Ponto de Coleta</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>
                    <div className="field">
                        <label htmlFor="name">
                            Nome da Entidade
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                        >
                        </input>
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">
                                Email
                        </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                            >
                            </input>
                        </div>
                        <div className="field">
                            <label htmlFor="name">
                                WhatsApp
                        </label>
                            <input
                                id="whatsapp"
                                name="whatsapp"
                                type="text"
                            >
                            </input>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select id="uf" name="uf" >
                                <option value="0">Selecione um Estado</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade)</label>
                            <select id="city" name="city" >
                                <option value="0">Selecione uma Cidade</option>
                            </select>
                        </div>
                    </div>

                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Items de Coleta</h2>
                        <span>Selecione um ou mais ítens abaixo</span>
                    </legend>
                    <ul className="items-grid">
                        <li>
                            <img src="http://localhost:3333/uploads/lampadas.svg" alt="Teste" />
                            <span>Óleo de Cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/lampadas.svg" alt="Teste" />
                            <span>Óleo de Cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/lampadas.svg" alt="Teste" />
                            <span>Óleo de Cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/lampadas.svg" alt="Teste" />
                            <span>Óleo de Cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/lampadas.svg" alt="Teste" />
                            <span>Óleo de Cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/lampadas.svg" alt="Teste" />
                            <span>Óleo de Cozinha</span>
                        </li>
                    </ul>
                </fieldset>
                <button type="submit">Cadastrar ponto de Coleta</button>
            </form>
        </div>
    )
}

export default CreatePoint;