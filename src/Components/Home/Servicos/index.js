import React from 'react';
import { Container } from '@material-ui/core';
import '../Servicos/servicos.css';
import Desenvolvimento from '../../../assets/img/desenvolvimento.svg'
import Manutencao from '../../../assets/img/manutencao.svg'
import Design from '../../../assets/img/design.svg'


function Servicos() {
    return (
        <Container maxWidth="md" className="nav-display">
            <h1 className="servicos-titulo"  >
                SERVIÇOS
        </h1>

            <div className="services">
                <div className="card-services services1">
                    <Container>
                        <img className="services-img" src={Desenvolvimento} alt="#" />

                        <h2 className="services-text">
                            Desenvolvimento de sites
            </h2>
                    </Container>
                </div>

                <div className="card-services">
                    <Container>
                        <img className="services-img-2" src={Manutencao} alt="#" />


                        <h2 className="services-text">
                            Manutenção de computadores
            </h2>
                    </Container>
                </div>

                <div className="card-services">
                    <Container>
                        <img className="services-img-3" src={Design} alt="#" />
                        <h2 className="services-text">
                            Marketin Digital
            </h2>
                    </Container>
                </div>


            </div>

        </Container>

    );
}

export default Servicos;
