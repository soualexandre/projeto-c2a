import React from 'react';
import Navbar from '../../Components/Home/Navbar'
import Jambutrom from '../../Components/Home/Jambutron'
import Servicos from '../../Components/Home/Servicos'
import Facilidades from '../../Components/Home/facilidades'
import Conceitos from'../../Components/Home/Conceitos'
import Perfil from'../../Components/Home/Perfil'




function home() {
    return (
        <>
        <Navbar />
        <Jambutrom />
        <Servicos/>
        <Facilidades/>
        <Conceitos/>
        <Perfil/>
     </>
    );
  }
  
  export default home;
  