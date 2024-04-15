import React, { Component } from 'react'
import TarefaEntrada from './TarefaEntrada'
import TarefaLista from './TarefaLista'
import 'bootstrap/dist/css/bootstrap.css'

export default class App extends Component {
    
    state = {
        tarefas: []
    }

    tarefasAux = []

    atualizaTarefas = (novaTar) => {
        this.tarefasAux.push(novaTar)
        this.setState({tarefas: this.tarefasAux})
    }

    render() {
        return (
        <div className='container text-center'>
            <TarefaEntrada atualizaTarefas={this.atualizaTarefas}/>
            {(this.state.tarefas.length !== 0) && <TarefaLista tarefas={this.state.tarefas}/>}
        </div>
        )
    }
}
