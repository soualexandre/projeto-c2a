import React from 'react';
import Navbar from '../../Components/Home/Navbar'
import Jambutrom from '../../Components/Home/Jambutron'
import Servicos from '../../Components/Home/Servicos'
import Facilidades from '../../Components/Home/facilidades'
import Conceitos from'../../Components/Home/Conceitos'
import Perfil from'../../Components/Home/Perfil'
import Parceiros from'../../Components/Home/Parceiros'
import Footer from'../../Components/Home/Footer'






function home() {
    return (
        <>
        <Navbar />
        <Jambutrom />
        <Servicos/>
        <Facilidades/>
        <Conceitos/>
        <Perfil/>
        <Parceiros/>
        <Footer/>
     </>
    );
  }
  
  export default home;
  