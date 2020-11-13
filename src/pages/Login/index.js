import React, {Component} from 'react'
import {connect} from 'react-redux'


export class Login extends Component() {
   render(){
       return(
           <div>dsad</div>
       )
   }
  }
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispach =>({

})


export default connect(mapStateToProps, mapDispatchToProps )(Login);








































// import React, { Component } from "react";
// import './login.css'
// import {login, changeValue} from '../../store/actions/auth.action'
// import { Container } from '@material-ui/core';
// import Logo from '../../assets/img/c2a-logo.png'
// import Google from '../../assets/img/google.png'
// import Voltar from '../../assets/img/voltar.svg'
// import { Link} from 'react-router-dom';

// import {connect} from "react-redux";

// export class Login extends Component{
//     render(){
//         return(
// <Container className="login-main">
// <div className="card-login">
//     <Container>
//         <img className="login-logo" src={Logo} alt="logo" />
//         <div className="login-input">
//             <form >
//                 <label>login</label>
//                 <input value={this.props.credentials.username}
//                 onChange={(text) => this.props.changeValue({username: text.target.value})}
//                 ></input>
//                 <div className="input-two">
//                 <label>Senha</label>
//                 <input value={this.props.credentials.password} 
//                 onChange={(text) => this.props.changeValue({password: text.target.value})}
//                 type="password"></input>
//                 </div>
// <button onClick={() => this.login()} className="login-button">Entrar</button>
                
//             </form>

// <button className="register-button">
//    <p className="text-social">Registrar</p>
// </button>

// <button className="social-button">
// <img src={Google} alt="google-logo" className="google-logo"/> 
//    <p className="text-social">Entrar como Google</p>

// </button>
// <Link to="/">
// <p className="text-voltar"><span><img  className="icon-voltar" src={Voltar} alt="voltar"/></span>Voltar para a página anterior </p>
// </Link>
//         </div>
//     </Container>
// </div>
// </Container>
//         )
//     }
// }
// const mapStateToProps = (state) =>({
//     credentials : state.authReducer.credentials,
// })

// const mapDispatchToProps = dispatch => ({
//     login: (credentials) => dispatch(login(credentials)),
//     changeValue: (value) => dispatch(changeValue(value))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Login)




