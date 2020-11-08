import React from "react";
import './home.css'
import { Container } from '@material-ui/core';




function adminHome() {
    return (
        <Container className="home-admin">
            <div className="admin-notifications">

            </div >
           
            <ul className="list-text-admin">
                <li className="chamados-left">
                    <h1>Chamados</h1>
                </li>
                <li>
                    <button className="chamado-admin"> Abrir chamado</button>

                </li>
            </ul>
             <div className="uls">
            <ul className="list-admin">
                <li>
                    <div className="card-left"></div>
                </li>
                <li>
                    <div className="card-rigth "></div>
                </li>
            </ul>
            </div>




            <div className="historico-admin">

            </div>


        </Container>
    );
}


export default adminHome;