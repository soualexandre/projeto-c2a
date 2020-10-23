import React from 'react';
import './perfil.css';
import { Container } from '@material-ui/core';
import Alexandre from '../../../assets/img/perfil.jpg'
import Carlos from '../../../assets/img/car.png'
import Andre from '../../../assets/img/ande.jpg'



function Perfil() {
    return (
        <main>


            <div className="perfil-main">

                <Container maxWidth="md">

                    <h1 className="titulo2" maxWidth="lg">QUEM PROCURAR?</h1>
                    <div className="perfil">
                        <div className="card-perfil card-perfil-1">
                            <Container>
                                <div className="perfil-circle">
                                    <div className="perfil-purple">
                                        <img className="perfil-image" src={Carlos} alt="" />

                                    </div>
                                </div>
                                <h1 className="perfil-name">Carlos Henrique</h1>

                                <div className="perfil-bio">
                                    CMO Reponsável pela expansão da
                                    empresa e de nossos serviços
                                </div>
                            </Container>

                        </div>

                        <div className="card-perfil">
                            <Container>
                                <div className="perfil-circle">
                                    <div className="perfil-purple">
                                        <img className="perfil-image" src={Alexandre} alt="" />

                                    </div>
                                </div>
                                <h1 className="perfil-name" >Alexandre Souza</h1>

                                <div className="perfil-bio">
                                    CTO da empresa responsável pelo setor de inovação e pesquisa e desenvolvimento.
                                </div>

                            </Container>
                        </div>
                        <div className="card-perfil">
                            <Container>
                                <div className="perfil-circle">
                                    <div className="perfil-purple">
                                        <img className="perfil-image" src={Andre} alt="" />
                                    </div>
                                </div>
                                <h1 className="perfil-name">André Almeida</h1>
                                <div className="perfil-bio">
                                    CTO da empresa responsável pelo setor de inovação e pesquisa e desenvolvimento.
                                </div>

                            </Container>
                        </div>
                    </div>
                </Container>
            </div>

        </main>
    );
}

export default Perfil;
