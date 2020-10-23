import React from 'react';
import './perfil.css';
import { Container } from '@material-ui/core';
import PerfilImage from '../../../assets/img/perfil.jpg'

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
                                    <img className="perfil-image" src={PerfilImage} alt=""/>

                                    </div>
                                </div>
                                <h1 className="perfil-name">Carlos Henrique</h1>
                            </Container>

                        </div>

                        <div className="card-perfil">
                            <Container>
                                <div className="perfil-circle">
                                    <div className="perfil-purple">
                                    <img className="perfil-image" src={PerfilImage} alt=""/>

                                    </div>
                                </div>
                                <h1 className="perfil-name" >Alexandre Souza</h1>

                            </Container>
                        </div>
                        <div className="card-perfil">
                            <Container>
                                <div className="perfil-circle">
                                    <div className="perfil-purple">
                                    <img className="perfil-image" src={PerfilImage} alt=""/>
                                    </div>
                                </div>
                                <h1 className="perfil-name">André Almeida</h1>

                            </Container>
                        </div>
                    </div>
                </Container>
            </div>

        </main>
    );
}

export default Perfil;
