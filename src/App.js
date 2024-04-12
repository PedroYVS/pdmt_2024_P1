import React, { Component } from 'react'
import TarefaEntrada from './TarefaEntrada'
import 'bootstrap/dist/css/bootstrap.css'

export default class App extends Component {
    render() {
        return (
        <div className='container text-center'>
            <TarefaEntrada
            plholder='Digite a descrição de uma nova tarefa'/>
        </div>
        )
    }
}
