import React from 'react';
import { FooterBase } from './styles';
import MasterChef from '../../assets/img/MasterChef.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.youtube.com/watch?v=Vl8HzwTkDNc" target="_blank" rel="noopener noreferrer">
        <img src={MasterChef} alt="Logo MasterChef" />
      </a>
      <p>
        Projeto criado durante a Imersão React da Alura
      </p>
    </FooterBase>
  );
}

export default Footer;
