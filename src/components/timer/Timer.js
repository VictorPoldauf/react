import React from 'react';
import './Timer.css';

class Timer extends React.Component{
    render(){
        return <div className="Timer">
            <span >{this.props.minutos}</span>
            <span >{this.props.segundos}</span>
        </div>
    }
}

export default Timer;