import React, { Component } from 'react'
import TarefaEntrada from './TarefaEntrada'
import TarefaLista from './TarefaLista'
import 'bootstrap/dist/css/bootstrap.css'

export default class App extends Component {
    state = {
        tarefas: ['Preparar aula de programação', 'Fazer feira', 'Preparar marmitas']
    }
    
    render() {
        return (
        <div className='container text-center'>
            <TarefaEntrada plholder='Digite a descrição de uma nova tarefa'/>
            <TarefaLista tarefas={this.state.tarefas}/>
        </div>
        )
    }
}
