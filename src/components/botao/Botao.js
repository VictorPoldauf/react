import React from 'react';
import './Botao.css'
class Botao extends React.Component{
    render(){
        return <button className='Botao'>
        {this.props.conteudo}
        </button>
    }
}
export default Botao;