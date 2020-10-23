import React from 'react';
import './perfil.css';
import { Container } from '@material-ui/core';

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

                            </div>
                        <h1>Carlos Henrique</h1>
                        </Container>

                    </div>

                    <div className="card-perfil">
                        <Container>
                            <div className="perfil-circle">

                            </div>
                        <h1>Alexandre Souza</h1>

                        </Container>
                    </div>
                    <div className="card-perfil">
                        <Container>
                            <div className="perfil-circle">

                            </div>
                        <h1>André Almeida</h1>

                        </Container>
                    </div>
                </div>
            </Container>
            </div>

        </main>
    );
}

export default Perfil;
