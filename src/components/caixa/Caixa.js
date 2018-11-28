import React from 'react';
import './Caixa.css';
import Timer from '../timer/Timer';
import Botao from '../botao/Botao';

class Caixa extends React.Component{
    render(){
        return <section className="Caixa">
        <div className="main">
        <Timer minutos = '10' segundos = '23'/>
        
        <div className="buttons">
        <Botao conteudo='+' />
        <Botao conteudo='-' />
        </div>
        </div>
        
        <div className="buttons">
        <Botao conteudo='Begin' />
        <Botao conteudo='Stops' />
        </div>
        </section>
    }
}

export default Caixa;