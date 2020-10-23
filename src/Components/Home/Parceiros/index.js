import React from 'react';
import './parceiros.css';
import { Container } from '@material-ui/core';
import Setsoll from '../../../assets/img/setsoll.jpg'

function Parceiros() {
    return (
        <main>



                <Container maxWidth="md" className="parceiros">

                    <h1 className="titulo-parc" >PARCEIROS QUE CONFIAM NO NOSSO TRABALHO</h1>
                 
                    <div className="parceiros">
                    <ul className="parceiros-list">
                        <li>
                        
                        <div className="card-parc ">
                            <Container>
                            <img src={Setsoll}/>
                               <p className="parc-name">
                                   SETSOLL
                               </p>
                            </Container>

                        </div>
                        </li>
                        <li>
                        <div className="card-parc">
                            <Container>
                               <img src={Setsoll}/>
                               <p className="parc-name">
                                   SETSOLL
                               </p>

                            </Container>
                        </div>
                        </li>
                        <li>
                        <div className="card-parc">
                            <Container>
                            <img src={Setsoll}/>
                               <p className="parc-name">
                                   SETSOLL
                               </p>

                            </Container>
                        </div>
                        </li>
                        <li>
                        <div className="card-parc">
                            <Container>
                            <img className="parc-img" src={Setsoll}/>
                               <p className="parc-name">
                                   SETSOLL
                               </p>

                            </Container>
                        </div>
                        </li>
                        </ul>

                    </div>
                </Container>

        </main>
    );
}

export default Parceiros;
