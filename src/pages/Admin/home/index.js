import React from "react";
import './home.css'
import { Container } from '@material-ui/core';

import { Link} from 'react-router-dom';



function adminHome() {
    return (
        <Container className="home-admin">
            <div className="admin-notifications">

            </div>

            <button className="chamado-admin"> Abrir chamado</button>
            <ul className="list-admin">
                <li>
                    <div className="card-left"></div>
                </li>
                <li>
                    <div className="card-rigth ri"></div>
                </li>
            </ul>

            <div className="historico-admin">

            </div>
        
        
        </Container>
    );
}


export default adminHome;