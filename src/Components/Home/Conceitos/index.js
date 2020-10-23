import React from 'react';
import './conceitos.css';
import { Container } from '@material-ui/core';


function Conceitos() {
  return (
    <div className="main">
      <Container maxWidth="md" className="nav-display">
          <div className="conc-main">
        <h1 className="conc-title">
            UM NOVO CONCEITO EM TACNOLOGIA
     </h1>
        <div className="conc-text">
        Queremos revolucionar o mercado Tocantinense mostrando um jeito moderno pra se pensar a tecnologia através de metodologias e ferramentas nunca vistas na região.
        </div>
        </div>


        <div className="conc-main">
        <h1 className="conc-title">
            UMA QUESTÃO DE HONRA
     </h1>
        <div className="conc-text">
        Nossa empresa preza pela satisfação e confiança dos nossos clientes com relação ao nosso trabalho buscando resolver seus problemas com paciência e resiliencia.
        </div>
        </div>

        <div className="conc-main">
        <h1 className="conc-title">
           FUTURO OUSADO
     </h1>
        <div className="conc-text">
        Esperamos atráves desses conceitos alcançar escalas nacionais mostrando a força do norte e a nossa verdade.
        </div>
        </div>
      </Container>
    </div>

  );
}

export default Conceitos;
