import React from "react";
import './login.css'
import { Container } from '@material-ui/core';
import Logo from '../../assets/img/c2a-logo.png'
import Google from '../../assets/img/google.png'
import Voltar from '../../assets/img/voltar.svg'
import { Link} from 'react-router-dom';



function login() {
    return (
        <Container className="login-main">
            <div className="card-login">
                <Container>
                    <img className="login-logo" src={Logo} alt="logo" />
                    <div className="login-input">
                        <form >
                            <label>login</label>
                            <input ></input>
                            <div className="input-two">
                            <label>Senha</label>
                            <input type="password"></input>
                            </div>
          <Link to="/admin/home"> <button className="login-button">Entrar</button></Link> 
                            
                        </form>

            <button className="register-button">
               <p className="text-social">Registrar</p>
            </button>

            <button className="social-button">
            <img src={Google} alt="google-logo" className="google-logo"/> 
               <p className="text-social">Entrar como Google</p>

            </button>
            <Link to="/">
            <p className="text-voltar"><span><img  className="icon-voltar" src={Voltar} alt="voltar"/></span>Voltar para a página anterior </p>
            </Link>
                    </div>
                </Container>
            </div>
        </Container>
    );
}


export default login;